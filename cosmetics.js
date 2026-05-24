const DEXTRA_DEFAULT_COSMETICS = {
  equippedBanner: "banner-default",
  equippedNameEffect: "",
  equippedWhalePrimary: "whale-primary-ocean",
  equippedWhaleSecondary: "whale-secondary-ice",
  equippedWhaleAccessory: "whale-accessory-none",
  equippedProfileBorder: "border-default",
};

const DEXTRA_COSMETIC_ITEMS = [
  {
    id: "banner-gold",
    type: "banner",
    title: "Gold Spotlight Banner",
    description: "Warm gold profile banner for standout practice streaks.",
    cost: 80,
    categoryLabel: "Profile Banner",
  },
  {
    id: "banner-blue",
    type: "banner",
    title: "Blue Wave Banner",
    description: "Cool blue profile banner with a clean competition look.",
    cost: 80,
    categoryLabel: "Profile Banner",
  },
  {
    id: "banner-aurora",
    type: "banner",
    title: "Aurora Banner",
    description: "A bright profile backdrop with teal and violet light.",
    cost: 110,
    categoryLabel: "Profile Banner",
  },
  {
    id: "border-gold",
    type: "profileBorder",
    title: "Gold Profile Border",
    description: "A polished gold ring for your profile picture.",
    cost: 70,
    categoryLabel: "Profile Border",
  },
  {
    id: "border-wave",
    type: "profileBorder",
    title: "Wave Profile Border",
    description: "A blue profile ring that matches the mascot.",
    cost: 70,
    categoryLabel: "Profile Border",
  },
  {
    id: "border-neon",
    type: "profileBorder",
    title: "Neon Profile Border",
    description: "A high-contrast profile ring with a soft glow.",
    cost: 95,
    categoryLabel: "Profile Border",
  },
  {
    id: "whale-primary-sky",
    type: "whalePrimary",
    title: "Sky Whale",
    description: "A lighter blue primary whale color.",
    cost: 55,
    categoryLabel: "Whale Primary Color",
    color: "#32b8f0",
  },
  {
    id: "whale-primary-mint",
    type: "whalePrimary",
    title: "Mint Whale",
    description: "A green-blue primary whale color.",
    cost: 65,
    categoryLabel: "Whale Primary Color",
    color: "#2fd1b5",
  },
  {
    id: "whale-primary-coral",
    type: "whalePrimary",
    title: "Coral Whale",
    description: "A warm coral primary whale color.",
    cost: 75,
    categoryLabel: "Whale Primary Color",
    color: "#ff7f7f",
  },
  {
    id: "whale-secondary-cream",
    type: "whaleSecondary",
    title: "Cream Belly",
    description: "A soft cream secondary whale color.",
    cost: 45,
    categoryLabel: "Whale Secondary Color",
    color: "#fff2c2",
  },
  {
    id: "whale-secondary-lavender",
    type: "whaleSecondary",
    title: "Lavender Belly",
    description: "A lavender secondary whale color.",
    cost: 55,
    categoryLabel: "Whale Secondary Color",
    color: "#d9c7ff",
  },
  {
    id: "whale-secondary-seafoam",
    type: "whaleSecondary",
    title: "Seafoam Belly",
    description: "A seafoam secondary whale color.",
    cost: 55,
    categoryLabel: "Whale Secondary Color",
    color: "#bdf8e7",
  },
  {
    id: "whale-accessory-medal",
    type: "whaleAccessory",
    title: "Gold Medal",
    description: "A medal that hangs from the whale's flipper.",
    cost: 80,
    categoryLabel: "Whale Accessory",
    accessory: "medal",
  },
  {
    id: "whale-accessory-briefcase",
    type: "whaleAccessory",
    title: "Mini Briefcase",
    description: "A tiny case for business-roleplay energy.",
    cost: 90,
    categoryLabel: "Whale Accessory",
    accessory: "briefcase",
  },
  {
    id: "whale-accessory-star",
    type: "whaleAccessory",
    title: "Star Charm",
    description: "A star charm that swings under the whale's flipper.",
    cost: 100,
    categoryLabel: "Whale Accessory",
    accessory: "star",
  },
  {
    id: "name-glow",
    type: "nameEffect",
    title: "Glow Name Effect",
    description: "Adds a soft gold glow to your profile display name.",
    cost: 120,
    categoryLabel: "Name Effect",
  },
  {
    id: "name-sky",
    type: "nameEffect",
    title: "Sky Name Effect",
    description: "Adds a blue accent treatment to your profile name.",
    cost: 120,
    categoryLabel: "Name Effect",
  },
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
];

