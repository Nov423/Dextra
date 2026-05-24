const DEXTRA_DEFAULT_COSMETICS = {
  equippedBanner: "banner-default",
  equippedNameEffect: "name-effect-none",
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

  return "";
}

function renderDextraWhale(user, overrides = {}) {
  const whale = getDextraWhaleColors(user, overrides);
  const id = `dextra-whale-${++dextraWhaleRenderCount}`;
  return `
    <svg class="whale-avatar" viewBox="0 0 658 456" role="img" aria-label="Dextra whale mascot">
      <defs>
        <filter id="${id}-primary" color-interpolation-filters="sRGB">
          <feFlood flood-color="${dextraEscapeHtml(whale.primary)}" result="color" />
          <feComposite in="color" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="${id}-shadow" color-interpolation-filters="sRGB">
          <feFlood flood-color="${dextraEscapeHtml(whale.primaryShadow)}" result="color" />
          <feComposite in="color" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="${id}-secondary" color-interpolation-filters="sRGB">
          <feFlood flood-color="${dextraEscapeHtml(whale.secondary)}" result="color" />
          <feComposite in="color" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="${id}-detail" color-interpolation-filters="sRGB">
          <feFlood flood-color="#33271f" result="color" />
          <feComposite in="color" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="${id}-highlight" color-interpolation-filters="sRGB">
          <feFlood flood-color="#ffffff" flood-opacity="0.88" result="color" />
          <feComposite in="color" in2="SourceAlpha" operator="in" />
        </filter>
      </defs>
      <image href="assets/whale-primary-mask.png" width="658" height="456" filter="url(#${id}-primary)" />
      <image href="assets/whale-shadow-mask.png" width="658" height="456" filter="url(#${id}-shadow)" />
      <image href="assets/whale-secondary-mask.png" width="658" height="456" filter="url(#${id}-secondary)" />
      <image href="assets/whale-highlight-mask.png" width="658" height="456" filter="url(#${id}-highlight)" />
      <image href="assets/whale-detail-mask.png" width="658" height="456" filter="url(#${id}-detail)" />
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
