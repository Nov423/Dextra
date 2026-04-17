const SESSION_KEY = "dextraCurrentUser";

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
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
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabSections = document.querySelectorAll("[data-tab-panel]");

  let activeRoleplayGroup = DEXTRA_LEARNING_DATA.roleplayGroups[0]?.id || "team";

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
  activateTab("testing");
}

sessionStorage.removeItem("currentUser");
bindHomeSession();
