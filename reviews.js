/* =============================================================================
   HOURLEIGH — Customer reviews (DATA ONLY)
   -----------------------------------------------------------------------------
   First-party, self-hosted reviews. This is the single source of truth for
   real customer reviews shown on the storefront.

   HONESTY RULE — do not invent reviews. Star ratings and review counts only
   appear on the site for products that actually have entries here. A product
   with no entries shows NO stars and an honest "be the first to review" prompt.

   HOW TO ADD A REVIEW (after a real customer submits one via the on-site form
   or by email):
   1. Find the product's id (see products.js — e.g. "lunar", "marchesa-mop").
   2. Add an object to that product's array below. Format:

        "lunar": [
          {
            name: "James R.",                 // first name + last initial is plenty
            rating: 5,                          // whole number 1–5
            date: "2026-06-20",                 // YYYY-MM-DD
            title: "Looks like triple the price",
            body: "The moonphase actually works and the weight feels premium...",
            verified: true                      // true if you confirmed a real order
          }
        ],

   3. Save the file and deploy. The product page picks it up automatically:
      it computes the average, shows the star summary, the rating breakdown,
      and each review card. No code changes needed.

   Keys must match a product id from products.js exactly. Products not listed
   here simply have no reviews yet.
   ============================================================================ */

window.REVIEWS = {
  // No customer reviews yet. Add real ones here as they come in (see header).
};
