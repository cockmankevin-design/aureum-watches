export const meta = {
  name: 'hourleigh-marketing-crew',
  description: 'HOURLEIGH 5-agent marketing crew: 1 lead sets strategy, 4 producers create a copy-paste-ready launch content pack',
  phases: [
    { title: 'Strategy', detail: 'Marketing lead writes the brief' },
    { title: 'Production', detail: '4 producers create content from the brief' },
  ],
}

const CTX = `
BRAND: HOURLEIGH (https://hourleigh.com) — a quiet-luxury online watch store for men & women.
POSITIONING: "Luxury is a look, not a loan." Watches that look far more expensive than they are. Understated quiet-luxury aesthetic (ivory + gold, serif type). Price band $49–99.
OFFER: 20% off first order, code HOURLEIGH20. Trust: complimentary worldwide shipping, 2-year warranty, 30-day returns.
HERO PRODUCT: The Lunar — men's moonphase chronograph, $85 (comparable $250).
CATALOG (12 watches):
  Women — The Marchesa (mother-of-pearl two-tone day-date, $69), The Serpentine (open-heart AUTOMATIC, $99), The Aria (rose-gold mesh, $55), The Céleste (gold & blue leather, $55), The Lustre (crystal skeleton AUTOMATIC, $99), The Bijou (rose-gem bracelet, mother-of-pearl, $65).
  Men — The Regent (two-tone chronograph, $79), The Monarch (integrated-sport onyx, $89), The Mechanist (skeleton AUTOMATIC, $99), The Lunar (moonphase chronograph, $85), The Tempo (royal-blue steel chrono, $85), The Depths (emerald sport day-date, $75).
HONESTY RULES: describe styles only (e.g. "datejust-style", "moonphase look"), NEVER claim affiliation with Rolex/AP/Patek/etc. Keep movement claims accurate (quartz vs automatic). Audience = value-savvy shoppers who want the look of luxury, plus gift buyers (his & hers).
VOICE: confident, warm, premium-but-accessible. Make EVERYTHING copy-paste ready (real captions, real scripts, real article text) — NOT advice about what to write.
`;

phase('Strategy')
const brief = await agent(
`You are the MARKETING DIRECTOR and LEAD of HOURLEIGH's content team. Write a tight, practical one-page strategy BRIEF that the other 4 agents will build from. Include: (1) brand voice in 3 bullets + a short do/don't word list; (2) the 3 hero watches to push this week, with the angle for each; (3) 6 reusable hooks/angles (e.g. "a $2,000 look for $85"); (4) exactly how to deploy the HOURLEIGH20 offer; (5) this week's single content theme. Be specific and concise — this brief steers everyone else.
${CTX}`,
  { label: 'lead: strategy brief', phase: 'Strategy' });

phase('Production')
const [social, video, seo, email] = await parallel([
  () => agent(`Using the BRIEF below, produce a COPY-PASTE-READY 7-day social content calendar for Instagram / TikTok / Facebook. For each of the 7 days give: platform(s), the watch featured, a FULL caption (line breaks, tasteful emojis, hashtags) and a CTA. Mix product, lifestyle, social-proof, and offer posts. End with a block of 15 reusable hashtags.\n\n===BRIEF===\n${brief}\n${CTX}`,
    { label: 'social: 7-day calendar', phase: 'Production' }),
  () => agent(`Using the BRIEF below, write 5 short-form VIDEO / REEL scripts (15–30s each) for TikTok & Reels. Each script: a HOOK line (first 2 seconds), shot-by-shot directions, on-screen text, the voiceover/caption, and a CTA. Feature different watches; at least one on The Lunar and one "his & hers" gift angle.\n\n===BRIEF===\n${brief}\n${CTX}`,
    { label: 'video: 5 reel scripts', phase: 'Production' }),
  () => agent(`Using the BRIEF below, write 2 SEO buying-guide BLOG POSTS designed to rank on Google and link to HOURLEIGH products. For each post give: an SEO title, a meta description (<155 chars), a URL slug, and the FULL article (600–900 words, with headings, naturally recommending relevant HOURLEIGH watches and mentioning the HOURLEIGH20 offer). Target real searches (e.g. affordable moonphase watches, skeleton watches under $100, his-and-hers watch sets).\n\n===BRIEF===\n${brief}\n${CTX}`,
    { label: 'seo: 2 articles', phase: 'Production' }),
  () => agent(`Using the BRIEF below, write 3 COPY-PASTE-READY marketing EMAILS: (1) welcome + 20% off using HOURLEIGH20, (2) abandoned-cart recovery, (3) bestseller / hero (The Lunar) spotlight. For each email give 3 subject-line options, preview text, and the full body copy with one clear CTA.\n\n===BRIEF===\n${brief}\n${CTX}`,
    { label: 'email: 3 campaigns', phase: 'Production' }),
]);

return { brief, social, video, seo, email };