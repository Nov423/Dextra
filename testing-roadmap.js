const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";
const ADMIN_EMAILS = new Set(["123@gmail.com"]);

function getSessionUser() {
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

function updateUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function normalizePracticeUser(user) {
  user.coins = Math.max(0, Number(user.coins || 0));
  user.coinsEarned = Math.max(0, Number(user.coinsEarned || 0));
  user.currentStreak = Math.max(0, Number(user.currentStreak || 0));
  user.bestStreak = Math.max(Number(user.bestStreak || 0), Number(user.streak || 0));
  user.ownedCosmetics = Array.isArray(user.ownedCosmetics) ? user.ownedCosmetics : [];
  user.equippedBanner ||= "";
  user.equippedNameEffect ||= "";
  user.ownedClothing = Array.isArray(user.ownedClothing) ? user.ownedClothing : [];
  user.equippedClothing ||= "";
  user.lastDailyWheelDate ||= "";
  return user;
}

function isAdminUser(user) {
  return user?.role === "admin" || ADMIN_EMAILS.has(String(user?.email || "").toLowerCase());
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

function formatCoins(value) {
  return Math.max(0, Number(value) || 0).toLocaleString();
}

function updateRoadmapCoinDisplay(user) {
  const coinCount = document.getElementById("roadmapCoinCount");
  if (coinCount) {
    coinCount.textContent = formatCoins(user.coins);
  }
}

function getVirtualLessonId(chapter, lessonNumber) {
  const baseLesson = chapter.lessons[(lessonNumber - 1) % chapter.lessons.length];
  return `${baseLesson.id}-v${lessonNumber}`;
}

function getLessonHref(categoryId, chapterId, lessonNumber) {
  return `testing-lesson.html?category=${categoryId}&chapter=${chapterId}&lesson=${lessonNumber}&htmlv=20260523f`;
}

function getProgressMap(user) {
  return user.testingProgress || {};
}

function ensureProgress(user, category) {
  const progress = getProgressMap(user);
  if (!progress[category.id]) {
    progress[category.id] = {
      activeChapterId: category.chapters[0]?.id || null,
      completedLessons: [],
      termPerformance: {},
    };
  }
  user.testingProgress = progress;
  return progress[category.id];
}

function saveUser(user) {
  const users = getUsers();
  const index = users.findIndex((entry) => entry.email.toLowerCase() === user.email.toLowerCase());
  if (index >= 0) {
    users[index] = user;
    updateUsers(users);
  }
}

function signOut(buttonId) {
  document.getElementById(buttonId).addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

function bindRoadmap() {
  const sessionUser = getSessionUser();
  if (!sessionUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const url = new URL(window.location.href);
  const categoryId = url.searchParams.get("category");
  const category = DEXTRA_LEARNING_DATA.testingCategories.find((entry) => entry.id === categoryId);

  if (!category) {
    window.location.href = "index.html#testing";
    return;
  }

  const users = getUsers();
  const user = users.find((entry) => entry.email.toLowerCase() === sessionUser.email.toLowerCase());

  if (!user) {
    window.location.href = "sign-in.html";
    return;
  }
  normalizePracticeUser(user);
  updateRoadmapCoinDisplay(user);

  const progress = ensureProgress(user, category);
  saveUser(user);

  document.getElementById("roadmapCode").textContent = category.code;
  document.getElementById("roadmapTitle").textContent = `${category.title} roadmap`;
  document.getElementById("roadmapOverview").textContent = category.overview;

  document.getElementById("roadmapGrid").innerHTML = category.chapters
    .map((chapter, chapterIndex) => {
      const totalLessons = 10;
      const completedCount = Array.from({ length: totalLessons }, (_, lessonIndex) =>
        progress.completedLessons.includes(getVirtualLessonId(chapter, lessonIndex + 1))
      ).filter(Boolean).length;
      const isCurrent = progress.activeChapterId === chapter.id;
      const nextIncompleteLesson = Array.from({ length: totalLessons }, (_, lessonIndex) => lessonIndex + 1).find(
        (lessonNumber) => !progress.completedLessons.includes(getVirtualLessonId(chapter, lessonNumber))
      );
      const actionLesson = nextIncompleteLesson || 1;
      const actionLabel = nextIncompleteLesson ? "Start Lesson" : "Redo Lesson";
      return `
        <article class="panel roadmap-card ${isCurrent ? "current" : ""}">
          <p class="eyebrow">Chapter ${chapterIndex + 1}</p>
          <h3>${chapter.title}</h3>
          <p>${completedCount} of ${totalLessons} lessons completed</p>
          <div class="micro-lessons">
            ${Array.from({ length: 10 }, (_, lessonIndex) => {
              const lessonNumber = lessonIndex + 1;
              const virtualLessonId = getVirtualLessonId(chapter, lessonIndex + 1);
              const done = progress.completedLessons.includes(virtualLessonId);
              const isNext = lessonNumber === nextIncompleteLesson && !done;
              const selected = lessonNumber === actionLesson;
              return `<button class="micro-pill ${done ? "done" : ""} ${isNext ? "next" : ""} ${selected ? "selected" : ""}" type="button" data-lesson-number="${lessonNumber}" data-lesson-href="${getLessonHref(category.id, chapter.id, lessonNumber)}" data-lesson-done="${done}" aria-pressed="${selected}" aria-label="Select lesson ${lessonNumber}${done ? " completed, redo" : " incomplete"}">L${lessonNumber}</button>`;
            }).join("")}
          </div>
          <a class="button primary start-lesson-link" href="${getLessonHref(category.id, chapter.id, actionLesson)}">${actionLabel}</a>
        </article>
      `;
    })
    .join("");

  document.getElementById("roadmapGrid").addEventListener("click", (event) => {
    const lessonButton = event.target.closest("[data-lesson-href]");
    if (!lessonButton) {
      return;
    }

    const card = lessonButton.closest(".roadmap-card");
    const startLink = card?.querySelector(".start-lesson-link");
    if (!card || !startLink) {
      return;
    }

    card.querySelectorAll("[data-lesson-href]").forEach((button) => {
      const selected = button === lessonButton;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    startLink.href = lessonButton.dataset.lessonHref;
    startLink.textContent = lessonButton.dataset.lessonDone === "true" ? "Redo Lesson" : "Start Lesson";
  });

  document.addEventListener("keydown", (event) => {
    if (!isAdminUser(user) || shouldIgnoreShortcut(event) || event.key.toLowerCase() !== "x") {
      return;
    }

    user.coins = 0;
    user.coinsEarned = 0;
    user.currentStreak = 0;
    user.bestStreak = 0;
    user.testingProgress = {};
    user.lastDailyWheelDate = "";
    saveUser(user);
    window.location.reload();
  });

  signOut("roadmapSignOutButton");
}

bindRoadmap();
