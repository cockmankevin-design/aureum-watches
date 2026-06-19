/* =============================================================================
   HOURLEIGH — Watch catalog (DATA ONLY)
   -----------------------------------------------------------------------------
   This is the single source of truth for the storefront's products. To add or
   edit a watch, edit this file only — index.html reads from window.PRODUCTS.

   IMAGES — every product uses REAL photographs (self-hosted in assets/watches/).
   The catalog is curated to 12 real, sourceable watches; each photo shows the
   actual product that ships. Add more images to any product's `images` array
   (first = primary, 2+ = gallery thumbnails).

   PRICING (impulse / volume band — best conversion + 3–10× margin)
   • price     = your selling price   • compareAt = struck-through anchor
   • Supplier COST/margins are intentionally NOT here (this file is public) —
     see the PRIVATE SOURCING.md.
   ============================================================================ */

window.PRODUCTS = [

  /* ======================= WOMEN'S (6) ======================= */

  {
    id: "marchesa-mop",
    name: "The Marchesa",
    tagline: "Mother-of-Pearl Day-Date · 26 mm",
    gender: "women",
    price: 69,
    compareAt: 199,
    dialColor: "Mother-of-Pearl",
    featured: true,
    hero: true,
    badge: "Bestseller",
    images: [
      "assets/watches/armitron-mop-white-wrist.jpg",
      "assets/watches/armitron-mop-green-box.jpg",
      "assets/watches/armitron-mop-white-wrist-2.jpg",
      "assets/watches/armitron-duo-wrist.jpg"
    ],
    variants: { label: "Dial", options: ["White Mother-of-Pearl", "Green Mother-of-Pearl"] },
    blurb:
      "A jeweller's silhouette rendered at an honest price. The Marchesa pairs a fluted two-tone bezel with a luminous mother-of-pearl dial and hand-set crystal markers — a quiet flash of light at the wrist.",
    specs: {
      "Case size": "26 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Mother-of-pearl, crystal-set hour markers",
      Movement: "Japanese quartz",
      Functions: "Day · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "serpentine",
    name: "The Serpentine",
    tagline: "Two-Tone Open-Heart Automatic · 32 mm",
    gender: "women",
    price: 99,
    compareAt: 260,
    dialColor: "Royal Blue",
    featured: true,
    badge: "Bestseller",
    images: ["assets/watches/real-serpentine.jpg"],
    blurb:
      "A true self-winding automatic for her. The Serpentine's royal-blue dial opens to reveal the balance wheel beating beneath, with a moon indicator, crystal-set markers and a sculpted two-tone bracelet. Mechanical jewellery.",
    specs: {
      "Case size": "32 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Polished, gold-tone",
      Bracelet: "Two-tone faceted-link",
      Dial: "Royal-blue, open-heart window, moon indicator, crystal markers",
      Movement: "Automatic mechanical (self-winding)",
      Functions: "Open-heart · Sub-dials · Moon indicator",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Hardened mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "aria-rose",
    name: "The Aria",
    tagline: "Rose-Gold Mesh · 30 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Pearl White",
    images: ["assets/watches/real-aria.jpg", "assets/watches/real-aria-2.jpg"],
    blurb:
      "Featherweight rose-gold Milanese mesh and a clean pearl-white dial set with crystals. The Aria is the everyday piece that disappears on the wrist until someone notices it.",
    specs: {
      "Case size": "30 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Polished",
      Bracelet: "Milanese mesh, slide clasp",
      Dial: "Pearl white, crystal-set markers",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes · Seconds",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "celeste",
    name: "The Céleste",
    tagline: "Gold & Blue · Italian Leather · 28 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Deep Blue",
    images: [
      "assets/watches/real-celeste.jpg",
      "assets/watches/real-celeste-2.jpg",
      "assets/watches/real-celeste-3.jpg"
    ],
    blurb:
      "A deep-blue dial with crisp white numerals in a warm gold case, on supple chestnut leather. The Céleste is quietly classic — the watch you reach for without thinking.",
    specs: {
      "Case size": "28 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Polished",
      Bracelet: "Chestnut leather strap",
      Dial: "Deep blue, white Arabic numerals",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "lustre",
    name: "The Lustre",
    tagline: "Crystal Skeleton Automatic · 34 mm",
    gender: "women",
    price: 99,
    compareAt: 260,
    dialColor: "Transparent",
    badge: "New",
    images: ["assets/watches/real-lustre.jpg", "assets/watches/real-lustre-2.jpg"],
    blurb:
      "Fully openworked, fully mechanical. The Lustre's transparent dial puts the entire self-winding movement on display inside a crystal-set bezel, on white leather. Pure theatre for the wrist.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Stainless steel, crystal-set bezel",
      Bezel: "Baguette-crystal set",
      Bracelet: "White leather strap",
      Dial: "Skeleton / fully openworked",
      Movement: "Automatic mechanical (self-winding)",
      Functions: "Skeleton display",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Hardened mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "bijou",
    name: "The Bijou",
    tagline: "Rose-Gem Bracelet · Mother-of-Pearl · 28 mm",
    gender: "women",
    price: 65,
    compareAt: 190,
    dialColor: "Mother-of-Pearl",
    images: ["assets/watches/real-bijou.jpg", "assets/watches/real-bijou-2.jpg"],
    blurb:
      "Half watch, half bracelet. The Bijou pairs a mother-of-pearl dial ringed in crystals with a sculpted rose-gem link band — jewellery that happens to keep perfect time.",
    specs: {
      "Case size": "28 mm",
      "Case material": "Stainless steel, crystal-set bezel",
      Bezel: "Crystal-set",
      Bracelet: "Gem-set jewellery bracelet",
      Dial: "Mother-of-pearl, crystal markers",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  /* ======================== MEN'S (6) ======================== */

  {
    id: "regent",
    name: "The Regent",
    tagline: "Two-Tone Chronograph · 42 mm",
    gender: "men",
    price: 79,
    compareAt: 230,
    dialColor: "Silver-White",
    makerRating: 4.3,   // observed marketplace average for this maker model
    featured: true,
    images: ["assets/watches/real-regent.jpg"],
    blurb:
      "The boardroom classic, upgraded. A silver-white dial with three working registers, crystal-set markers and Roman numerals on a two-tone bracelet — finished to read far above its price.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Polished, gold-tone",
      Bracelet: "Two-tone multi-link",
      Dial: "Silver-white, three sub-dials, crystal markers",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "monarch",
    name: "The Monarch",
    tagline: "Integrated Sport · Onyx · 41 mm",
    gender: "men",
    price: 89,
    compareAt: 260,
    dialColor: "Onyx Black",
    badge: "Trending",
    images: ["assets/watches/real-monarch.jpg"],
    blurb:
      "The defining silhouette of the moment — a brushed octagonal case flowing into an integrated steel bracelet, with a striped onyx dial and luminous markers. Sport-luxury presence at a fraction of the entry fee.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Brushed stainless steel",
      Bezel: "Octagonal, brushed",
      Bracelet: "Integrated three-link steel",
      Dial: "Onyx black, horizontal relief stripes, luminous markers",
      Movement: "Japanese quartz",
      Functions: "Day · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "mechanist",
    name: "The Mechanist",
    tagline: "Skeleton Automatic · 42 mm",
    gender: "men",
    price: 99,
    compareAt: 280,
    dialColor: "Open-Heart",
    makerRating: 4.4,   // observed marketplace average for this maker model
    featured: true,
    badge: "Bestseller",
    images: ["assets/watches/real-mechanist.jpg"],
    blurb:
      "Our most-talked-about piece. A fully skeletonized, self-winding mechanical movement on open display — Roman numerals floating over gears and bridges, on black leather. No battery. Pure machine.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Stainless steel",
      Bezel: "Polished",
      Bracelet: "Black leather strap",
      Dial: "Skeleton / fully openworked, Roman numerals",
      Movement: "Automatic mechanical (self-winding)",
      Functions: "Skeleton display · Exhibition caseback",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Hardened mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "lunar",
    name: "The Lunar",
    tagline: "Moonphase Chronograph · 42 mm",
    gender: "men",
    price: 85,
    compareAt: 250,
    dialColor: "Onyx Black",
    makerRating: 4.3,   // observed marketplace average for this maker model
    badge: "Trending",
    images: ["assets/watches/real-lunar.jpg"],
    blurb:
      "A working moonphase window set in a black multi-register dial with Roman numerals and a tachymetre ring, on supple black leather. The complication everyone wants, at a price that makes sense.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Stainless steel",
      Bezel: "Tachymetre ring",
      Bracelet: "Black leather strap",
      Dial: "Onyx black, three registers, moonphase window",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Moonphase · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "tempo",
    name: "The Tempo",
    tagline: "Steel Chronograph · Royal Blue · 42 mm",
    gender: "men",
    price: 85,
    compareAt: 250,
    dialColor: "Royal Blue",
    makerRating: 4.3,   // observed marketplace average for this maker model
    badge: "Bestseller",
    images: ["assets/watches/real-tempo.jpg"],
    blurb:
      "Big, blue and built to be noticed. A royal-blue sunray dial with three working registers and crystal-set markers on brushed steel — the crowd-pleaser of the collection.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Stainless steel",
      Bezel: "Polished",
      Bracelet: "Steel multi-link",
      Dial: "Royal-blue sunray, three sub-dials, crystal markers",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  },

  {
    id: "depths",
    name: "The Depths",
    tagline: "Sport Day-Date · Emerald · 42 mm",
    gender: "men",
    price: 75,
    compareAt: 220,
    dialColor: "Emerald Green",
    makerRating: 4.3,   // observed marketplace average for this maker model
    badge: "Trending",
    images: ["assets/watches/real-depths.jpg"],
    blurb:
      "An emerald sunray dial under a rotating sport bezel, with luminous markers and a solid steel bracelet. On-trend colour with tool-watch bones.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Stainless steel",
      Bezel: "Rotating sport bezel",
      Bracelet: "Oyster three-link steel",
      Dial: "Emerald green sunray, luminous markers",
      Movement: "Japanese quartz",
      Functions: "Day · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    }
  }
];
