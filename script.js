const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";

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

function normalizeUser(user) {
  return {
    testsTaken: 0,
    roleplaysDone: 0,
    writtensGraded: 0,
    testingProgress: {},
    recentRoleplays: [],
    ...user,
  };
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
  signOutButton.classList.remove("hidden");
  signInButton.classList.add("hidden");
  signUpButton.classList.add("hidden");
  const fullUser = getUsers()
    .map(normalizeUser)
    .find((entry) => entry.email?.toLowerCase() === user.email?.toLowerCase()) || normalizeUser(user);
  publicNav.innerHTML = `
    <a href="#testing" data-tab-target="testing">Testing</a>
    <a href="#roleplays" data-tab-target="roleplays">Roleplays</a>
    <a href="#prepared" data-tab-target="prepared">Prepared Events</a>
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
  const radarLegend = document.getElementById("testingRadarLegend");
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabSections = document.querySelectorAll("[data-tab-panel]");

  let activeRoleplayGroup = DEXTRA_LEARNING_DATA.roleplayGroups[0]?.id || "team";

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

    radarLegend.innerHTML = categories
      .map(
        (category) => `
          <article class="radar-legend-row">
            <strong>${category.code}</strong>
            <span>${category.title}</span>
          </article>
        `
      )
      .join("");
  }

  function activateTab(tabName) {
    tabButtons.forEach((button) => {
      button.classList.toggle("active-tab", button.dataset.tabTarget === tabName);
    });

    tabSections.forEach((section) => {
      section.classList.toggle("hidden", section.dataset.tabPanel !== tabName);
    });
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

  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      activateTab(button.dataset.tabTarget);
    });
  });

  renderTesting();
  renderRoleplaySubtabs();
  renderRoleplays();
  renderPrepared();
  renderUpcomingEvents();
  renderRadarChart();
  renderRecentRoleplays();
  activateTab("testing");
}

sessionStorage.removeItem("currentUser");
bindHomeSession();
