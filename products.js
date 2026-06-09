/* =============================================================================
   AUREUM — Watch catalog (DATA ONLY)
   -----------------------------------------------------------------------------
   This is the single source of truth for the storefront's products. To add or
   edit a watch, edit this file only — index.html reads from window.PRODUCTS.

   IMAGES
   ------
   • The hero piece ("The Marchesa") uses REAL photos in assets/watches/.
   • Every other watch is drawn as an on-brand SVG illustration from its `render`
     spec (no external images, nothing to break). When you have real supplier
     product photos, add an `images: [...]` array to a product and it will be used
     instead of the illustration. See README.md.

   PRICING (impulse / volume band — best conversion + 3–10× margin)
   -------
   • price     = your selling price (what the customer pays)
   • compareAt = the "comparable retail" anchor shown struck-through (the savings)
   • Supplier COST and per-product MARGIN are intentionally NOT in this file —
     this file is public. See the PRIVATE SOURCING.md for landed cost, supplier
     matches and margin math (keep SOURCING.md out of the deployed site).
   ============================================================================ */

window.PRODUCTS = [
  {
    id: "marchesa-mop",
    name: "The Marchesa",
    tagline: "Mother-of-Pearl Day-Date",
    gender: "women",
    price: 69,
    compareAt: 199,
    dialColor: "Mother-of-Pearl",
    featured: true,
    hero: true,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 1190,
    // Real photographs of the actual piece.
    images: [
      "assets/watches/armitron-mop-white-wrist.jpg",
      "assets/watches/armitron-mop-green-box.jpg",
      "assets/watches/armitron-mop-white-wrist-2.jpg",
      "assets/watches/armitron-duo-wrist.jpg"
    ],
    variants: {
      label: "Dial",
      options: ["White Mother-of-Pearl", "Green Mother-of-Pearl"]
    },
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
    },
    render: { caseTone: "twotone", bezel: "fluted", dial: "mop", markers: "diamond", strap: "jubilee" }
  },

  {
    id: "regent",
    name: "The Regent",
    tagline: "Two-Tone Day-Date · 40 mm",
    gender: "men",
    price: 69,
    compareAt: 200,
    dialColor: "Silver-White",
    featured: true,
    blurb:
      "The boardroom classic. A fluted bezel, jubilee bracelet and crisp day-date window — proportioned for a man's wrist and finished to read far above its price.",
    specs: {
      "Case size": "40 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Sunray silver-white",
      Movement: "Japanese quartz",
      Functions: "Day · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "twotone", bezel: "fluted", dial: "white", markers: "diamond", strap: "jubilee" }
  },

  {
    id: "sovereign",
    name: "The Sovereign",
    tagline: "Champagne President · 40 mm",
    gender: "men",
    price: 75,
    compareAt: 220,
    dialColor: "Champagne",
    featured: true,
    blurb:
      "Full gold-tone, head to bracelet, with a warm champagne dial and Roman numerals. Unapologetic presence for a fraction of what it looks like.",
    specs: {
      "Case size": "40 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "President three-link",
      Dial: "Champagne sunray",
      Movement: "Japanese quartz",
      Functions: "Day · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "fluted", dial: "champagne", markers: "roman", strap: "jubilee" }
  },

  {
    id: "aria-rose",
    name: "The Aria",
    tagline: "Rose-Gold Mesh · 32 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Pearl White",
    featured: true,
    blurb:
      "Featherweight rose-gold mesh and a clean pearl dial. The Aria is the everyday piece that disappears on the wrist until someone notices it.",
    specs: {
      "Case size": "32 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Smooth",
      Bracelet: "Milanese mesh",
      Dial: "Pearl white, slim baton markers",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", bezel: "smooth", dial: "white", markers: "stick", strap: "mesh" }
  },

  {
    id: "celeste",
    name: "The Céleste",
    tagline: "Midnight Blue & Gold · 34 mm",
    gender: "women",
    price: 59,
    compareAt: 175,
    dialColor: "Midnight Blue",
    blurb:
      "A deep midnight-blue dial framed in gold-tone, with Roman numerals that catch the light. Quietly formal, never loud.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Midnight blue sunray",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "fluted", dial: "navy", markers: "roman", strap: "jubilee" }
  },

  {
    id: "lumiere",
    name: "The Lumière",
    tagline: "Silver Guilloché · 30 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Silver",
    blurb:
      "Brushed steel and a textured silver guilloché dial. The Lumière is minimalism with a heartbeat — restraint done properly.",
    specs: {
      "Case size": "30 mm",
      "Case material": "Stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Oyster three-link",
      Dial: "Silver guilloché, baton markers",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "coin", dial: "silver", markers: "stick", strap: "oyster" }
  },

  {
    id: "minuit",
    name: "The Minuit",
    tagline: "Black & Gold Slim · 33 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Onyx Black",
    blurb:
      "An onyx dial in a slim gold-tone case on supple leather. The Minuit is the little black dress of watches.",
    specs: {
      "Case size": "33 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Smooth",
      Bracelet: "Italian leather strap",
      Dial: "Onyx black, slim baton markers",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "smooth", dial: "black", markers: "stick", strap: "leather" }
  },

  {
    id: "noir",
    name: "The Noir",
    tagline: "Blacked-Out Automatic-Look · 42 mm",
    gender: "men",
    price: 69,
    compareAt: 200,
    dialColor: "Stealth Black",
    blurb:
      "Matte-black case, matte-black dial, matte-black bracelet. The Noir is the watch you wear when you'd rather not explain it.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Black-coated stainless steel",
      Bezel: "Smooth",
      Bracelet: "Oyster three-link",
      Dial: "Stealth black, applied markers",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "black", bezel: "smooth", dial: "black", markers: "stick", strap: "oyster" }
  },

  {
    id: "navigator",
    name: "The Navigator",
    tagline: "Steel Diver · 41 mm",
    gender: "men",
    price: 69,
    compareAt: 200,
    dialColor: "Abyss Blue",
    blurb:
      "A unidirectional bezel, a deep abyss-blue dial and luminous markers. Built to look the part from desk to dock.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Stainless steel",
      Bezel: "Unidirectional dive bezel",
      Bracelet: "Oyster three-link",
      Dial: "Abyss blue, luminous markers",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "10 ATM (100 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "diver", dial: "blue", markers: "arabic", strap: "oyster" }
  },

  {
    id: "aviator",
    name: "The Aviator",
    tagline: "Chronograph-Look · 43 mm",
    gender: "men",
    price: 69,
    compareAt: 200,
    dialColor: "Ivory",
    blurb:
      "Pilot proportions, an ivory dial and sub-dial detailing on a tan leather strap. The Aviator wears bigger than its price by a mile.",
    specs: {
      "Case size": "43 mm",
      "Case material": "Stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Tan leather strap",
      Dial: "Ivory, multi-eye sub-dials",
      Movement: "Japanese quartz",
      Functions: "Date · Sub-dials",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "coin", dial: "ivory", markers: "arabic", strap: "leather" }
  },

  /* ============================================================
     2026 MARKET EXPANSION — winning silhouettes (men's + women's)
     Each maps to a proven seller / current trend. Illustration only;
     add an `images:[...]` array to any to use real supplier photos.
     ============================================================ */

  {
    id: "monarch",
    name: "The Monarch",
    tagline: "Integrated Sport · Emerald · 41 mm",
    gender: "men",
    price: 89,
    compareAt: 260,
    dialColor: "Emerald Green",
    badge: "Trending",
    featured: false,
    stock: 5,
    reviews: 980,
    blurb:
      "The defining silhouette of the moment — an octagonal bezel, an integrated bracelet that flows from the case, and a deep emerald tapisserie dial. Sport-luxury presence at a fraction of the entry fee.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Stainless steel",
      Bezel: "Octagonal, exposed screws",
      Bracelet: "Integrated steel",
      Dial: "Emerald 'tapisserie' texture",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "octagon", dial: "green", markers: "stick", strap: "integrated", texture: "tapisserie" }
  },

  {
    id: "apex",
    name: "The Apex",
    tagline: "Integrated Sport · Blue · 41 mm",
    gender: "men",
    price: 89,
    compareAt: 260,
    dialColor: "Abyss Blue",
    badge: "Trending",
    stock: 7,
    blurb:
      "The same integrated-sport architecture in a sunlit abyss-blue. Wears like a five-figure icon and disappears under a cuff just as easily.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Stainless steel",
      Bezel: "Octagonal, exposed screws",
      Bracelet: "Integrated steel",
      Dial: "Abyss blue 'tapisserie' texture",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "octagon", dial: "blue", markers: "stick", strap: "integrated", texture: "tapisserie" }
  },

  {
    id: "obsidian",
    name: "The Obsidian",
    tagline: "Blacked-Out Integrated Sport · 41 mm",
    gender: "men",
    price: 95,
    compareAt: 280,
    dialColor: "Slate Grey",
    badge: "Trending",
    blurb:
      "Integrated sport, gone stealth. A black-coated octagonal case and smoked slate dial for the man who'd rather not explain his watch.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Black-coated stainless steel",
      Bezel: "Octagonal, exposed screws",
      Bracelet: "Integrated, black-coated",
      Dial: "Smoked slate 'tapisserie'",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "black", bezel: "octagon", dial: "slate", markers: "stick", strap: "integrated", texture: "tapisserie" }
  },

  {
    id: "mechanist",
    name: "The Mechanist",
    tagline: "Two-Tone Skeleton · 42 mm",
    gender: "men",
    price: 99,
    compareAt: 300,
    dialColor: "Open-Heart",
    badge: "Bestseller",
    featured: false,
    stock: 4,
    rating: 4.8,
    reviews: 2206,
    blurb:
      "Our most-talked-about piece. An openworked dial lays the movement bare beneath a two-tone fluted bezel and jubilee bracelet — mechanical drama, quartz reliability.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Skeleton / openworked",
      Movement: "Japanese quartz (open-heart styling)",
      Functions: "Skeleton display",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "twotone", bezel: "fluted", dial: "skeleton", markers: "roman", strap: "jubilee" }
  },

  {
    id: "lunar",
    name: "The Lunar",
    tagline: "Moonphase · Navy & Gold · 40 mm",
    gender: "men",
    price: 85,
    compareAt: 250,
    dialColor: "Midnight Blue",
    badge: "Trending",
    stock: 8,
    reviews: 760,
    blurb:
      "A true moonphase aperture on a midnight-blue dial framed in gold-tone. The complication everyone wants and few can find at an honest price.",
    specs: {
      "Case size": "40 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Italian leather strap",
      Dial: "Midnight blue, moonphase aperture",
      Movement: "Japanese quartz",
      Functions: "Moonphase · Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "coin", dial: "navy", markers: "roman", strap: "leather", moonphase: true }
  },

  {
    id: "eclipse",
    name: "The Eclipse",
    tagline: "Chronograph · Stealth Black · 42 mm",
    gender: "men",
    price: 89,
    compareAt: 260,
    dialColor: "Stealth Black",
    blurb:
      "A blacked-out multi-eye chronograph with real sub-dial detailing. Tool-watch attitude, dress-watch restraint.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Black-coated stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Oyster three-link",
      Dial: "Stealth black, three sub-dials",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "black", bezel: "coin", dial: "black", markers: "stick", strap: "oyster", chrono: true }
  },

  {
    id: "tempo",
    name: "The Tempo",
    tagline: "Sport Chronograph · Racing Blue · 43 mm",
    gender: "men",
    price: 85,
    compareAt: 250,
    dialColor: "Racing Blue",
    badge: "Bestseller",
    stock: 6,
    rating: 4.8,
    reviews: 1840,
    blurb:
      "Big, blue and built to be noticed. A racing-blue chronograph dial with three registers on a brushed steel bracelet — the crowd-pleaser of the collection.",
    specs: {
      "Case size": "43 mm",
      "Case material": "Stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Oyster three-link",
      Dial: "Racing blue, three sub-dials",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "coin", dial: "blue", markers: "arabic", strap: "oyster", chrono: true }
  },

  {
    id: "panda",
    name: "The Panda",
    tagline: "Panda Chronograph · 41 mm",
    gender: "men",
    price: 79,
    compareAt: 230,
    dialColor: "Panda White",
    badge: "Bestseller",
    reviews: 1310,
    blurb:
      "The timeless 'panda' chronograph — a crisp white dial with contrasting registers on tan leather. A motorsport classic, honestly priced.",
    specs: {
      "Case size": "41 mm",
      "Case material": "Stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Tan leather strap",
      Dial: "White with black sub-dials",
      Movement: "Japanese quartz chronograph",
      Functions: "Chronograph · Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "coin", dial: "white", markers: "stick", strap: "leather", chrono: true }
  },

  {
    id: "deco",
    name: "The Deco",
    tagline: "Rectangular Dress · Gold · 32 mm",
    gender: "men",
    price: 59,
    compareAt: 175,
    dialColor: "Onyx Black",
    badge: "New",
    blurb:
      "A rectangular gold-tone tank with an onyx dial and Roman numerals on supple leather. Art-deco elegance, quietly confident.",
    specs: {
      "Case size": "32 × 40 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Polished rectangular",
      Bracelet: "Italian leather strap",
      Dial: "Onyx black, Roman numerals",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", shape: "tank", dial: "black", markers: "roman", strap: "leather" }
  },

  {
    id: "sahara",
    name: "The Sahara",
    tagline: "Field Watch · Desert Sand · 40 mm",
    gender: "men",
    price: 49,
    compareAt: 140,
    dialColor: "Desert Sand",
    blurb:
      "An earth-toned field dial on a woven fabric strap — the season's natural-tone trend, built for everyday wear.",
    specs: {
      "Case size": "40 mm",
      "Case material": "Stainless steel",
      Bezel: "Smooth",
      Bracelet: "Woven NATO fabric strap",
      Dial: "Desert sand, luminous numerals",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "smooth", dial: "sand", markers: "arabic", strap: "fabric" }
  },

  {
    id: "depths",
    name: "The Depths",
    tagline: "Dive Watch · Forest Green · 42 mm",
    gender: "men",
    price: 75,
    compareAt: 220,
    dialColor: "Forest Green",
    stock: 8,
    blurb:
      "A green-dial diver with a unidirectional bezel and luminous markers. On-trend colour, genuine 100 m water resistance.",
    specs: {
      "Case size": "42 mm",
      "Case material": "Stainless steel",
      Bezel: "Unidirectional dive bezel",
      Bracelet: "Oyster three-link",
      Dial: "Forest green, luminous markers",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "10 ATM (100 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "diver", dial: "green", markers: "stick", strap: "oyster" }
  },

  {
    id: "serpentine",
    name: "The Serpentine",
    tagline: "Two-Tone Gold · Mother-of-Pearl · 34 mm",
    gender: "women",
    price: 75,
    compareAt: 220,
    dialColor: "Mother-of-Pearl",
    badge: "Bestseller",
    stock: 6,
    rating: 4.9,
    reviews: 1502,
    blurb:
      "Everything 2026 wants in a woman's watch — two-tone yellow gold, a luminous mother-of-pearl dial and crystal-set markers. Instant heirloom energy.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Two-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Mother-of-pearl, crystal markers",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "twotone", bezel: "fluted", dial: "mop", markers: "diamond", strap: "jubilee" }
  },

  {
    id: "emeraude",
    name: "The Émeraude",
    tagline: "Green Sunray · Gold · 32 mm",
    gender: "women",
    price: 59,
    compareAt: 175,
    dialColor: "Emerald Green",
    badge: "Trending",
    blurb:
      "A jewel-toned emerald sunray dial in warm gold with Roman numerals. The green-dial trend, made elegant for her.",
    specs: {
      "Case size": "32 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Fluted, gold-tone",
      Bracelet: "Five-link jubilee",
      Dial: "Emerald sunray",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "fluted", dial: "green", markers: "roman", strap: "jubilee" }
  },

  {
    id: "aurore",
    name: "The Aurore",
    tagline: "Salmon · Rose-Gold Mesh · 33 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Salmon",
    badge: "New",
    blurb:
      "A collector-favourite salmon dial on featherlight rose-gold mesh. Soft, warm and quietly of-the-moment.",
    specs: {
      "Case size": "33 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Smooth",
      Bracelet: "Milanese mesh",
      Dial: "Salmon sunray",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", bezel: "smooth", dial: "salmon", markers: "stick", strap: "mesh" }
  },

  {
    id: "mirage",
    name: "The Mirage",
    tagline: "Integrated Sport · Silver · 34 mm",
    gender: "women",
    price: 85,
    compareAt: 250,
    dialColor: "Silver Frost",
    badge: "Trending",
    stock: 7,
    blurb:
      "The integrated-sport silhouette, sized and softened for her — a frosted silver tapisserie dial on a sculpted steel bracelet. Gender-neutral, never generic.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Stainless steel",
      Bezel: "Octagonal, exposed screws",
      Bracelet: "Integrated steel",
      Dial: "Silver frost 'tapisserie'",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "octagon", dial: "silver", markers: "stick", strap: "integrated", texture: "tapisserie" }
  },

  {
    id: "selene",
    name: "The Selene",
    tagline: "Moonphase · Mother-of-Pearl · 34 mm",
    gender: "women",
    price: 85,
    compareAt: 250,
    dialColor: "Mother-of-Pearl",
    badge: "Trending",
    stock: 7,
    reviews: 690,
    blurb:
      "A moonphase aperture set against shimmering mother-of-pearl in rose-gold. Romantic, rare at this price, endlessly photogenic.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Milanese mesh",
      Dial: "Mother-of-pearl, moonphase aperture",
      Movement: "Japanese quartz",
      Functions: "Moonphase",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", bezel: "coin", dial: "mop", markers: "stick", strap: "mesh", moonphase: true }
  },

  {
    id: "lustre",
    name: "The Lustre",
    tagline: "Rose-Gold Skeleton · 34 mm",
    gender: "women",
    price: 95,
    compareAt: 290,
    dialColor: "Open-Heart",
    badge: "New",
    blurb:
      "An openworked dial in warm rose-gold — the skeleton trend, refined for the wrist. Mechanical theatre with feminine proportions.",
    specs: {
      "Case size": "34 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Coin-edge",
      Bracelet: "Milanese mesh",
      Dial: "Skeleton / openworked",
      Movement: "Japanese quartz (open-heart styling)",
      Functions: "Skeleton display",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", bezel: "coin", dial: "skeleton", markers: "stick", strap: "mesh" }
  },

  {
    id: "dune",
    name: "The Dune",
    tagline: "Sand Sunray · Gold · 33 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Desert Sand",
    blurb:
      "A warm sand sunray dial in soft gold — the natural-tone trend in its most wearable, everyday form.",
    specs: {
      "Case size": "33 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Smooth",
      Bracelet: "Milanese mesh",
      Dial: "Desert sand sunray",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "smooth", dial: "sand", markers: "stick", strap: "mesh" }
  },

  {
    id: "bijou",
    name: "The Bijou",
    tagline: "Iced Gold · Mother-of-Pearl · 30 mm",
    gender: "women",
    price: 65,
    compareAt: 190,
    dialColor: "Mother-of-Pearl",
    blurb:
      "A petite gold dress watch with a mother-of-pearl dial and crystal-set markers. Pure quiet sparkle.",
    specs: {
      "Case size": "30 mm",
      "Case material": "Gold-tone stainless steel",
      Bezel: "Coin-edge, crystal-set accents",
      Bracelet: "Milanese mesh",
      Dial: "Mother-of-pearl, crystal markers",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "gold", bezel: "coin", dial: "mop", markers: "diamond", strap: "mesh" }
  },

  {
    id: "riviera",
    name: "The Riviera",
    tagline: "Integrated Sport · Blush · 33 mm",
    gender: "women",
    price: 85,
    compareAt: 250,
    dialColor: "Blush",
    badge: "Trending",
    blurb:
      "Integrated-sport edge with a soft blush dial in rose-gold. The most coveted shape of the year, in its prettiest colourway.",
    specs: {
      "Case size": "33 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Octagonal, exposed screws",
      Bracelet: "Integrated, rose-gold-tone",
      Dial: "Blush 'tapisserie'",
      Movement: "Japanese quartz",
      Functions: "Date",
      "Water resistance": "5 ATM (50 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", bezel: "octagon", dial: "salmon", markers: "stick", strap: "integrated", texture: "tapisserie" }
  },

  {
    id: "noisette",
    name: "The Noisette",
    tagline: "Rectangular Dress · Rose-Gold · 28 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Ivory",
    badge: "New",
    blurb:
      "A slender rose-gold tank with an ivory dial and Roman numerals on fine leather. Effortless, timeless, French-girl chic.",
    specs: {
      "Case size": "28 × 36 mm",
      "Case material": "Rose-gold-tone stainless steel",
      Bezel: "Polished rectangular",
      Bracelet: "Slim leather strap",
      Dial: "Ivory, Roman numerals",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "rosegold", shape: "tank", dial: "ivory", markers: "roman", strap: "leather" }
  },

  {
    id: "verde",
    name: "The Verdé",
    tagline: "Green Sunray · Steel Mesh · 32 mm",
    gender: "women",
    price: 55,
    compareAt: 160,
    dialColor: "Emerald Green",
    blurb:
      "A crisp emerald sunray dial on cool steel mesh — the green trend in a clean, modern, everyday register.",
    specs: {
      "Case size": "32 mm",
      "Case material": "Stainless steel",
      Bezel: "Smooth",
      Bracelet: "Milanese mesh",
      Dial: "Emerald sunray",
      Movement: "Japanese quartz",
      Functions: "Hours · Minutes",
      "Water resistance": "3 ATM (30 m)",
      Crystal: "Mineral",
      Warranty: "2-year limited"
    },
    render: { caseTone: "steel", bezel: "smooth", dial: "green", markers: "stick", strap: "mesh" }
  }
];
