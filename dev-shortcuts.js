(() => {
  const SESSION_KEY = "dextraCurrentUser";
  const USERS_KEY = "dextraUsers";
  const ADMIN_EMAILS = new Set(["123@gmail.com"]);
  const ADMIN_FIXED_STATS = {
    testsTaken: 67,
    roleplaysDone: 42,
    writtensGraded: 4,
  };

  function readJson(storage, key, fallback) {
    try {
      return JSON.parse(storage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function getSessionUser() {
    return readJson(sessionStorage, SESSION_KEY, null) || readJson(localStorage, SESSION_KEY, null);
  }

  function getUsers() {
    return readJson(localStorage, USERS_KEY, []);
  }

  function normalizeUsername(value) {
    return String(value || "").trim().toLowerCase();
  }

  function fallbackUsername(user) {
    if (ADMIN_EMAILS.has(String(user?.email || "").toLowerCase())) {
      return "admin";
    }

    return String(user?.email || user?.name || "dextra-user")
      .split("@")[0]
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "")
      .slice(0, 20) || "dextra-user";
  }

  function getProfileUsername(user) {
    return normalizeUsername(user?.username) || fallbackUsername(user);
  }

  function isAdminUser(user) {
    return user?.role === "admin" || ADMIN_EMAILS.has(String(user?.email || "").toLowerCase());
  }

  function applyAdminFixedStats(user) {
    if (isAdminUser(user)) {
      Object.assign(user, ADMIN_FIXED_STATS);
    }
    return user;
  }

  function findCurrentUserIndex(users, sessionUser) {
    if (!sessionUser) {
      return -1;
    }

    const sessionEmail = String(sessionUser.email || "").toLowerCase();
    const sessionUsername = normalizeUsername(sessionUser.username);
    return users.findIndex((user) => {
      const emailMatch = sessionEmail && String(user.email || "").toLowerCase() === sessionEmail;
      const usernameMatch = sessionUsername && getProfileUsername(user) === sessionUsername;
      return emailMatch || usernameMatch;
    });
  }

  function normalizePracticeState(user) {
    user.coins = Math.max(0, Number(user.coins || 0));
    user.coinsEarned = Math.max(0, Number(user.coinsEarned || 0));
    user.currentStreak = Math.max(0, Number(user.currentStreak || 0));
    user.bestStreak = Math.max(Number(user.bestStreak || 0), Number(user.streak || 0));
    user.testingProgress = user.testingProgress && typeof user.testingProgress === "object" ? user.testingProgress : {};
    user.ownedCosmetics = Array.isArray(user.ownedCosmetics) ? user.ownedCosmetics : [];
    user.ownedClothing = Array.isArray(user.ownedClothing) ? user.ownedClothing : [];
    user.lastDailyWheelDate ||= "";
    return applyAdminFixedStats(user);
  }

  function resetPurchasedCosmetics(user) {
    user.ownedCosmetics = [];
    user.ownedClothing = [];
    user.equippedClothing = "";
    user.equippedBanner = "banner-default";
    user.equippedNameEffect = "name-effect-none";
    user.equippedWhalePrimary = "whale-primary-ocean";
    user.equippedWhaleSecondary = "whale-secondary-ice";
    user.equippedWhaleAccessory = "whale-accessory-none";
    user.equippedProfileBorder = "border-default";
  }

  function updateCoinDisplays(user) {
    ["headerCoinCount", "profileCoinCount", "lessonCoinCount", "roadmapCoinCount", "shopCoinBalance", "coinsValue"].forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        node.textContent = Math.max(0, Number(user.coins || 0)).toLocaleString();
      }
    });
  }

  function persistCurrentUser(mutator) {
    const sessionUser = getSessionUser();
    const users = getUsers().map(normalizePracticeState);
    const index = findCurrentUserIndex(users, sessionUser);
    if (index < 0 || !isAdminUser(users[index])) {
      return null;
    }

    const user = users[index];
    mutator(user);
    users[index] = normalizePracticeState(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(users[index]));
    localStorage.setItem(SESSION_KEY, JSON.stringify(users[index]));
    updateCoinDisplays(users[index]);
    window.dispatchEvent(new CustomEvent("dextra:user-updated", { detail: { user: users[index] } }));
    return users[index];
  }

  function shouldIgnoreShortcut(event) {
    const target = event.target;
    const tagName = target?.tagName?.toLowerCase() || "";
    return (
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      tagName === "input" ||
      tagName === "textarea" ||
      tagName === "select" ||
      target?.isContentEditable
    );
  }

  document.addEventListener("keydown", (event) => {
    if (shouldIgnoreShortcut(event)) {
      return;
    }

    const key = event.key.toLowerCase();
    if (!["c", "g", "x"].includes(key)) {
      return;
    }

    const sessionUser = getSessionUser();
    const users = getUsers().map(normalizePracticeState);
    const user = users[findCurrentUserIndex(users, sessionUser)];
    if (!isAdminUser(user)) {
      return;
    }

    if (key === "c") {
      if (window.DEXTRA_TESTING_SHORTCUTS?.answerCorrect?.()) {
        event.preventDefault();
      }
      return;
    }

    if (key === "g") {
      event.preventDefault();
      persistCurrentUser((entry) => {
        entry.coins = Number(entry.coins || 0) + 1000;
        entry.coinsEarned = Number(entry.coinsEarned || 0) + 1000;
      });
      return;
    }

    if (key === "x") {
      event.preventDefault();
      persistCurrentUser((entry) => {
        entry.coins = 0;
        entry.coinsEarned = 0;
        entry.currentStreak = 0;
        entry.bestStreak = 0;
        entry.testingProgress = {};
        entry.lastDailyWheelDate = "";
        resetPurchasedCosmetics(entry);
        applyAdminFixedStats(entry);
      });
      window.location.reload();
    }
  });
})();
