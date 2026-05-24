const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";
const ADMIN_EMAILS = new Set(["123@gmail.com"]);

const COSMETICS = window.DEXTRA_COSMETICS;
const SHOP_ITEMS = COSMETICS?.SHOP_ITEMS || [];

const LEADERBOARD_FILLERS = [
  { name: "KoroKage", bestStreak: 48, coinsEarned: 520 },
  { name: "Jacbo", bestStreak: 45, coinsEarned: 490 },
  { name: "ChenThePen", bestStreak: 39, coinsEarned: 450 },
  { name: "Krackelackling", bestStreak: 36, coinsEarned: 410 },
  { name: "ArthurCoviello", bestStreak: 33, coinsEarned: 375 },
  { name: "TetrSweat", bestStreak: 28, coinsEarned: 340 },
  { name: "ChangforChange", bestStreak: 24, coinsEarned: 305 },
  { name: "PlaneGuy", bestStreak: 20, coinsEarned: 260 },
];

const SHOP_ITEM_MAP = COSMETICS?.ITEM_MAP || new Map(SHOP_ITEMS.map((item) => [item.id, item]));

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function normalizeUser(user) {
  return {
    testsTaken: 0,
    roleplaysDone: 0,
    writtensGraded: 0,
    coins: 0,
    coinsEarned: 0,
    currentStreak: 0,
    bestStreak: user?.streak || 0,
    testingProgress: {},
    recentRoleplays: [],
    ownedCosmetics: [],
    equippedBanner: "",
    equippedNameEffect: "",
    equippedWhalePrimary: "",
    equippedWhaleSecondary: "",
    equippedWhaleAccessory: "",
    equippedProfileBorder: "",
    profileImageData: "",
    friends: [],
    ownedClothing: [],
    equippedClothing: "",
    ...user,
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCoins(value) {
  return Math.max(0, Number(value) || 0).toLocaleString();
}

function isAdminUser(user) {
  return user?.role === "admin" || ADMIN_EMAILS.has(String(user?.email || "").toLowerCase());
}

function shouldIgnoreShortcut(event) {
  const target = event.target;
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    target?.tagName === "INPUT" ||
    target?.tagName === "TEXTAREA" ||
    target?.tagName === "SELECT" ||
    target?.isContentEditable
  );
}

function normalizeCosmetics(user) {
  COSMETICS?.normalizeUser(user);
  user.ownedClothing = Array.isArray(user.ownedClothing) ? user.ownedClothing : [];
  user.equippedClothing = user.equippedClothing || "";
  return user;
}

function getInitials(name) {
  return String(name || "D")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "D";
}

function matchesSearch(item, query) {
  if (!query) {
    return true;
  }

  const haystack = [item.title, item.name, item.summary, item.code, item.overview]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function renderCategoryCard(item, href) {
  return `
    <a class="panel category-card category-link category-visual-${item.visual}" href="${href}">
      <div class="category-art">
        <span class="category-badge">${item.code}</span>
        <img class="category-icon" src="${item.icon}" alt="" aria-hidden="true" />
      </div>
      <div class="category-copy">
        <p class="eyebrow">${item.code}</p>
        <h3>${item.title}</h3>
        <p>${item.overview}</p>
      </div>
    </a>
  `;
}

function renderEventCard(item) {
  const targetAttr = item.newTab ? ' target="_blank" rel="noreferrer"' : "";
  return `
    <a class="panel category-card category-link category-theme-${item.theme}" href="${item.source}"${targetAttr}>
      <div class="category-art">
        <span class="category-badge">${item.title}</span>
        <img class="category-icon" src="${item.icon}" alt="" aria-hidden="true" />
      </div>
      <div class="category-copy">
        <p class="eyebrow">${item.title}</p>
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
      </div>
    </a>
  `;
}

function renderEmptyState(label) {
  return `
    <article class="panel empty-state">
      <p class="eyebrow">No Matches</p>
      <h3>No ${label} found</h3>
      <p>Try a different search term.</p>
    </article>
  `;
}

function bindHomeSession() {
  const profileLink = document.getElementById("profileLink");
  const signInButton = document.getElementById("headerSignIn");
  const signUpButton = document.getElementById("headerSignUp");
  const signOutButton = document.getElementById("signOutButton");
  const headerCoinPill = document.getElementById("headerCoinPill");
  const headerCoinCount = document.getElementById("headerCoinCount");
  const publicNav = document.getElementById("publicNav");
  const publicContent = document.getElementById("publicContent");
  const learningHub = document.getElementById("learningHub");

  if (
    !profileLink ||
    !signInButton ||
    !signUpButton ||
    !signOutButton ||
    !publicNav ||
    !publicContent ||
    !learningHub
  ) {
    return;
  }

  const user = getCurrentUser();

  if (!user) {
    profileLink.classList.add("hidden");
    headerCoinPill?.classList.add("hidden");
    signOutButton.classList.add("hidden");
    signInButton.classList.remove("hidden");
    signUpButton.classList.remove("hidden");
    publicNav.innerHTML = `
      <a href="#hero">Home</a>
      <a href="#team">Meet the Team</a>
      <a href="#info">Information</a>
      <a href="#programs">Programs</a>
      <a href="#contact">Contact Us</a>
    `;
    publicContent.classList.remove("hidden");
    learningHub.classList.add("hidden");
    return;
  }

  profileLink.classList.remove("hidden");
  headerCoinPill?.classList.remove("hidden");
  signOutButton.classList.remove("hidden");
  signInButton.classList.add("hidden");
  signUpButton.classList.add("hidden");
  let fullUser = getUsers()
    .map(normalizeUser)
    .find((entry) => entry.email?.toLowerCase() === user.email?.toLowerCase()) || normalizeUser(user);
  normalizeCosmetics(fullUser);
  publicNav.innerHTML = `
    <a href="#testing" data-tab-target="testing">Testing</a>
    <a href="#roleplays" data-tab-target="roleplays">Roleplays</a>
    <a href="#prepared" data-tab-target="prepared">Prepared Events</a>
    <a href="#leaderboard" data-tab-target="leaderboard">Leaderboard</a>
    <a href="#shop" data-tab-target="shop">Shop</a>
  `;
  publicContent.classList.add("hidden");
  learningHub.classList.remove("hidden");

  signOutButton.addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.reload();
  });

  const testingGrid = document.getElementById("testingGrid");
  const roleplayGrid = document.getElementById("roleplayGrid");
  const writtenGrid = document.getElementById("writtenGrid");
  const roleplaySubtabs = document.getElementById("roleplaySubtabs");
  const testingSearch = document.getElementById("testingSearch");
  const roleplaySearch = document.getElementById("roleplaySearch");
  const preparedSearch = document.getElementById("preparedSearch");
  const upcomingEventsList = document.getElementById("upcomingEventsList");
  const recentRoleplaysList = document.getElementById("recentRoleplaysList");
  const radarStage = document.getElementById("testingRadarStage");
  const leaderboardBoard = document.getElementById("leaderboardBoard");
  const shopGrid = document.getElementById("shopGrid");
  const shopCoinBalance = document.getElementById("shopCoinBalance");
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabSections = document.querySelectorAll("[data-tab-panel]");

  let activeRoleplayGroup = DEXTRA_LEARNING_DATA.roleplayGroups[0]?.id || "team";

  function persistFullUser() {
    const users = getUsers().map(normalizeUser);
    const index = users.findIndex((entry) => entry.email?.toLowerCase() === fullUser.email?.toLowerCase());

    if (index >= 0) {
      users[index] = normalizeUser(fullUser);
    } else {
      users.push(normalizeUser(fullUser));
    }

    saveUsers(users);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(normalizeUser(fullUser)));
    localStorage.setItem(SESSION_KEY, JSON.stringify(normalizeUser(fullUser)));
    updateCoinDisplays();
    renderLeaderboard();
    renderShop();
  }

  function updateCoinDisplays() {
    if (headerCoinCount) {
      headerCoinCount.textContent = formatCoins(fullUser.coins);
    }

    if (shopCoinBalance) {
      shopCoinBalance.textContent = formatCoins(fullUser.coins);
    }
  }

  function getLeaderboardEntries() {
    const users = getUsers()
      .map(normalizeUser)
      .filter((entry) => entry.name)
      .map((entry) => ({
        name: entry.name,
        bestStreak: Number(entry.bestStreak || entry.currentStreak || entry.streak || 0),
        coinsEarned: Number(entry.coinsEarned || 0),
        isCurrentUser: entry.email?.toLowerCase() === fullUser.email?.toLowerCase(),
      }));

    const combined = [...users, ...LEADERBOARD_FILLERS.map((entry) => ({ ...entry, isFiller: true }))];
    const byName = new Map();

    combined.forEach((entry) => {
      const key = entry.name.toLowerCase();
      const existing = byName.get(key);
      if (!existing || entry.bestStreak > existing.bestStreak || entry.isCurrentUser) {
        byName.set(key, entry);
      }
    });

    return [...byName.values()]
      .sort((left, right) => {
        if (right.bestStreak !== left.bestStreak) {
          return right.bestStreak - left.bestStreak;
        }
        return right.coinsEarned - left.coinsEarned;
      })
      .slice(0, 8);
  }

  function renderLeaderboard() {
    if (!leaderboardBoard) {
      return;
    }

    const rows = getLeaderboardEntries();
    leaderboardBoard.innerHTML = `
      <div class="leaderboard-shell">
        <header class="leaderboard-hero-card">
          <span class="leaderboard-flame" aria-hidden="true"></span>
          <div>
            <h3>Daily Practice Leaderboard</h3>
            <p>Top streaks this week</p>
          </div>
        </header>
        <div class="leaderboard-table" aria-label="Daily practice leaderboard">
          <div class="leaderboard-head">
            <span>Rank</span>
            <span>Username</span>
            <span>Streak</span>
          </div>
          ${rows
            .map((entry, index) => {
              const rank = index + 1;
              const medalClass = rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : "";
              return `
                <article class="leaderboard-row ${medalClass}${entry.isCurrentUser ? " current-user" : ""}">
                  <span class="leaderboard-rank">${rank}</span>
                  <span class="leaderboard-user">
                    <span class="leaderboard-avatar">${escapeHtml(getInitials(entry.name))}</span>
                    <strong>${escapeHtml(entry.name)}</strong>
                  </span>
                  <span class="leaderboard-score">
                    <span class="score-flame" aria-hidden="true"></span>
                    <strong>${formatCoins(entry.bestStreak)}</strong>
                    <small>days</small>
                  </span>
                </article>
              `;
            })
            .join("")}
        </div>
      </div>
    `;
  }

  function renderShop() {
    if (!shopGrid) {
      return;
    }

    shopGrid.innerHTML = SHOP_ITEMS.map((item) => {
      const isOwned = COSMETICS?.isOwned(fullUser, item) || false;
      const isEquipped = COSMETICS?.isEquipped(fullUser, item) || false;
      const canBuy = Number(fullUser.coins || 0) >= item.cost;
      const buttonLabel = isEquipped ? "Equipped" : isOwned ? "Equip" : canBuy ? "Buy" : `Need ${formatCoins(item.cost - fullUser.coins)}`;
      const action = isOwned ? "equip" : "buy";

      return `
        <article class="panel shop-card${isOwned ? " owned" : ""}">
          ${COSMETICS?.renderShopPreview(item, fullUser) || ""}
          <div>
            <p class="eyebrow">${escapeHtml(item.categoryLabel || item.type)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>
          <div class="shop-card-footer">
            <span class="shop-price"><span class="coin-dot" aria-hidden="true"></span>${formatCoins(item.cost)}</span>
            <button
              class="button ${isEquipped ? "secondary" : "primary"}"
              type="button"
              data-shop-action="${action}"
              data-shop-id="${item.id}"
              ${isEquipped || (!isOwned && !canBuy) ? "disabled" : ""}
            >
              ${buttonLabel}
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  function equipItem(item) {
    COSMETICS?.equipItem(fullUser, item);
  }

  function getCategoryProgress(category) {
    const categoryProgress = fullUser.testingProgress?.[category.id];
    if (!categoryProgress) {
      return 0;
    }

    const totalLessons = Math.max(1, category.chapters.length * 10);
    return Math.min(1, (categoryProgress.completedLessons?.length || 0) / totalLessons);
  }

  function renderUpcomingEvents() {
    const events = [
      {
        title: "California SCDC",
        detail: "State-level prep checkpoint for roleplays, prepared events, and testing.",
      },
      {
        title: "ICDC",
        detail: "Final competition push with presentation, performance, and testing review.",
      },
    ];

    upcomingEventsList.innerHTML = events
      .map(
        (event) => `
          <article class="event-row">
            <strong>${event.title}</strong>
            <span>${event.detail}</span>
          </article>
        `
      )
      .join("");
  }

  function renderRecentRoleplays() {
    const recentIds = fullUser.recentRoleplays?.slice(0, 4) || [];
    const items = recentIds
      .map((id) => DEXTRA_LEARNING_DATA.roleplays.find((entry) => entry.id === id))
      .filter(Boolean);

    if (!items.length) {
      const fallbackIds = ["pmk", "bltdm", "ftdm", "bl074"];
      fallbackIds.forEach((id) => {
        const item = DEXTRA_LEARNING_DATA.roleplays.find((entry) => entry.id === id);
        if (item) {
          items.push(item);
        }
      });
    }

    recentRoleplaysList.innerHTML = items
      .map(
        (item) => `
          <article class="recent-roleplay-row">
            <strong>${item.title}</strong>
            <span>${item.name}</span>
          </article>
        `
      )
      .join("");
  }

  function renderRadarChart() {
    if (!radarStage) {
      return;
    }

    const categories = DEXTRA_LEARNING_DATA.testingCategories;
    radarStage.querySelectorAll(".radar-point, .radar-label").forEach((node) => node.remove());

    const centerX = 50;
    const centerY = 50;
    const radius = 33;

    categories.forEach((category, index) => {
      const value = getCategoryProgress(category);
      const angle = (-Math.PI / 2) + (index / categories.length) * Math.PI * 2;
      const pointRadius = Math.max(7, radius * value);
      const x = centerX + Math.cos(angle) * pointRadius;
      const y = centerY + Math.sin(angle) * pointRadius;
      const labelX = centerX + Math.cos(angle) * 45;
      const labelY = centerY + Math.sin(angle) * 45;

      const point = document.createElement("span");
      point.className = "radar-point";
      point.style.left = `${x}%`;
      point.style.top = `${y}%`;
      point.title = category.title;

      const label = document.createElement("span");
      label.className = "radar-label";
      label.style.left = `${labelX}%`;
      label.style.top = `${labelY}%`;
      label.textContent = category.code;

      radarStage.append(point, label);
    });
  }

  function activateTab(tabName, updateHash = true) {
    tabButtons.forEach((button) => {
      button.classList.toggle("active-tab", button.dataset.tabTarget === tabName);
    });

    tabSections.forEach((section) => {
      section.classList.toggle("hidden", section.dataset.tabPanel !== tabName);
    });

    if (updateHash && window.location.hash !== `#${tabName}`) {
      history.replaceState(null, "", `#${tabName}`);
    }
  }

  function renderTesting() {
    const query = testingSearch.value.trim().toLowerCase();
    const items = DEXTRA_LEARNING_DATA.testingCategories.filter((category) =>
      matchesSearch(category, query)
    );

    testingGrid.innerHTML = items.length
      ? items
          .map((category) =>
            renderCategoryCard(category, `testing-roadmap.html?category=${category.id}`)
          )
          .join("")
      : renderEmptyState("testing categories");
  }

  function renderRoleplaySubtabs() {
    roleplaySubtabs.innerHTML = DEXTRA_LEARNING_DATA.roleplayGroups
      .map(
        (group) => `
          <button
            class="subtab-button${group.id === activeRoleplayGroup ? " active" : ""}"
            type="button"
            data-roleplay-group="${group.id}"
          >
            ${group.label}
          </button>
        `
      )
      .join("");

    roleplaySubtabs.querySelectorAll("[data-roleplay-group]").forEach((button) => {
      button.addEventListener("click", () => {
        activeRoleplayGroup = button.dataset.roleplayGroup;
        renderRoleplaySubtabs();
        renderRoleplays();
      });
    });
  }

  function renderRoleplays() {
    const query = roleplaySearch.value.trim().toLowerCase();
    const group = DEXTRA_LEARNING_DATA.roleplayGroups.find(
      (entry) => entry.id === activeRoleplayGroup
    );
    const allowedIds = new Set(group ? group.itemIds : []);
    const items = DEXTRA_LEARNING_DATA.roleplays.filter(
      (item) => allowedIds.has(item.id) && matchesSearch(item, query)
    );

    roleplayGrid.innerHTML = items.length
      ? items
          .map((item) =>
            renderEventCard({
              ...item,
              source: `roleplay-review.html?event=${encodeURIComponent(item.id)}`,
            })
          )
          .join("")
      : renderEmptyState("roleplays");
  }

  function renderPrepared() {
    const query = preparedSearch.value.trim().toLowerCase();
    const items = DEXTRA_LEARNING_DATA.writtens.filter((item) => matchesSearch(item, query));

    writtenGrid.innerHTML = items.length
      ? items
          .map((item) =>
            renderEventCard({
              ...item,
              source: `prepared-review.html?type=${encodeURIComponent(item.id)}`,
            })
          )
          .join("")
      : renderEmptyState("prepared events");
  }

  testingSearch.addEventListener("input", renderTesting);
  roleplaySearch.addEventListener("input", renderRoleplays);
  preparedSearch.addEventListener("input", renderPrepared);

  shopGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shop-action]");
    if (!button || button.disabled) {
      return;
    }

    const item = SHOP_ITEM_MAP.get(button.dataset.shopId);
    if (!item) {
      return;
    }

    normalizeCosmetics(fullUser);

    if (button.dataset.shopAction === "buy") {
      const cost = Number(item.cost || 0);
      if (Number(fullUser.coins || 0) < cost) {
        return;
      }

      fullUser.coins = Math.max(0, Number(fullUser.coins || 0) - cost);
      fullUser.ownedCosmetics = [...new Set([...fullUser.ownedCosmetics, item.id])];
    }

    equipItem(item);
    persistFullUser();
  });

  document.addEventListener("keydown", (event) => {
    if (!isAdminUser(fullUser) || shouldIgnoreShortcut(event)) {
      return;
    }

    if (event.key.toLowerCase() === "g") {
      event.preventDefault();
      fullUser.coins = Number(fullUser.coins || 0) + 1000;
      fullUser.coinsEarned = Number(fullUser.coinsEarned || 0) + 1000;
      persistFullUser();
    }
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      activateTab(button.dataset.tabTarget);
    });
  });

  persistFullUser();
  renderTesting();
  renderRoleplaySubtabs();
  renderRoleplays();
  renderPrepared();
  renderUpcomingEvents();
  renderRadarChart();
  renderRecentRoleplays();
  updateCoinDisplays();
  renderLeaderboard();
  renderShop();
  const tabNames = [...tabButtons].map((button) => button.dataset.tabTarget);
  const initialTab = tabNames.includes(window.location.hash.slice(1))
    ? window.location.hash.slice(1)
    : "testing";
  activateTab(initialTab, false);
}

sessionStorage.removeItem("currentUser");
bindHomeSession();
