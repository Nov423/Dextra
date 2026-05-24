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
      <line x1="459" y1="396" x2="459" y2="456" class="whale-accessory-string" />
      <circle cx="459" cy="482" r="24" class="whale-accessory-fill whale-medal" />
      <path d="M459 468l6 12 13 2-10 9 3 14-12-7-12 7 3-14-10-9 13-2z" fill="#6b4a07" opacity="0.45" />
    `;
  }

  if (type === "briefcase") {
    return `
      <line x1="459" y1="396" x2="459" y2="452" class="whale-accessory-string" />
      <rect x="424" y="456" width="70" height="50" rx="10" class="whale-accessory-fill whale-briefcase" />
      <path d="M440 456v-10h38v10" fill="none" stroke="#061528" stroke-width="6" stroke-linecap="round" />
      <path d="M424 478h70" stroke="#061528" stroke-width="4" opacity="0.28" />
    `;
  }

  if (type === "star") {
    return `
      <line x1="459" y1="396" x2="459" y2="455" class="whale-accessory-string" />
      <path d="M459 448l10 23 25 3-18 17 5 25-22-13-22 13 5-25-18-17 25-3z" class="whale-accessory-fill whale-star" />
    `;
  }

  if (type === "crown") {
    return `
      <line x1="459" y1="396" x2="459" y2="454" class="whale-accessory-string" />
      <path d="M425 486l8-39 17 23 10-29 12 29 17-23 8 39z" class="whale-accessory-fill whale-crown" />
      <path d="M430 489h60" stroke="#061528" stroke-width="5" stroke-linecap="round" opacity="0.26" />
    `;
  }

  if (type === "trophy") {
    return `
      <line x1="459" y1="396" x2="459" y2="451" class="whale-accessory-string" />
      <path d="M442 456h35v23c0 14-8 24-18 24s-17-10-17-24z" class="whale-accessory-fill whale-trophy" />
      <path d="M442 463h-13c0 17 8 26 18 28M477 463h13c0 17-8 26-18 28" fill="none" stroke="#061528" stroke-width="5" stroke-linecap="round" opacity="0.35" />
      <path d="M459 503v17M443 520h33" stroke="#061528" stroke-width="6" stroke-linecap="round" opacity="0.35" />
    `;
  }

  if (type === "lightning") {
    return `
      <line x1="459" y1="396" x2="459" y2="454" class="whale-accessory-string" />
      <path d="M468 444l-34 48h26l-9 35 38-51h-26z" class="whale-accessory-fill whale-lightning" />
    `;
  }

  if (type === "gem") {
    return `
      <line x1="459" y1="396" x2="459" y2="454" class="whale-accessory-string" />
      <path d="M459 445l34 21-34 52-34-52z" class="whale-accessory-fill whale-gem" />
      <path d="M425 466h68M459 445l-13 21 13 52 13-52z" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.42" />
    `;
  }

  if (type === "book") {
    return `
      <line x1="459" y1="396" x2="459" y2="453" class="whale-accessory-string" />
      <path d="M421 461c15-8 28-7 38 2 11-9 24-10 39-2v51c-15-7-28-6-39 2-10-8-23-9-38-2z" class="whale-accessory-fill whale-book" />
      <path d="M459 463v51M433 477c9-3 16-2 21 3M464 480c7-4 14-6 22-3" fill="none" stroke="#061528" stroke-width="4" stroke-linecap="round" opacity="0.3" />
    `;
  }

  if (type === "heart") {
    return `
      <line x1="459" y1="396" x2="459" y2="453" class="whale-accessory-string" />
      <path d="M459 516s-35-21-35-46c0-13 9-22 20-22 8 0 13 5 15 10 3-5 9-10 17-10 11 0 20 9 20 22 0 25-37 46-37 46z" class="whale-accessory-fill whale-heart" />
    `;
  }

  if (type === "ribbon") {
    return `
      <line x1="459" y1="396" x2="459" y2="451" class="whale-accessory-string" />
      <circle cx="459" cy="472" r="21" class="whale-accessory-fill whale-ribbon" />
      <path d="M445 488l-13 31 20-8 7 18 10-39M473 488l13 31-20-8-7 18-10-39" class="whale-accessory-fill whale-ribbon-tail" />
    `;
  }

  return "";
}

function renderDextraWhale(user, overrides = {}) {
  const whale = getDextraWhaleColors(user, overrides);
  const id = `dextra-whale-${++dextraWhaleRenderCount}`;
  return `
    <svg class="whale-avatar" viewBox="0 0 696 546" role="img" aria-label="Dextra whale mascot">
      <defs>
        <linearGradient id="${id}-body" x1="80" y1="150" x2="570" y2="470" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${dextraEscapeHtml(dextraShadeHex(whale.primary, 0.12))}" />
          <stop offset="0.62" stop-color="${dextraEscapeHtml(whale.primary)}" />
          <stop offset="1" stop-color="${dextraEscapeHtml(whale.primaryShadow)}" />
        </linearGradient>
        <linearGradient id="${id}-belly" x1="72" y1="360" x2="370" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${dextraEscapeHtml(dextraShadeHex(whale.secondary, 0.08))}" />
          <stop offset="1" stop-color="${dextraEscapeHtml(whale.secondary)}" />
        </linearGradient>
      </defs>
      <path d="M506 288c34-71 91-121 163-130-1 70-28 121-79 154 51 40 78 96 82 168-60-13-99-47-118-101-20 57-54 105-100 142-34 27-69 28-89 3-13-17-14-39-4-65 56-17 104-73 145-171z" fill="url(#${id}-body)" />
      <path d="M592 311c35-28 56-66 63-113 5 0 10-1 14-2-1 53-26 93-75 120 45 39 70 88 75 148-37-14-65-40-83-78-10-23-9-48 6-75z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.4" />
      <path d="M36 318c0-87 54-143 151-157 126-19 239 17 339 109 31 29 58 35 81 17-5 97-47 158-126 185-68 23-161 17-279-17-64-18-109-38-136-60-20-16-30-42-30-77z" fill="url(#${id}-body)" />
      <path d="M60 388c66 19 144 24 233 14 29-3 60-9 92-18-16 54-57 83-123 87-87 5-158-22-213-81 3-3 7-3 11-2z" fill="url(#${id}-belly)" />
      <path d="M358 411c37 5 77-3 120-23-13 39-42 68-87 88-18-16-29-37-33-65z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.46" />
      <path d="M238 182c-13-37-42-40-58-66 27-18 62 6 68 61z" fill="${dextraEscapeHtml(whale.primary)}" />
      <path d="M269 188c4-39 31-65 61-54 17 28-16 56-58 72z" fill="${dextraEscapeHtml(whale.primary)}" />
      <path d="M77 246c38-28 100-42 186-36" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.78" />
      <path d="M104 229c36-19 82-28 138-27" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.78" />
      <circle cx="249" cy="397" r="7" fill="#33271f" />
      <path d="M66 419c59 6 128 9 207 9 29 0 47-14 51-42" fill="none" stroke="#33271f" stroke-width="8" stroke-linecap="round" />
      <path d="M96 416c13 32 30 56 52 72M143 420c15 31 34 56 57 74M192 422c16 31 37 57 62 78M244 422c13 28 30 52 50 72" fill="none" stroke="${dextraEscapeHtml(dextraShadeHex(whale.primary, -0.12))}" stroke-width="4" stroke-linecap="round" opacity="0.48" />
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
