const DEXTRA_DEFAULT_COSMETICS = {
  equippedBanner: "banner-default",
  equippedNameEffect: "name-effect-none",
  equippedWhalePrimary: "whale-primary-ocean",
  equippedWhaleSecondary: "whale-secondary-ice",
  equippedWhaleAccessory: "whale-accessory-none",
  equippedProfileBorder: "border-default",
};

const DEXTRA_BANNER_ITEMS = [
  ["gold", "Gold Spotlight", "#ffbf3d", "#061528", 80],
  ["blue", "Blue Wave", "#53c1ff", "#061528", 80],
  ["aurora", "Aurora", "#2fd1b5", "#aa7cff", 110],
  ["sunset", "Sunset", "#ff8a5c", "#30174d", 115],
  ["midnight", "Midnight", "#111827", "#2563eb", 95],
  ["emerald", "Emerald", "#10b981", "#052e2b", 95],
  ["ruby", "Ruby", "#ef4444", "#3b0712", 105],
  ["violet", "Violet", "#8b5cf6", "#160f32", 105],
  ["silver", "Silver", "#d8e4ef", "#293445", 90],
  ["cosmic", "Cosmic", "#38bdf8", "#f472b6", 125],
].map(([key, title, start, end, cost]) => ({
  id: `banner-${key}`,
  type: "banner",
  title: `${title} Banner`,
  description: `${title} profile backdrop for your whale banner.`,
  cost,
  categoryLabel: "Profile Banner",
  colors: [start, end],
}));

const DEXTRA_BORDER_ITEMS = [
  ["gold", "Gold", "#ffbf3d", 70],
  ["wave", "Wave", "#53c1ff", 70],
  ["neon", "Neon", "#ff5c7a", 95],
  ["emerald", "Emerald", "#34d399", 80],
  ["violet", "Violet", "#a78bfa", 80],
  ["ruby", "Ruby", "#fb7185", 85],
  ["silver", "Silver", "#d8e4ef", 75],
  ["mint", "Mint", "#5eead4", 80],
  ["orange", "Orange", "#fb923c", 80],
  ["cosmic", "Cosmic", "#60a5fa", 100],
].map(([key, title, color, cost]) => ({
  id: `border-${key}`,
  type: "profileBorder",
  title: `${title} Profile Border`,
  description: `${title} ring for your profile picture.`,
  cost,
  categoryLabel: "Profile Border",
  color,
}));

const DEXTRA_PRIMARY_COLORS = [
  ["sky", "Sky", "#32b8f0"],
  ["mint", "Mint", "#2fd1b5"],
  ["coral", "Coral", "#ff7f7f"],
  ["royal", "Royal", "#2563eb"],
  ["teal", "Teal", "#0f766e"],
  ["lime", "Lime", "#84cc16"],
  ["emerald", "Emerald", "#10b981"],
  ["violet", "Violet", "#8b5cf6"],
  ["plum", "Plum", "#a855f7"],
  ["rose", "Rose", "#f43f5e"],
  ["ruby", "Ruby", "#dc2626"],
  ["orange", "Orange", "#f97316"],
  ["amber", "Amber", "#f59e0b"],
  ["gold", "Gold", "#facc15"],
  ["slate", "Slate", "#64748b"],
  ["charcoal", "Charcoal", "#334155"],
  ["aqua", "Aqua", "#06b6d4"],
  ["periwinkle", "Periwinkle", "#818cf8"],
  ["bubblegum", "Bubblegum", "#f472b6"],
  ["forest", "Forest", "#15803d"],
].map(([key, title, color], index) => ({
  id: `whale-primary-${key}`,
  type: "whalePrimary",
  title: `${title} Whale`,
  description: `${title} primary whale color.`,
  cost: 50 + (index % 5) * 10,
  categoryLabel: "Whale Primary Color",
  color,
}));

