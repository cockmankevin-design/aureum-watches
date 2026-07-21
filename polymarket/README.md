# Polymarket US integration

Wires this project up to the [Polymarket US](https://docs.polymarket.us) trading
API via the official `polymarket_us` Python SDK.

## ⚠️ Real money

The Polymarket US API places **live, real-money orders on regulated prediction
markets**. Orders can fill instantly and are not reversible. Everything here is
built preview-first so you don't spend anything by accident — read the safety
notes below before using `--live`.

## Setup

```bash
cd polymarket
python -m venv .venv && source .venv/bin/activate   # optional
pip install -r requirements.txt
cp .env.example .env      # then edit .env with your real key id + secret
```

Credentials are read from `POLYMARKET_KEY_ID` and `POLYMARKET_SECRET_KEY`
(via the environment or a local `.env`). `.env` is gitignored — never commit
real keys.

## Verify the connection (read-only, safe)

```bash
python -m polymarket.check_connection
```

Authenticates, prints your account balances, and reads a public market. Places
nothing.

## Placing an order

`place_order.py` defaults to a **dry run** (preview only). It submits a real
order only when you pass `--live`, and even then it refuses if the worst-case
cost exceeds `--max-cost` (default $50).

```bash
# Dry run — shows estimated fill/cost, spends nothing:
python -m polymarket.place_order --slug chiefs-super-bowl-lx --price 0.55 --qty 100

# Submit for real, capped at $75 worst-case:
python -m polymarket.place_order --slug chiefs-super-bowl-lx --price 0.55 --qty 100 \
    --live --max-cost 75
```

The order built here mirrors the original snippet: a good-till-cancel limit
BUY (`ORDER_INTENT_BUY_LONG`). Adjust `build_order()` in `place_order.py` for
other intents/types.

## Files

| File | Purpose |
|------|---------|
| `client.py` | Builds an authenticated client from env credentials |
| `check_connection.py` | Read-only connectivity + auth check |
| `place_order.py` | Preview-first order placement with a cost guard |
| `.env.example` | Template for credentials |