const DEXTRA_ALL_COSMETICS = [...DEXTRA_DEFAULT_ITEMS, ...DEXTRA_COSMETIC_ITEMS];
const DEXTRA_COSMETIC_MAP = new Map(DEXTRA_ALL_COSMETICS.map((item) => [item.id, item]));

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

function getDextraWhaleColors(user, overrides = {}) {
  normalizeDextraCosmetics(user);
  const primaryItem = getDextraItem(overrides.primary || user.equippedWhalePrimary) || getDextraItem("whale-primary-ocean");
  const secondaryItem = getDextraItem(overrides.secondary || user.equippedWhaleSecondary) || getDextraItem("whale-secondary-ice");
  const accessoryItem = getDextraItem(overrides.accessory || user.equippedWhaleAccessory) || getDextraItem("whale-accessory-none");
  return {
    primary: primaryItem.color || "#19a7d8",
    primaryShadow: "#087cab",
    secondary: secondaryItem.color || "#d9f4ff",
    accessory: accessoryItem.accessory || "none",
  };
}

function renderDextraAccessory(type) {
  if (type === "medal") {
    return `
      <line x1="220" y1="127" x2="220" y2="161" class="whale-accessory-string" />
      <circle cx="220" cy="174" r="16" class="whale-accessory-fill whale-medal" />
      <path d="M220 165l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" fill="#6b4a07" opacity="0.45" />
    `;
  }

  if (type === "briefcase") {
    return `
      <line x1="220" y1="127" x2="220" y2="158" class="whale-accessory-string" />
      <rect x="198" y="160" width="44" height="32" rx="7" class="whale-accessory-fill whale-briefcase" />
      <path d="M211 160v-6h18v6" fill="none" stroke="#061528" stroke-width="4" stroke-linecap="round" />
      <path d="M198 175h44" stroke="#061528" stroke-width="3" opacity="0.28" />
    `;
  }

  if (type === "star") {
    return `
      <line x1="220" y1="127" x2="220" y2="160" class="whale-accessory-string" />
      <path d="M220 156l6 14 15 1-11 10 3 15-13-8-13 8 3-15-11-10 15-1z" class="whale-accessory-fill whale-star" />
    `;
  }

  return "";
}

function renderDextraWhale(user, overrides = {}) {
  const whale = getDextraWhaleColors(user, overrides);
  return `
    <svg class="whale-avatar" viewBox="0 0 300 210" role="img" aria-label="Dextra whale mascot">
      <path d="M231 78c20-31 40-44 63-45-1 28-14 48-41 58 16 19 19 43 10 70-19-9-32-22-40-40-12 10-28 15-48 14-19 22-53 30-96 22C35 149 8 126 8 96c0-36 26-61 76-72 50-10 96 1 136 33 4 3 8 6 11 21z" fill="${dextraEscapeHtml(whale.primary)}" />
      <path d="M226 83c20-25 39-40 62-45-3 23-16 41-38 51 15 18 18 39 11 64-17-9-30-21-37-38-11 9-24 14-41 15-7 11-18 20-32 27 34-5 58-17 72-36 8 18 21 31 40 40 9-27 6-51-10-70 27-10 40-30 41-58-24 1-44 16-63 45-1 2-2 3-5 5z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.62" />
      <path d="M32 118c27 24 76 33 142 17-12 24-43 36-91 32-32-3-54-19-66-48z" fill="${dextraEscapeHtml(whale.secondary)}" opacity="0.96" />
      <path d="M24 118c52 3 103 4 153 2" fill="none" stroke="#33271f" stroke-width="4" stroke-linecap="round" />
      <path d="M103 122c1 13 7 26 17 39M81 123c2 16 8 29 18 39M58 122c3 17 10 30 21 39" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7" />
      <circle cx="134" cy="103" r="5" fill="#33271f" />
      <path d="M170 100c0 14-5 23-14 25" fill="none" stroke="#33271f" stroke-width="6" stroke-linecap="round" />
      <path d="M51 66c16-10 37-16 63-17" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.82" />
      <path d="M215 117c10 15 23 25 38 30-13 13-27 14-42 3z" fill="${dextraEscapeHtml(whale.primaryShadow)}" opacity="0.9" />
      <path d="M126 29c-8-20-20-29-39-31-5 18 3 31 25 40M137 33c8-20 21-30 39-31 7 18-2 32-26 42" fill="${dextraEscapeHtml(whale.primary)}" />
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
    return `<div class="shop-item-preview ${dextraEscapeHtml(item.id)}"><span>Border</span></div>`;
  }

  return `<div class="shop-item-preview ${dextraEscapeHtml(item.id)}"><span>${item.type === "banner" ? "Banner" : "Name"}</span></div>`;
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