const DEXTRA_SECONDARY_COLORS = [
  ["cream", "Cream", "#fff2c2"],
  ["lavender", "Lavender", "#d9c7ff"],
  ["seafoam", "Seafoam", "#bdf8e7"],
  ["pearl", "Pearl", "#f8fafc"],
  ["blush", "Blush", "#ffd1dc"],
  ["lemon", "Lemon", "#fef08a"],
  ["mint", "Mint", "#bbf7d0"],
  ["sky", "Sky", "#bae6fd"],
  ["aqua", "Aqua", "#a5f3fc"],
  ["violet", "Violet", "#ddd6fe"],
  ["rose", "Rose", "#fecdd3"],
  ["sand", "Sand", "#fde68a"],
  ["silver", "Silver", "#d8e4ef"],
  ["ice", "Bright Ice", "#e0f2fe"],
  ["peach", "Peach", "#fed7aa"],
  ["orchid", "Orchid", "#f5d0fe"],
  ["lime", "Lime", "#d9f99d"],
  ["teal", "Teal", "#99f6e4"],
  ["blue", "Blue", "#bfdbfe"],
  ["graphite", "Graphite", "#cbd5e1"],
].map(([key, title, color], index) => ({
  id: `whale-secondary-${key}`,
  type: "whaleSecondary",
  title: `${title} Belly`,
  description: `${title} secondary whale color.`,
  cost: 45 + (index % 5) * 10,
  categoryLabel: "Whale Secondary Color",
  color,
}));

const DEXTRA_ACCESSORY_ITEMS = [
  ["medal", "Gold Medal", 80],
  ["briefcase", "Mini Briefcase", 90],
  ["star", "Star Charm", 100],
  ["crown", "Crown Charm", 115],
  ["trophy", "Trophy Charm", 120],
  ["lightning", "Lightning Bolt", 105],
  ["gem", "Gem Charm", 110],
  ["book", "Study Book", 95],
  ["heart", "Heart Charm", 95],
  ["ribbon", "Ribbon Badge", 100],
].map(([accessory, title, cost]) => ({
  id: `whale-accessory-${accessory}`,
  type: "whaleAccessory",
  title,
  description: `${title} hanging from the whale's flipper.`,
  cost,
  categoryLabel: "Whale Accessory",
  accessory,
}));

const DEXTRA_NAME_EFFECT_ITEMS = [
  ["glow", "Glow", "#ffd980", 120],
  ["sky", "Sky", "#9fe0ff", 120],
  ["mint", "Mint", "#8fffe1", 125],
  ["ruby", "Ruby", "#ff8ea3", 130],
  ["violet", "Violet", "#d8b4fe", 130],
  ["emerald", "Emerald", "#86efac", 125],
  ["sunset", "Sunset", "#ffb86b", 135],
  ["silver", "Silver", "#e5eef9", 125],
  ["cosmic", "Cosmic", "#c4b5fd", 145],
  ["champion", "Champion", "#ffbf3d", 150],
].map(([key, title, color, cost]) => ({
  id: `name-${key}`,
  type: "nameEffect",
  title: `${title} Name Effect`,
  description: `${title} accent treatment for your display name.`,
  cost,
  categoryLabel: "Name Effect",
  color,
}));

const DEXTRA_COSMETIC_ITEMS = [
  ...DEXTRA_BANNER_ITEMS,
  ...DEXTRA_BORDER_ITEMS,
  ...DEXTRA_PRIMARY_COLORS,
  ...DEXTRA_SECONDARY_COLORS,
  ...DEXTRA_ACCESSORY_ITEMS,
  ...DEXTRA_NAME_EFFECT_ITEMS,
];

const DEXTRA_DEFAULT_ITEMS = [
  {
    id: "banner-default",
    type: "banner",
    title: "Default Banner",
    categoryLabel: "Profile Banner",
  },
  {
    id: "border-default",
    type: "profileBorder",
    title: "Default Border",
    categoryLabel: "Profile Border",
  },
  {
    id: "whale-primary-ocean",
    type: "whalePrimary",
    title: "Ocean Whale",
    categoryLabel: "Whale Primary Color",
    color: "#19a7d8",
  },
  {
    id: "whale-secondary-ice",
    type: "whaleSecondary",
    title: "Ice Belly",
    categoryLabel: "Whale Secondary Color",
    color: "#d9f4ff",
  },
  {
    id: "whale-accessory-none",
    type: "whaleAccessory",
    title: "No Accessory",
    categoryLabel: "Whale Accessory",
    accessory: "none",
  },
  {
    id: "name-effect-none",
    type: "nameEffect",
    title: "No Name Effect",
    categoryLabel: "Name Effect",
  },
];

const DEXTRA_ALL_COSMETICS = [...DEXTRA_DEFAULT_ITEMS, ...DEXTRA_COSMETIC_ITEMS];
const DEXTRA_COSMETIC_MAP = new Map(DEXTRA_ALL_COSMETICS.map((item) => [item.id, item]));
let dextraWhaleRenderCount = 0;

function dextraEscapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeDextraCosmetics(user) {
  user.ownedCosmetics = Array.isArray(user.ownedCosmetics) ? user.ownedCosmetics : [];
  user.equippedBanner ||= DEXTRA_DEFAULT_COSMETICS.equippedBanner;
  user.equippedNameEffect ||= DEXTRA_DEFAULT_COSMETICS.equippedNameEffect;
  user.equippedWhalePrimary ||= DEXTRA_DEFAULT_COSMETICS.equippedWhalePrimary;
  user.equippedWhaleSecondary ||= DEXTRA_DEFAULT_COSMETICS.equippedWhaleSecondary;
  user.equippedWhaleAccessory ||= DEXTRA_DEFAULT_COSMETICS.equippedWhaleAccessory;
  user.equippedProfileBorder ||= DEXTRA_DEFAULT_COSMETICS.equippedProfileBorder;
  user.profileImageData ||= "";
  user.friends = Array.isArray(user.friends) ? user.friends : [];
  return user;
}

function isDextraCosmeticOwned(user, item) {
  normalizeDextraCosmetics(user);
  return DEXTRA_DEFAULT_ITEMS.some((defaultItem) => defaultItem.id === item.id) || user.ownedCosmetics.includes(item.id);
}

function getDextraEquipField(type) {
  return {
    banner: "equippedBanner",
    nameEffect: "equippedNameEffect",
    whalePrimary: "equippedWhalePrimary",
    whaleSecondary: "equippedWhaleSecondary",
    whaleAccessory: "equippedWhaleAccessory",
    profileBorder: "equippedProfileBorder",
  }[type];
}

function equipDextraCosmetic(user, item) {
  const field = getDextraEquipField(item.type);
  if (field) {
    user[field] = item.id;
  }
}

function isDextraCosmeticEquipped(user, item) {
  const field = getDextraEquipField(item.type);
  return Boolean(field && user[field] === item.id);
}

function getDextraItem(id) {
  return DEXTRA_COSMETIC_MAP.get(id);
}

function dextraShadeHex(hex, amount) {
  const value = String(hex || "").replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) {
    return "#087cab";
  }

  const adjusted = [0, 2, 4].map((start) => {
    const channel = parseInt(value.slice(start, start + 2), 16);
    const next = amount < 0 ? channel * (1 + amount) : channel + (255 - channel) * amount;
    return Math.max(0, Math.min(255, Math.round(next))).toString(16).padStart(2, "0");
  });

  return `#${adjusted.join("")}`;
}

function getDextraWhaleColors(user, overrides = {}) {
  normalizeDextraCosmetics(user);
  const primaryItem = getDextraItem(overrides.primary || user.equippedWhalePrimary) || getDextraItem("whale-primary-ocean");
  const secondaryItem = getDextraItem(overrides.secondary || user.equippedWhaleSecondary) || getDextraItem("whale-secondary-ice");
  const accessoryItem = getDextraItem(overrides.accessory || user.equippedWhaleAccessory) || getDextraItem("whale-accessory-none");
  const primary = primaryItem.color || "#19a7d8";
  return {
    primary,
    primaryShadow: dextraShadeHex(primary, -0.28),
    secondary: secondaryItem.color || "#d9f4ff",
    accessory: accessoryItem.accessory || "none",
  };
}

