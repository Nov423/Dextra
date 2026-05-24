const USERS_KEY = "dextraUsers";
const CLUBS_KEY = "dextraClubs";
const SESSION_KEY = "dextraCurrentUser";

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
  return {
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
    ownedClothing: [],
    equippedClothing: "",
    ...user,
  };
}

function formatCoins(value) {
  return Math.max(0, Number(value) || 0).toLocaleString();
}

function bindProfilePage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const users = getStoredJson(USERS_KEY).map(normalizeUser);
  const clubs = getStoredJson(CLUBS_KEY);
  const fullUser = users.find((user) => user.email.toLowerCase() === currentUser.email.toLowerCase());

  if (!fullUser) {
    window.location.href = "sign-in.html";
    return;
  }

  document.getElementById("profileHeading").textContent = `${fullUser.name}'s profile`;
  document.getElementById("profileCoinCount").textContent = formatCoins(fullUser.coins);
  document.getElementById("coinsValue").textContent = formatCoins(fullUser.coins);
  document.getElementById("testsTakenValue").textContent = String(fullUser.testsTaken);
  document.getElementById("roleplaysDoneValue").textContent = String(fullUser.roleplaysDone);
  document.getElementById("writtensGradedValue").textContent = String(fullUser.writtensGraded);
  saveUsers(users);

  const bannerPreview = document.getElementById("profileBannerPreview");
  const namePreview = document.getElementById("profileNamePreview");
  bannerPreview.classList.remove("profile-banner-gold", "profile-banner-blue");
  namePreview.classList.remove("profile-name-glow", "profile-name-sky");
  namePreview.textContent = fullUser.name;

  if (fullUser.equippedBanner === "banner-gold") {
    bannerPreview.classList.add("profile-banner-gold");
  } else if (fullUser.equippedBanner === "banner-blue") {
    bannerPreview.classList.add("profile-banner-blue");
  }

  if (fullUser.equippedNameEffect === "name-glow") {
    namePreview.classList.add("profile-name-glow");
  } else if (fullUser.equippedNameEffect === "name-sky") {
    namePreview.classList.add("profile-name-sky");
  }

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
              <strong>${student.name}</strong>
              <span>${student.email}</span>
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

  document.getElementById("profileSignOutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

bindProfilePage();
