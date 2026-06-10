# AUREUM — Fine Timepieces Storefront

A quiet-luxury watch storefront for men's and women's watches. Single-page app,
hash-routed, **no build step, no Node** — drops straight onto GitHub Pages.

```
aureum-watches/
  index.html      # everything: design system (inline CSS), SVG watch renderer,
                  #   router, all views, and the localStorage cart/checkout
  products.js     # the catalog — DATA ONLY. Edit this to add/change watches.
  assets/watches/ # product imagery (real Armitron photos live here)
  README.md
```

## Run it locally

It's a static site. Either:

- **Just open `index.html`** in a browser, **or**
- Serve it (recommended, avoids any file:// quirks). With Python installed:
  ```powershell
  cd C:\Users\cockm\aureum-watches
  python -m http.server 5173
  ```
  then visit http://localhost:5173

## Deploy (GitHub Pages)

1. Push this folder to a repo (e.g. `aureum-watches`).
2. Repo → Settings → Pages → deploy from `main` / root.
3. Done. Hash routing means **no 404/rewrite config needed**.

## Routes

`#/` home · `#/shop` (`?gender=men|women&sort=low|high|featured`) · `#/men` ·
`#/women` · `#/watch/<id>` · `#/cart` · `#/checkout` · `#/confirmation` ·
`#/about` · `#/shipping-returns` · `#/privacy` · `#/terms`

## Editing the catalog

Open **`products.js`** and edit the `window.PRODUCTS` array. Each watch:

```js
{
  id:"unique-slug", name:"The …", tagline:"…", gender:"men"|"women",
  price:189, compareAt:425,        // price = sold; compareAt = struck-through anchor
  dialColor:"…", featured:true,    // featured → shown on the home grid
  blurb:"…", specs:{ "Case size":"40 mm", … },
  badge:"Trending",                 // optional: "Trending" | "Bestseller" | "New"
  rating:4.8, reviews:1840,         // optional: social proof (else auto-derived, stable)
  stock:5,                          // optional: ≤8 shows "Limited stock — only N left"
  // EITHER real photos:
  images:["assets/watches/your-photo.jpg", "…"],   // first is primary; 2+ → gallery
  // OR an illustration spec (used when there are no images):
  render:{ caseTone:"twotone", bezel:"fluted", dial:"mop", markers:"diamond", strap:"jubilee" }
}
```

**`render` options:**
- `caseTone`: `steel` · `gold` · `rosegold` · `black` · `twotone`
- `shape`: (round, default) · `tank` (rectangular dress watch — ignores `bezel`)
- `bezel`: `fluted` · `coin` · `diver` · `smooth` · `octagon` (integrated-sport)
- `dial`: `white` · `ivory` · `silver` · `champagne` · `navy` · `blue` · `black` ·
  `mop` · `green` · `sand` · `salmon` · `slate` · `skeleton` (openworked movement)
- `markers`: `stick` · `roman` · `arabic` · `diamond`
- `strap`: `jubilee` · `oyster` · `mesh` · `leather` · `integrated` · `fabric` (NATO)
- `texture:"tapisserie"` — adds a subtle grid texture (use with `octagon` sport dials)
- `moonphase:true` — moon aperture at 6 o'clock
- `chrono:true` — three chronograph sub-dials (replaces the central seconds hand)
- `date:false` — hide the date window (auto-hidden for skeleton/chrono)

**Merchandising:** products with `badge:"Trending"` populate the home **Trending Now**
row; `badge:"Bestseller"` populate **Best Sellers**; `featured:true` populate the
**Signature Four**. Shop has gender + price (`Under $200` / `$200+`) filters and a
"Most Reviewed" sort. A one-time **10%-off slide-in** (code `AUREUM10`) shows on first
visit and is remembered in `localStorage` (`aureum_promo`).

### Swapping in real product photos
The hero piece ("The Marchesa") already uses real photos. For any other watch,
just add an `images:[...]` array and it replaces the illustration automatically.
**Before going live, replace placeholder illustrations with real supplier photos.**

## Going live with real payments (Snipcart — already wired)

The store ships with a **Snipcart integration already built in**, gated behind one
constant. With no key it runs the **demo** cart/checkout (validates, clears the bag,
shows a confirmation, **charges nothing** — cart in `localStorage` `aureum_cart_v1`).
Paste your key and add-to-cart, the cart, and checkout become **real Snipcart card
checkout** — no other code changes.

**3 steps to switch it on:**
1. Create a free **Snipcart** account → Dashboard → **API Keys** → copy your **PUBLIC**
   key (use the **TEST** key first).
2. In `index.html`, set the constant near the top of the `<script>`:
   ```js
   const SNIPCART_API_KEY = "PASTE_YOUR_PUBLIC_KEY";   // empty = demo
   ```
   That auto-loads Snipcart's JS/CSS and routes Add-to-Bag / cart / checkout through it
   (see `snipAdd()`, `openSnipCart()`, `goCheckout()`).
3. **One dashboard setting for this SPA:** Snipcart validates prices by crawling each
   product URL. Because this is a single hash-routed page, either
   **(a)** in Snipcart → Settings, turn **off** "Verify products against your website"
   (simplest), **or (b)** keep validation on and add static hidden
   `class="snipcart-add-item"` definition `<button>`s for each product to `index.html`.
   Option (a) is fine to launch; (b) is more tamper-proof later.
4. Test with a Snipcart **test card** (`4242 4242 4242 4242`), then swap the TEST key
   for your **LIVE** key + connect a payout processor (Stripe/Paystack/etc.) in Snipcart.

> Snipcart takes 2% per transaction (free until you're selling). It works on a static
> GitHub Pages site with **no backend** — that's why it's the pick here.

**Alternative — Stripe Payment Links** (simplest, one product at a time, no cart):
create a Payment Link per product in Stripe, store it as `checkoutUrl:"https://buy.stripe.com/…"`
on each product in `products.js`, and point Add-to-Bag at that URL. No multi-item cart.

## Deploy (GitHub Pages)
This repo is set up to deploy from `main` / root. Hash routing + relative paths mean it
works on a project page (`/aureum-watches/`) with **no config**. Push to `main` and
enable Pages (Settings → Pages → Deploy from branch → `main` → `/root`). `SOURCING.md`
is **gitignored** so your supplier costs never ship.

## Sourcing & margins (private)
See **`SOURCING.md`** — it maps every watch to a real Alibaba/AliExpress supplier
style with landed cost, sell price and **markup multiple** (all 3–10×). It is the
business playbook: where to buy, search terms, MOQ/sample workflow, and margin levers.
**Keep it private** — supplier cost is intentionally **not** in `products.js` (that
file is public). Add `SOURCING.md` to `.gitignore` before pushing, or keep it out of
the deployed folder.

Pricing is set to the **impulse/volume band ($49–99)** with strong struck-through
anchors — the proven conversion sweet spot for dropship watches. Conversion features
built in: **sticky add-to-cart bar**, **trust + payment row** under the buy button,
**cart upsell** ("pairs well with"), **express-checkout** buttons (visual until a real
processor is wired), and an **exit-intent + timed** first-order discount modal.

## Before accepting real orders (business checklist)
- Replace placeholder watch illustrations with **your own product photography**.
- ~~Add Privacy Policy and Terms~~ **Done** — `#/privacy` and `#/terms` are live
  (Florida governing law), linked in the footer. Optional: have an attorney review.
- ~~Real support email~~ **Done** — `cockmankevin@gmail.com` in footer + policy pages.
- Connect a payment processor (above — paste your Snipcart key into `index.html`).
- Enable GitHub Pages (Settings → Pages → deploy from `main` / root).
- Confirm shipping times (currently 1–2 day dispatch, 5–9 day delivery) match your
  actual supplier/dropship lead times.
- Sell genuine goods honestly — resell Armitron-branded pieces as Armitron; don't
  imply affiliation with brands you don't represent.

## Rebranding
`AUREUM` appears as the site name in the header, footer, watch-dial text, and
titles. Find-and-replace `AUREUM` to rename. Colors/fonts are CSS variables at the
top of the `<style>` block in `index.html`.