function renderDextraAccessory(type) {
  if (type === "medal") {
    return `
      <line x1="434" y1="331" x2="434" y2="383" class="whale-accessory-string" />
      <circle cx="434" cy="403" r="22" class="whale-accessory-fill whale-medal" />
      <path d="M434 390l5 10 11 2-8 8 2 12-10-6-10 6 2-12-8-8 11-2z" fill="#6b4a07" opacity="0.45" />
    `;
  }

  if (type === "briefcase") {
    return `
      <line x1="434" y1="331" x2="434" y2="379" class="whale-accessory-string" />
      <rect x="402" y="383" width="64" height="44" rx="9" class="whale-accessory-fill whale-briefcase" />
      <path d="M420 383v-9h28v9" fill="none" stroke="#061528" stroke-width="6" stroke-linecap="round" />
      <path d="M402 403h64" stroke="#061528" stroke-width="4" opacity="0.28" />
    `;
  }

  if (type === "star") {
    return `
      <line x1="434" y1="331" x2="434" y2="382" class="whale-accessory-string" />
      <path d="M434 376l9 20 22 2-16 15 5 22-20-12-20 12 5-22-16-15 22-2z" class="whale-accessory-fill whale-star" />
    `;
  }

  if (type === "crown") {
    return `
      <line x1="434" y1="331" x2="434" y2="381" class="whale-accessory-string" />
      <path d="M403 408l7-34 16 20 9-25 11 25 16-20 7 34z" class="whale-accessory-fill whale-crown" />
      <path d="M407 410h55" stroke="#061528" stroke-width="5" stroke-linecap="round" opacity="0.26" />
    `;
  }

  if (type === "trophy") {
    return `
      <line x1="434" y1="331" x2="434" y2="378" class="whale-accessory-string" />
      <path d="M418 383h32v20c0 12-7 21-16 21s-16-9-16-21z" class="whale-accessory-fill whale-trophy" />
      <path d="M418 389h-12c0 15 7 23 17 25M450 389h12c0 15-7 23-17 25" fill="none" stroke="#061528" stroke-width="5" stroke-linecap="round" opacity="0.35" />
      <path d="M434 424v15M419 439h30" stroke="#061528" stroke-width="6" stroke-linecap="round" opacity="0.35" />
    `;
  }

  if (type === "lightning") {
    return `
      <line x1="434" y1="331" x2="434" y2="381" class="whale-accessory-string" />
      <path d="M442 372l-31 42h23l-8 30 34-44h-23z" class="whale-accessory-fill whale-lightning" />
    `;
  }

  if (type === "gem") {
    return `
      <line x1="434" y1="331" x2="434" y2="381" class="whale-accessory-string" />
      <path d="M434 374l31 18-31 45-31-45z" class="whale-accessory-fill whale-gem" />
      <path d="M403 392h62M434 374l-12 18 12 45 12-45z" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.42" />
    `;
  }

  if (type === "book") {
    return `
      <line x1="434" y1="331" x2="434" y2="380" class="whale-accessory-string" />
      <path d="M399 387c14-7 25-6 35 2 10-8 21-9 35-2v45c-14-6-25-5-35 2-10-7-21-8-35-2z" class="whale-accessory-fill whale-book" />
      <path d="M434 389v45M410 402c8-2 14-1 19 3M439 405c6-4 12-5 19-3" fill="none" stroke="#061528" stroke-width="4" stroke-linecap="round" opacity="0.3" />
    `;
  }

  if (type === "heart") {
    return `
      <line x1="434" y1="331" x2="434" y2="380" class="whale-accessory-string" />
      <path d="M434 433s-32-18-32-40c0-11 8-19 18-19 7 0 12 4 14 9 3-5 8-9 15-9 10 0 18 8 18 19 0 22-33 40-33 40z" class="whale-accessory-fill whale-heart" />
    `;
  }

  if (type === "ribbon") {
    return `
      <line x1="434" y1="331" x2="434" y2="378" class="whale-accessory-string" />
      <circle cx="434" cy="396" r="19" class="whale-accessory-fill whale-ribbon" />
      <path d="M421 410l-11 27 18-7 6 16 9-34M447 410l11 27-18-7-6 16-9-34" class="whale-accessory-fill whale-ribbon-tail" />
    `;
  }

  return "";
}

