const USERS_KEY = "dextraUsers";
const CLUBS_KEY = "dextraClubs";
const SESSION_KEY = "dextraCurrentUser";
const COSMETICS = window.DEXTRA_COSMETICS;

function getStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function normalizeUser(user) {
  const normalized = {
    testsTaken: 0,
    roleplaysDone: 0,
    writtensGraded: 0,
    coins: 0,
    coinsEarned: 0,
    currentStreak: 0,
    bestStreak: user?.streak || 0,
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
  COSMETICS?.normalizeUser(normalized);
  return normalized;
}

function formatCoins(value) {
  return Math.max(0, Number(value) || 0).toLocaleString();
}

function getInitials(name) {
  return (
    String(name || "D")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "D"
  );
}

function groupOwnedItems(user, type) {
  return COSMETICS.ALL_ITEMS.filter((item) => item.type === type && COSMETICS.isOwned(user, item));
}

function bindProfilePage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "sign-in.html";
    return;
  }

  let users = getStoredJson(USERS_KEY).map(normalizeUser);
  const clubs = getStoredJson(CLUBS_KEY);
  const fullUser = users.find((user) => user.email.toLowerCase() === currentUser.email.toLowerCase());

  if (!fullUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const profileHeading = document.getElementById("profileHeading");
  const profileCoinCount = document.getElementById("profileCoinCount");
  const coinsValue = document.getElementById("coinsValue");
  const bannerPreview = document.getElementById("profileBannerPreview");
  const namePreview = document.getElementById("profileNamePreview");
  const whalePreview = document.getElementById("profileWhalePreview");
  const pictureFrame = document.getElementById("profilePictureFrame");
  const picturePreview = document.getElementById("profilePicturePreview");
  const initialsPreview = document.getElementById("profileInitialsPreview");
  const pictureInput = document.getElementById("profilePictureInput");
  const customizerGrid = document.getElementById("customizerGrid");
  const friendSearch = document.getElementById("friendSearch");
  const friendResults = document.getElementById("friendResults");
  const friendList = document.getElementById("friendList");

  function persistUsers() {
    users = users.map((user) => (user.email.toLowerCase() === fullUser.email.toLowerCase() ? normalizeUser(fullUser) : normalizeUser(user)));
    saveUsers(users);
  }

  function updateStats() {
    profileHeading.textContent = `${fullUser.name}'s profile`;
    profileCoinCount.textContent = formatCoins(fullUser.coins);
    coinsValue.textContent = formatCoins(fullUser.coins);
    document.getElementById("testsTakenValue").textContent = String(fullUser.testsTaken);
    document.getElementById("roleplaysDoneValue").textContent = String(fullUser.roleplaysDone);
    document.getElementById("writtensGradedValue").textContent = String(fullUser.writtensGraded);
  }

  function applyProfileClasses() {
    bannerPreview.className = "profile-banner-preview profile-hero-card";
    pictureFrame.className = "profile-picture-frame";
    namePreview.className = "";

    if (fullUser.equippedBanner && fullUser.equippedBanner !== "banner-default") {
      bannerPreview.classList.add(fullUser.equippedBanner);
    }

    if (fullUser.equippedProfileBorder && fullUser.equippedProfileBorder !== "border-default") {
      pictureFrame.classList.add(fullUser.equippedProfileBorder);
    }

    if (fullUser.equippedNameEffect === "name-glow") {
      namePreview.classList.add("profile-name-glow");
    } else if (fullUser.equippedNameEffect === "name-sky") {
      namePreview.classList.add("profile-name-sky");
    }
  }

  function renderProfileHero() {
    applyProfileClasses();
    namePreview.textContent = fullUser.name;
    whalePreview.innerHTML = COSMETICS.renderWhale(fullUser);
    initialsPreview.textContent = getInitials(fullUser.name);

    if (fullUser.profileImageData) {
      picturePreview.src = fullUser.profileImageData;
      picturePreview.classList.remove("hidden");
      initialsPreview.classList.add("hidden");
    } else {
      picturePreview.removeAttribute("src");
      picturePreview.classList.add("hidden");
      initialsPreview.classList.remove("hidden");
    }
  }

  function renderCustomizerGroup(type, title) {
    const field = COSMETICS.getEquipField(type);
    const items = groupOwnedItems(fullUser, type);
    return `
      <article class="customizer-group">
        <p class="eyebrow">${COSMETICS.escapeHtml(title)}</p>
        <div class="customizer-options">
          ${items
            .map((item) => {
              const active = fullUser[field] === item.id;
              return `
                <button class="customizer-option ${active ? "active" : ""}" type="button" data-equip-id="${item.id}">
                  ${COSMETICS.escapeHtml(item.title)}
                </button>
              `;
            })
            .join("")}
        </div>
      </article>
    `;
  }

  function renderCustomizer() {
    customizerGrid.innerHTML = [
      renderCustomizerGroup("whalePrimary", "Primary Color"),
      renderCustomizerGroup("whaleSecondary", "Secondary Color"),
      renderCustomizerGroup("whaleAccessory", "Accessory"),
      renderCustomizerGroup("banner", "Profile Banner"),
      renderCustomizerGroup("profileBorder", "Profile Border"),
      renderCustomizerGroup("nameEffect", "Name Effect"),
    ].join("");
  }

  function renderFriends() {
    const friendEmails = new Set(fullUser.friends.map((email) => email.toLowerCase()));
    const friends = users.filter((user) => friendEmails.has(user.email.toLowerCase()));
    friendList.innerHTML = friends.length
      ? friends
          .map(
            (friend) => `
              <article class="friend-row">
                <span class="friend-avatar">${friend.profileImageData ? `<img src="${friend.profileImageData}" alt="" />` : COSMETICS.renderWhale(friend)}</span>
                <span>
                  <strong>${COSMETICS.escapeHtml(friend.name)}</strong>
                  <small>${COSMETICS.escapeHtml(friend.email)}</small>
                </span>
              </article>
            `
          )
          .join("")
      : '<p class="empty-state">No friends added yet.</p>';
  }

  function renderFriendResults(query = "") {
    const search = query.trim().toLowerCase();
    if (!search) {
      friendResults.innerHTML = "";
      return;
    }

    const friendEmails = new Set(fullUser.friends.map((email) => email.toLowerCase()));
    const matches = users
      .filter((user) => user.email.toLowerCase() !== fullUser.email.toLowerCase())
      .filter((user) => !friendEmails.has(user.email.toLowerCase()))
      .filter((user) => `${user.name} ${user.email}`.toLowerCase().includes(search))
      .slice(0, 5);

    friendResults.innerHTML = matches.length
      ? matches
          .map(
            (user) => `
              <article class="friend-row">
                <span class="friend-avatar">${user.profileImageData ? `<img src="${user.profileImageData}" alt="" />` : COSMETICS.renderWhale(user)}</span>
                <span>
                  <strong>${COSMETICS.escapeHtml(user.name)}</strong>
                  <small>${COSMETICS.escapeHtml(user.email)}</small>
                </span>
                <button class="button secondary" type="button" data-add-friend="${COSMETICS.escapeHtml(user.email)}">Add</button>
              </article>
            `
          )
          .join("")
      : '<p class="empty-state">No matching users.</p>';
  }

  function renderClassPanels() {
    const studentPanel = document.getElementById("studentPanel");
    const advisorPanel = document.getElementById("advisorPanel");

    if (fullUser.role === "student") {
      const club = clubs.find((entry) => entry.code === fullUser.code);
      const classLabel = club
        ? club.name || `${club.plan === "small" ? "Small Club" : "Big Club"} class`
        : "Class assigned";
      document.getElementById("studentClassText").textContent = classLabel;
      advisorPanel.classList.add("hidden");
      studentPanel.classList.remove("hidden");
    } else if (fullUser.role === "advisor") {
      studentPanel.classList.add("hidden");
      advisorPanel.classList.remove("hidden");

      const club = clubs.find((entry) => entry.code === fullUser.code);
      const students = users
        .filter((user) => user.role === "student" && user.code === fullUser.code)
        .sort((left, right) => left.name.localeCompare(right.name));

      const seatLimit = club?.seatLimit || students.length;
      document.querySelector("#advisorPanel h3").textContent = club?.name || "Your class roster";
      document.getElementById("advisorSeatsText").textContent = `${students.length} of ${seatLimit} slots filled.`;

      const listNode = document.getElementById("studentList");
      const searchNode = document.getElementById("studentSearch");

      function renderStudents(query = "") {
        const filtered = students.filter((student) =>
          student.name.toLowerCase().includes(query.trim().toLowerCase())
        );

        if (filtered.length === 0) {
          listNode.innerHTML = '<p class="empty-state">No students match that search.</p>';
          return;
        }

        listNode.innerHTML = filtered
          .map(
            (student) => `
              <article class="student-row">
                <strong>${COSMETICS.escapeHtml(student.name)}</strong>
                <span>${COSMETICS.escapeHtml(student.email)}</span>
              </article>
            `
          )
          .join("");
      }

      renderStudents();
      searchNode.addEventListener("input", (event) => renderStudents(event.target.value));
    } else {
      advisorPanel.classList.add("hidden");
      studentPanel.classList.remove("hidden");
      document.getElementById("studentClassText").textContent = "Independent member account.";
    }
  }

  function renderAll() {
    updateStats();
    renderProfileHero();
    renderCustomizer();
    renderFriends();
    renderFriendResults(friendSearch.value);
    persistUsers();
  }

  customizerGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-equip-id]");
    if (!button) {
      return;
    }

    const item = COSMETICS.getItem(button.dataset.equipId);
    if (!item || !COSMETICS.isOwned(fullUser, item)) {
      return;
    }

    COSMETICS.equipItem(fullUser, item);
    renderAll();
  });

  pictureInput.addEventListener("change", () => {
    const file = pictureInput.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      fullUser.profileImageData = String(reader.result || "");
      renderAll();
    });
    reader.readAsDataURL(file);
  });

  friendSearch.addEventListener("input", (event) => renderFriendResults(event.target.value));

  friendResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-friend]");
    if (!button) {
      return;
    }

    const friendEmail = button.dataset.addFriend;
    const friend = users.find((user) => user.email.toLowerCase() === friendEmail.toLowerCase());
    if (!friend) {
      return;
    }

    fullUser.friends = [...new Set([...fullUser.friends, friend.email])];
    friend.friends = [...new Set([...(friend.friends || []), fullUser.email])];
    persistUsers();
    renderFriends();
    renderFriendResults(friendSearch.value);
  });

  renderClassPanels();
  renderAll();

  document.getElementById("profileSignOutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

bindProfilePage();
