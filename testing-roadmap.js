const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";

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
  return user;
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
      const nextLesson =
        Array.from({ length: totalLessons }, (_, lessonIndex) => lessonIndex + 1).find(
          (lessonNumber) => !progress.completedLessons.includes(getVirtualLessonId(chapter, lessonNumber))
        ) || totalLessons;
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
              const isNext = lessonNumber === nextLesson && !done;
              return `<span class="micro-pill ${done ? "done" : ""} ${isNext ? "next" : ""}" aria-label="Lesson ${lessonNumber}${done ? " completed" : " incomplete"}">L${lessonNumber}</span>`;
            }).join("")}
          </div>
          <a class="button primary" href="testing-lesson.html?category=${category.id}&chapter=${chapter.id}&lesson=${nextLesson}&htmlv=20260521g">Start Lesson</a>
        </article>
      `;
    })
    .join("");

  signOut("roadmapSignOutButton");
}

bindRoadmap();
