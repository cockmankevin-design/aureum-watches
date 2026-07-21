"""Shared Polymarket US client factory.

Reads credentials from the environment so keys never live in source. If a
`.env` file is present next to this module it is loaded first (optional — no
hard dependency on python-dotenv).
"""

from __future__ import annotations

import os
from pathlib import Path

from polymarket_us import PolymarketUS


def _load_dotenv() -> None:
    """Populate os.environ from a sibling .env file, if one exists.

    Deliberately tiny so the project has no extra runtime dependency. Existing
    environment variables always win over the file.
    """
    env_path = Path(__file__).with_name(".env")
    if not env_path.exists():
        return
    for raw in env_path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key, value = key.strip(), value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def get_client() -> PolymarketUS:
    """Build an authenticated PolymarketUS client from environment credentials.

    Raises:
        RuntimeError: if either credential env var is missing.
    """
    _load_dotenv()

    key_id = os.environ.get("POLYMARKET_KEY_ID")
    secret_key = os.environ.get("POLYMARKET_SECRET_KEY")

    missing = [
        name
        for name, value in (
            ("POLYMARKET_KEY_ID", key_id),
            ("POLYMARKET_SECRET_KEY", secret_key),
        )
        if not value
    ]
    if missing:
        raise RuntimeError(
            "Missing Polymarket credentials: "
            + ", ".join(missing)
            + ". Copy polymarket/.env.example to polymarket/.env and fill it in, "
            "or export the variables in your shell."
        )

    return PolymarketUS(key_id=key_id, secret_key=secret_key)
