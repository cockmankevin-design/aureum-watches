"""Verify that the Polymarket US connection and credentials work.

This is read-only: it authenticates, fetches your account balances, and reads
a public market. It never places, modifies, or cancels an order, so it is safe
to run any time.

    python -m polymarket.check_connection
"""

from __future__ import annotations

import sys

from polymarket_us.errors import AuthenticationError, PolymarketUSError

from .client import get_client


def main() -> int:
    try:
        client = get_client()
    except RuntimeError as exc:
        print(f"✗ {exc}")
        return 1

    try:
        balances = client.account.balances()
        print("✓ Authenticated with Polymarket US.")
        print(f"  Account balances: {balances}")

        # Public read to confirm gateway connectivity too.
        market = client.markets.retrieve_by_slug("chiefs-super-bowl-lx")
        print(f"✓ Reached market gateway. Sample market: {market.get('slug', market)}")
    except AuthenticationError:
        print("✗ Credentials were rejected. Double-check POLYMARKET_KEY_ID / "
              "POLYMARKET_SECRET_KEY.")
        return 1
    except PolymarketUSError as exc:
        print(f"✗ API error: {exc}")
        return 1
    finally:
        client.close()

    print("\nConnection looks good.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
