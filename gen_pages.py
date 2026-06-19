#!/usr/bin/env python3
"""
HOURLEIGH — static SEO page generator (no Node, no build step).

Reads products.js and writes:
  p/<id>.html   — one indexable product page per watch (schema.org JSON-LD,
                  canonical, og tags) that deep-links into the SPA to buy
  sitemap.xml   — home + all product pages
  robots.txt    — allow all + sitemap pointer

Run after any catalog change:   python gen_pages.py
At domain cutover: change BASE to https://hourleigh.com and re-run (see
DOMAIN-CUTOVER.md).
"""
import json, re, os, html

BASE = "https://hourleigh.com"   # live custom domain
BRAND = "HOURLEIGH"

# ---- parse products.js (it's JS, not JSON — normalize it) -------------------
src = open("products.js", encoding="utf-8").read()
body = src[src.index("window.PRODUCTS = [") + len("window.PRODUCTS ="):]
body = body[: body.rindex("];") + 1]
body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)          # block comments
body = re.sub(r"//[^\n]*", "", body)                        # line comments (no URLs in file)
body = re.sub(r"^(\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', body, flags=re.M)  # bare keys (line start)
body = re.sub(r"([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', body)            # bare keys (inline)
body = re.sub(r",(\s*[}\]])", r"\1", body)                  # trailing commas
products = json.loads(body)
assert len(products) >= 10, "parse failed"

os.makedirs("p", exist_ok=True)
e = html.escape

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>{name} — {tagline} | {brand}</title>
<meta name="description" content="{desc}"/>
<link rel="canonical" href="{url}"/>
<meta property="og:type" content="product"/>
<meta property="og:site_name" content="{brand}"/>
<meta property="og:title" content="{name} — {tagline}"/>
<meta property="og:description" content="{desc}"/>
<meta property="og:url" content="{url}"/>
<meta property="og:image" content="{img_abs}"/>
<script type="application/ld+json">
{ldjson}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
  :root{{--ivory:#F7F5F0;--ink:#141414;--muted:#6E675C;--gold:#9A7A2E;--line:rgba(20,20,20,.12)}}
  *{{box-sizing:border-box;margin:0;padding:0}}
  body{{background:var(--ivory);color:var(--ink);font-family:Jost,sans-serif;line-height:1.6}}
  .wrap{{max-width:980px;margin:0 auto;padding:28px 20px 64px}}
  .brand{{font-family:'Cormorant Garamond',serif;letter-spacing:.4em;font-size:1.5rem;text-align:center;display:block;color:var(--ink);text-decoration:none;padding:10px 0 26px}}
  .grid{{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start}}
  @media(max-width:760px){{.grid{{grid-template-columns:1fr}}}}
  .photo{{background:#fff;border:1px solid var(--line)}}
  .photo img{{width:100%;height:auto;display:block;padding:5%}}
  .eyebrow{{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);font-weight:500}}
  h1{{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:clamp(2rem,4.5vw,3rem);line-height:1.05;margin:.25em 0 .15em}}
  .tl{{color:var(--muted);margin-bottom:14px}}
  .price{{font-family:'Cormorant Garamond',serif;font-size:2rem}}
  .was{{color:var(--muted);text-decoration:line-through;font-size:1rem;margin-left:10px}}
  .rating{{color:var(--gold);font-size:.9rem;margin:6px 0 0}}
  p.blurb{{color:#3B3833;font-weight:300;margin:18px 0;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}}
  .cta{{display:inline-block;background:var(--ink);color:var(--ivory);text-decoration:none;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;font-weight:500;padding:1em 2.2em;border:1px solid var(--ink);transition:.3s}}
  .cta:hover{{background:transparent;color:var(--ink)}}
  table{{width:100%;border-collapse:collapse;margin-top:22px;font-size:.92rem}}
  td{{padding:8px 0;border-bottom:1px solid rgba(20,20,20,.07);vertical-align:top}}
  td:first-child{{color:var(--muted);width:42%}}
  .foot{{text-align:center;color:var(--muted);font-size:.8rem;margin-top:46px}}
  .foot a{{color:var(--gold)}}
</style>
</head>
<body>
<div class="wrap">
  <a class="brand" href="/">{brand}</a>
  <div class="grid">
    <div class="photo"><img src="../{img}" alt="{name} — {tagline}"/></div>
    <div>
      <span class="eyebrow">{gender} · {dial}</span>
      <h1>{name}</h1>
      <div class="tl">{tagline}</div>
      <div class="price">${price}<span class="was">${compare}</span></div>
      {rating_html}
      <p class="blurb">{blurb}</p>
      <a class="cta" href="/watch/{pid}">Shop this watch</a>
      <table>{specs_rows}</table>
    </div>
  </div>
  <div class="foot">Complimentary worldwide shipping · 2-year warranty · 30-day returns<br/>
  <a href="/shop">Browse the full {brand} collection →</a></div>
</div>
<!-- Snipcart product definition: lets Snipcart validate price by crawling this page (price stays in sync with products.js) -->
<div hidden class="snipcart-add-item"
  data-item-id="{pid}"
  data-item-name="{name}"
  data-item-price="{price}"
  data-item-url="{url}"
  data-item-image="{img_abs}"
  data-item-description="{desc}"></div>
</body>
</html>
"""

urls = [f"{BASE}/"]
for p in products:
    pid = p["id"]
    img = p["images"][0]
    url = f"{BASE}/p/{pid}.html"
    urls.append(url)
    ld = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": f'{p["name"]} — {p["tagline"]}',
        "image": [f"{BASE}/{i}" for i in p["images"]],
        "description": p["blurb"],
        "brand": {"@type": "Brand", "name": p["specs"].get("Maker", BRAND)},
        "url": url,
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": "USD",
            "price": str(p["price"]),
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
        },
    }
    rating_html = (
        f'<div class="rating">★ {p["makerRating"]} maker marketplace average</div>'
        if p.get("makerRating") else ""
    )
    specs_rows = "".join(
        f"<tr><td>{e(k)}</td><td>{e(str(v))}</td></tr>" for k, v in p["specs"].items()
    )
    html_out = PAGE.format(
        brand=BRAND, name=e(p["name"]), tagline=e(p["tagline"]),
        desc=e(p["blurb"][:155]), url=url, img=img, img_abs=f"{BASE}/{img}",
        ldjson=json.dumps(ld, indent=1), gender="Men's" if p["gender"] == "men" else "Women's",
        dial=e(p["dialColor"]), price=p["price"], compare=p["compareAt"],
        rating_html=rating_html, blurb=e(p["blurb"]), pid=pid, specs_rows=specs_rows,
    )
    open(f"p/{pid}.html", "w", encoding="utf-8").write(html_out)

open("sitemap.xml", "w", encoding="utf-8").write(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls)
    + "</urlset>\n"
)
open("robots.txt", "w", encoding="utf-8").write(
    f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n"
)
print(f"generated {len(products)} pages + sitemap ({len(urls)} urls) + robots.txt  [BASE={BASE}]")