function renderDextraWhale(user, overrides = {}) {
  const whale = getDextraWhaleColors(user, overrides);
  const id = `dextra-whale-${++dextraWhaleRenderCount}`;
  return `
    <svg class="whale-avatar" viewBox="0 0 658 456" role="img" aria-label="Dextra whale mascot">
      <defs>
        <linearGradient id="${id}-body" x1="80" y1="110" x2="560" y2="390" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${dextraEscapeHtml(dextraShadeHex(whale.primary, 0.12))}" />
          <stop offset="0.62" stop-color="${dextraEscapeHtml(whale.primary)}" />
          <stop offset="1" stop-color="${dextraEscapeHtml(whale.primaryShadow)}" />
        </linearGradient>
        <linearGradient id="${id}-belly" x1="76" y1="316" x2="360" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${dextraEscapeHtml(dextraShadeHex(whale.secondary, 0.08))}" />
          <stop offset="1" stop-color="${dextraEscapeHtml(whale.secondary)}" />
        </linearGradient>
      </defs>
      <path d="M505 214c24-58 77-104 135-109-2 60-28 105-78 134 42 30 65 78 66 134-59-8-99-41-122-95z" fill="url(#${id}-body)" />
      <path d="M549 235c20-40 51-71 91-91-5 43-26 77-63 101 28 25 43 62 44 103-38-9-66-35-82-76z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.34" />
      <path d="M33 266c0-112 79-174 207-174 95 0 170 30 231 78 48 37 83 52 108 53 18 0 32-8 42-24 6 75-21 133-80 174-54 37-136 51-239 39-74-9-139-28-205-28-43 0-64-51-64-118z" fill="url(#${id}-body)" />
      <path d="M80 330c35 33 84 52 146 58 44 5 82 1 116-10-16 39-54 61-116 60-75-1-132-26-171-75-10-13 10-44 25-33z" fill="url(#${id}-belly)" />
      <path d="M355 365c38 4 78-2 119-18-16 36-44 61-82 74-15-19-27-38-37-56z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.42" />
      <path d="M390 386c36 14 68 15 95 3 1 34-14 55-47 63-23-15-39-37-48-66z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.52" />
      <path d="M151 94c-7-38 8-68 45-88 34 16 51 46 51 91-33-11-65-12-96-3z" fill="${dextraEscapeHtml(whale.primary)}" />
      <path d="M276 96c-1-39 18-68 56-84 31 20 43 52 35 94-30-14-61-17-91-10z" fill="${dextraEscapeHtml(whale.primary)}" />
      <path d="M72 152c42-22 101-29 177-19" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" opacity="0.78" />
      <path d="M105 137c37-15 80-20 129-13" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.78" />
      <circle cx="281" cy="284" r="8" fill="#33271f" />
      <path d="M39 322c65 10 136 14 213 14 44 0 66-16 70-54" fill="none" stroke="#33271f" stroke-width="8" stroke-linecap="round" />
      <path d="M95 337c14 26 28 47 43 64M141 340c14 31 31 56 51 74M192 341c11 32 25 58 43 78M244 340c7 27 17 52 31 74" fill="none" stroke="${dextraEscapeHtml(dextraShadeHex(whale.primary, -0.12))}" stroke-width="4" stroke-linecap="round" opacity="0.52" />
      ${renderDextraAccessory(whale.accessory)}
    </svg>
  `;
}

function renderDextraShopPreview(item, user) {
  if (item.type === "whalePrimary") {
    return `<div class="shop-item-preview whale-shop-preview">${renderDextraWhale(user, { primary: item.id })}</div>`;
  }

  if (item.type === "whaleSecondary") {
    return `<div class="shop-item-preview whale-shop-preview">${renderDextraWhale(user, { secondary: item.id })}</div>`;
  }

  if (item.type === "whaleAccessory") {
    return `<div class="shop-item-preview whale-shop-preview">${renderDextraWhale(user, { accessory: item.id })}</div>`;
  }

  if (item.type === "profileBorder") {
    const borderColor = item.color || "#53c1ff";
    return `<div class="shop-item-preview border-preview" style="--shop-preview-border: ${dextraEscapeHtml(borderColor)}"><span>Border</span></div>`;
  }

  if (item.type === "banner") {
    const start = item.colors?.[0] || "#53c1ff";
    const end = item.colors?.[1] || "#061528";
    return `<div class="shop-item-preview banner-preview" style="--shop-preview-start: ${dextraEscapeHtml(start)}; --shop-preview-end: ${dextraEscapeHtml(end)}"><span>Banner</span></div>`;
  }

  if (item.type === "nameEffect") {
    const color = item.color || "#ffd980";
    return `<div class="shop-item-preview name-preview" style="--shop-preview-name: ${dextraEscapeHtml(color)}"><span>Name</span></div>`;
  }

  return `<div class="shop-item-preview"><span>${dextraEscapeHtml(item.title || "Item")}</span></div>`;
}

window.DEXTRA_COSMETICS = {
  ALL_ITEMS: DEXTRA_ALL_COSMETICS,
  DEFAULT_ITEMS: DEXTRA_DEFAULT_ITEMS,
  SHOP_ITEMS: DEXTRA_COSMETIC_ITEMS,
  ITEM_MAP: DEXTRA_COSMETIC_MAP,
  normalizeUser: normalizeDextraCosmetics,
  isOwned: isDextraCosmeticOwned,
  isEquipped: isDextraCosmeticEquipped,
  equipItem: equipDextraCosmetic,
  getItem: getDextraItem,
  getEquipField: getDextraEquipField,
  renderWhale: renderDextraWhale,
  renderShopPreview: renderDextraShopPreview,
  escapeHtml: dextraEscapeHtml,
};
