"""Place a Polymarket US order — safely.

By default this only PREVIEWS the order (a dry run against the API that returns
estimated fills/cost and places nothing). Real money is spent only when you
pass --live AND the order's worst-case cost is within --max-cost.

Examples:
    # Dry run (default) — shows what would happen, spends nothing:
    python -m polymarket.place_order --slug chiefs-super-bowl-lx --price 0.55 --qty 100

    # Actually submit, but refuse if worst-case cost exceeds $75:
    python -m polymarket.place_order --slug chiefs-super-bowl-lx --price 0.55 \
        --qty 100 --live --max-cost 75
"""

from __future__ import annotations

import argparse
import sys

from polymarket_us.errors import PolymarketUSError

from .client import get_client


def build_order(slug: str, price: str, qty: int) -> dict:
    """Build a good-till-cancel limit BUY order payload."""
    return {
        "marketSlug": slug,
        "intent": "ORDER_INTENT_BUY_LONG",
        "type": "ORDER_TYPE_LIMIT",
        "price": {"value": price, "currency": "USD"},
        "quantity": qty,
        "tif": "TIME_IN_FORCE_GOOD_TILL_CANCEL",
    }


def worst_case_cost(price: str, qty: int) -> float:
    """Max USD a limit buy can cost: price per contract * quantity."""
    return float(price) * qty


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Place a Polymarket US limit buy order.")
    parser.add_argument("--slug", required=True, help="Market slug, e.g. chiefs-super-bowl-lx")
    parser.add_argument("--price", required=True, help="Limit price in USD, e.g. 0.55")
    parser.add_argument("--qty", type=int, required=True, help="Number of contracts")
    parser.add_argument(
        "--live",
        action="store_true",
        help="Actually submit the order. Without this flag, only a preview runs.",
    )
    parser.add_argument(
        "--max-cost",
        type=float,
        default=50.0,
        help="Refuse to submit a live order whose worst-case cost exceeds this USD amount "
        "(default: 50).",
    )
    args = parser.parse_args(argv)

    order = build_order(args.slug, args.price, args.qty)
    cost = worst_case_cost(args.price, args.qty)

    print(f"Order: BUY {args.qty} @ ${args.price} on '{args.slug}' "
          f"(worst-case cost ${cost:.2f})")

    try:
        client = get_client()
    except RuntimeError as exc:
        print(f"✗ {exc}")
        return 1

    try:
        preview = client.orders.preview(order)
        print(f"Preview: {preview}")

        if not args.live:
            print("\nDry run only — no order was placed. Re-run with --live to submit.")
            return 0

        if cost > args.max_cost:
            print(f"\n✗ Refusing to submit: worst-case cost ${cost:.2f} exceeds "
                  f"--max-cost ${args.max_cost:.2f}. Raise --max-cost to override.")
            return 1

        result = client.orders.create(order)
        print(f"\n✓ Order submitted: {result}")
        return 0
    except PolymarketUSError as exc:
        print(f"✗ API error: {exc}")
        return 1
    finally:
        client.close()


if __name__ == "__main__":
    sys.exit(main())
