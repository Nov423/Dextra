const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";
const CHECKPOINT_INTERVAL = 5;
const MOTIVATION_CHECKPOINTS = new Set([5, 15]);
const SHOP_CHECKPOINT = 10;
const SHOP_PURCHASE_LIMIT = 3;
const ADMIN_EMAILS = new Set(["123@gmail.com"]);
const WHEEL_REWARDS = [
  { label: "10 coins", coins: 10, weight: 60 },
  { label: "30 coins", coins: 30, weight: 20 },
  { label: "50 coins", coins: 50, weight: 10 },
  { label: "100 coins", coins: 100, weight: 9 },
  { label: "500 coins", coins: 500, weight: 1 },
];

const MOTIVATION_IMAGES = [
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/002/050/856/b27.jpg",
    alt: "You got this motivational meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/002/261/943/fa6.jpg",
    alt: "You got this supportive meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/001/944/925/044.jpg",
    alt: "Breathe, you got this motivational meme",
  },
  {
    url: "https://i.imgflip.com/7zg3x2.jpg",
    alt: "Success kid you got this good luck meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/001/537/170/71e.jpg",
    alt: "You can do it motivational meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/001/921/898/c99.png",
    alt: "Believe in yourself motivational meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/002/193/854/3a1.jpg",
    alt: "Keep going motivational meme",
  },
  {
    url: "https://i.kym-cdn.com/photos/images/newsfeed/002/861/083/cb8.png",
    alt: "I believe you can do it motivational meme",
  },
];

const LESSON_SHOP_ITEMS = [
  {
    id: "clothing-hoodie",
    title: "Practice Hoodie",
    description: "A clean hoodie for your profile closet.",
    cost: 30,
  },
  {
    id: "clothing-blazer",
    title: "Gold Blazer",
    description: "A competition-ready profile jacket.",
    cost: 45,
  },
  {
    id: "clothing-cap",
    title: "Dextra Cap",
    description: "A simple cap for checkpoint rewards.",
    cost: 20,
  },
  {
    id: "clothing-sneakers",
    title: "Lucky Sneakers",
    description: "Bright shoes for sprinting through review sets.",
    cost: 35,
  },
  {
    id: "clothing-tie",
    title: "Pitch Tie",
    description: "A sharp tie for roleplay confidence.",
    cost: 25,
  },
  {
    id: "clothing-backpack",
    title: "Prep Backpack",
    description: "A packed bag for long practice days.",
    cost: 40,
  },
  {
    id: "clothing-sunglasses",
    title: "Focus Shades",
    description: "A calm look for high-pressure questions.",
    cost: 50,
  },
  {
    id: "clothing-watch",
    title: "Timer Watch",
    description: "A polished watch for keeping pace.",
    cost: 60,
  },
];

function getJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function saveUsers(users) {
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

function formatCoins(value) {
  return Math.max(0, Number(value) || 0).toLocaleString();
}

function updateLessonCoinDisplay(user) {
  const coinCount = document.getElementById("lessonCoinCount");
  if (coinCount) {
    coinCount.textContent = formatCoins(user.coins);
  }
}

function getCoinReward() {
  return Math.floor(Math.random() * 6) + 5;
}

function getMakeupCoinReward() {
  return Math.floor(Math.random() * 5) + 3;
}

function getLocalDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function pickWheelReward() {
  const roll = Math.random() * 100;
  let total = 0;
  for (const reward of WHEEL_REWARDS) {
    total += reward.weight;
    if (roll < total) {
      return reward;
    }
  }
  return WHEEL_REWARDS[0];
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

function getMotivationImage() {
  return MOTIVATION_IMAGES[Math.floor(Math.random() * MOTIVATION_IMAGES.length)];
}

function playCorrectSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }

    const context = new AudioContext();
    const gain = context.createGain();
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.34);

    [660, 880].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime + index * 0.08);
      oscillator.connect(gain);
      oscillator.start(context.currentTime + index * 0.08);
      oscillator.stop(context.currentTime + 0.22 + index * 0.08);
    });

    window.setTimeout(() => context.close(), 500);
  } catch {
    // Sound is optional and should never block answering.
  }
}

function playCoinSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }

    const context = new AudioContext();
    const gain = context.createGain();
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.07, context.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.42);

    [980, 1240, 1560].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(frequency, context.currentTime + index * 0.055);
      oscillator.connect(gain);
      oscillator.start(context.currentTime + index * 0.055);
      oscillator.stop(context.currentTime + 0.16 + index * 0.055);
    });

    window.setTimeout(() => context.close(), 520);
  } catch {
    // Coin sounds are optional and should never interrupt the lesson.
  }
}

function applyCoinReward(user, reward) {
  user.coins = Number(user.coins || 0) + reward;
  user.coinsEarned = Number(user.coinsEarned || 0) + reward;
  return reward;
}

function updateCorrectStreak(user) {
  user.currentStreak = Number(user.currentStreak || 0) + 1;
  user.bestStreak = Math.max(Number(user.bestStreak || 0), user.currentStreak);
}

function getVirtualLesson(baseLesson, lessonNumber) {
  const clone = structuredClone(baseLesson);
  clone.virtualId = `${baseLesson.id}-v${lessonNumber}`;
  clone.virtualTitle = `Lesson ${lessonNumber}: ${baseLesson.title}`;
  return clone;
}

function getProgress(user, categoryId, firstChapterId) {
  user.testingProgress ||= {};
  user.testingProgress[categoryId] ||= {
    activeChapterId: firstChapterId,
    completedLessons: [],
    termPerformance: {},
    rewardedQuestions: {},
  };
  user.testingProgress[categoryId].completedLessons ||= [];
  user.testingProgress[categoryId].termPerformance ||= {};
  user.testingProgress[categoryId].rewardedQuestions ||= {};
  return user.testingProgress[categoryId];
}

function updateTermPerformance(progress, term, correct) {
  progress.termPerformance[term] ||= { seen: 0, wrong: 0 };
  progress.termPerformance[term].seen += 1;
  if (!correct) {
    progress.termPerformance[term].wrong += 1;
  }
}

function scoreForTerm(progress, term) {
  const stats = progress.termPerformance[term];
  return stats ? stats.wrong * 3 + stats.seen : 0;
}

function collectQuestionsFromLessons(lessons) {
  return lessons.flatMap((lesson) => lesson.questions || []);
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getQuestionKey(question) {
  return question.prompt.trim().toLowerCase();
}

function buildQuestionSet(baseLesson, progress, backupQuestions = []) {
  const uniqueQuestions = [];
  const seenPrompts = new Set();
  [...(baseLesson.questions || []), ...backupQuestions].forEach((question) => {
    const promptKey = getQuestionKey(question);
    if (!seenPrompts.has(promptKey)) {
      seenPrompts.add(promptKey);
      uniqueQuestions.push(question);
    }
  });

  const availableQuestions = uniqueQuestions.length ? uniqueQuestions : baseLesson.questions;
  const sourceQuestions = availableQuestions.slice(0, 20);

  return sourceQuestions
    .map((question, index) => ({
      ...structuredClone(question),
      weight: scoreForTerm(progress, question.focusTerm) + (20 - index),
    }))
    .sort((left, right) => right.weight - left.weight)
    .slice(0, 20)
    .map((question) => {
      const clone = structuredClone(question);
      delete clone.weight;
      return clone;
    });
}

function splitExplanationSentences(explanation) {
  return explanation
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"“])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function normalizeFeedbackText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function trimFeedback(text, maxLength = 280) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}...`;
}

function getConciseExplanation(question, selectedAnswer) {
  const correctChoice = question.choices[question.answer];
  const selectedChoice = question.choices[selectedAnswer];
  const correctChoiceKey = normalizeFeedbackText(correctChoice);
  const selectedChoiceKey = normalizeFeedbackText(selectedChoice);
  const sentences = splitExplanationSentences(
    question.explanation || "The answer key identifies the correct response for this item."
  ).filter((sentence) => normalizeFeedbackText(sentence) !== correctChoiceKey);
  const mainReason = sentences[0] || question.explanation || "The answer key identifies the correct response.";
  const selectedReason = sentences.find((sentence) =>
    normalizeFeedbackText(sentence).includes(selectedChoiceKey)
  );
  const parts = [mainReason];

  if (selectedAnswer !== question.answer && selectedReason && selectedReason !== mainReason) {
    parts.push(selectedReason);
  } else if (sentences[1] && `${mainReason} ${sentences[1]}`.length <= 240) {
    parts.push(sentences[1]);
  }

  return trimFeedback(parts.join(" "));
}

function getAnswerFeedback(question, selectedAnswer, coinReward = 0) {
  const selectedChoice = question.choices[selectedAnswer];
  const correctChoice = question.choices[question.answer];
  const explanation = getConciseExplanation(question, selectedAnswer);

  if (selectedAnswer === question.answer) {
    return `Correct: "${correctChoice}". ${explanation}`;
  }

  return `Not quite. You chose "${selectedChoice}". Correct: "${correctChoice}". ${explanation}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function persistUser(user) {
  const users = getJson(USERS_KEY);
  const index = users.findIndex((entry) => entry.email.toLowerCase() === user.email.toLowerCase());
  if (index >= 0) {
    users[index] = user;
    saveUsers(users);
  }
}

function getRewardedQuestions(progress, lessonId) {
  progress.rewardedQuestions ||= {};
  progress.rewardedQuestions[lessonId] ||= [];
  return progress.rewardedQuestions[lessonId];
}

function pickLessonShopOfferItems(user) {
  const owned = new Set(user.ownedClothing || []);
  return shuffleItems(LESSON_SHOP_ITEMS.filter((item) => !owned.has(item.id))).slice(0, SHOP_PURCHASE_LIMIT);
}

function animateCoinReward(amount, originNode) {
  const target = document.getElementById("lessonCoinPill") || document.getElementById("lessonCoinCount");
  if (!target || !originNode) {
    return;
  }

  const originRect = originNode.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const startX = originRect.left + originRect.width / 2;
  const startY = originRect.top + originRect.height / 2;
  const endX = targetRect.left + targetRect.width / 2;
  const endY = targetRect.top + targetRect.height / 2;
  const coinCount = Math.min(5, Math.max(3, Math.ceil(amount / 2)));

  for (let index = 0; index < coinCount; index += 1) {
    const coin = document.createElement("span");
    coin.className = "coin-burst";
    coin.style.left = `${startX}px`;
    coin.style.top = `${startY}px`;
    coin.style.setProperty("--coin-dx", `${endX - startX + (index - 2) * 10}px`);
    coin.style.setProperty("--coin-dy", `${endY - startY - Math.abs(index - 2) * 12}px`);
    coin.style.animationDelay = `${index * 45}ms`;
    document.body.appendChild(coin);
    window.setTimeout(() => coin.remove(), 1100);
  }
}

function renderLessonShopItem(user, item) {
  const owned = new Set(user.ownedClothing || []);
  const isOwned = owned.has(item.id);
  const isEquipped = user.equippedClothing === item.id;
  const canBuy = Number(user.coins || 0) >= item.cost;
  const label = isEquipped ? "Equipped" : isOwned ? "Equip" : canBuy ? "Buy" : `Need ${formatCoins(item.cost - user.coins)}`;
  return `
    <article class="lesson-shop-item ${item.id}">
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.description)}</span>
      </div>
      <button
        class="button ${isEquipped ? "secondary" : "primary"}"
        type="button"
        data-clothing-id="${item.id}"
        ${isEquipped || (!isOwned && !canBuy) ? "disabled" : ""}
      >
        ${label} • ${formatCoins(item.cost)}
      </button>
    </article>
  `;
}

function renderLessonShop(user, offerItems) {
  const owned = new Set(user.ownedClothing || []);
  const ownedItems = LESSON_SHOP_ITEMS.filter((item) => owned.has(item.id));
  const purchasableItems = offerItems.filter((item) => !owned.has(item.id));
  return `
    <div class="lesson-shop-list">
      ${
        ownedItems.length
          ? `
            <div class="lesson-shop-section">
              <p class="eyebrow">Owned</p>
              ${ownedItems.map((item) => renderLessonShopItem(user, item)).join("")}
            </div>
          `
          : ""
      }
      <div class="lesson-shop-section">
        <p class="eyebrow">Available</p>
        ${
          purchasableItems.length
            ? purchasableItems.map((item) => renderLessonShopItem(user, item)).join("")
            : `<p class="lesson-shop-empty">You already own everything in this shop.</p>`
        }
      </div>
    </div>
  `;
}

function bindLessonShop(container, user, persist, updateCoins, offerItems, onDone) {
  let shopResolved = false;

  container.addEventListener("click", (event) => {
    const skipButton = event.target.closest("[data-shop-skip]");
    if (skipButton) {
      shopResolved = true;
      onDone();
      return;
    }

    const button = event.target.closest("[data-clothing-id]");
    if (!button || button.disabled || shopResolved) {
      return;
    }

    const item = LESSON_SHOP_ITEMS.find((entry) => entry.id === button.dataset.clothingId);
    if (!item) {
      return;
    }

    user.ownedClothing = Array.isArray(user.ownedClothing) ? user.ownedClothing : [];
    const ownsItem = user.ownedClothing.includes(item.id);

    if (!ownsItem) {
      if (Number(user.coins || 0) < item.cost) {
        return;
      }
      user.coins = Math.max(0, Number(user.coins || 0) - item.cost);
      user.ownedClothing.push(item.id);
    }

    user.equippedClothing = item.id;
    persist();
    updateCoins(user);
    shopResolved = true;

    const shopList = container.querySelector(".lesson-shop-list");
    if (shopList) {
      shopList.outerHTML = renderLessonShop(user, offerItems);
    }
    container.querySelectorAll("[data-clothing-id], [data-shop-skip]").forEach((control) => {
      control.disabled = true;
    });
    window.setTimeout(onDone, 240);
  });
}

function getNextChapterId(category, chapterId) {
  const index = category.chapters.findIndex((entry) => entry.id === chapterId);
  if (index === -1 || index === category.chapters.length - 1) {
    return chapterId;
  }
  return category.chapters[index + 1].id;
}

function bindLesson() {
  const sessionUser = getCurrentUser();
  if (!sessionUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const users = getJson(USERS_KEY);
  const user = users.find((entry) => entry.email.toLowerCase() === sessionUser.email.toLowerCase());
  if (!user) {
    window.location.href = "sign-in.html";
    return;
  }
  normalizePracticeUser(user);
  updateLessonCoinDisplay(user);

  const url = new URL(window.location.href);
  const categoryId = url.searchParams.get("category");
  const chapterId = url.searchParams.get("chapter");
  const lessonNumber = Number(url.searchParams.get("lesson") || "1");
  const category = DEXTRA_LEARNING_DATA.testingCategories.find((entry) => entry.id === categoryId);
  const chapter = category?.chapters.find((entry) => entry.id === chapterId);

  if (!category || !chapter) {
    window.location.href = "index.html#testing";
    return;
  }

  const baseLesson = chapter.lessons[(lessonNumber - 1) % chapter.lessons.length];
  const lesson = getVirtualLesson(baseLesson, lessonNumber);
  const progress = getProgress(user, category.id, category.chapters[0]?.id || chapter.id);
  const backupQuestions = collectQuestionsFromLessons(category.chapters.flatMap((entry) => entry.lessons));
  const questions = shuffleItems(buildQuestionSet(baseLesson, progress, backupQuestions));
  const questionTotal = questions.length;
  const canEarnCoins = !progress.completedLessons.includes(lesson.virtualId);
  const rewardedQuestions = getRewardedQuestions(progress, lesson.virtualId);
  const firstMissedQuestionKeys = new Set();
  const adminMode = isAdminUser(user);

  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  let activeQuestions = questions;
  let isRerunMode = false;
  let rerunRound = 0;
  let missedQuestions = [];
  let currentScreen = "question";
  const checkpointScreens = [];

  const promptNode = document.getElementById("questionPrompt");
  const choiceGrid = document.getElementById("choiceGrid");
  const feedbackNode = document.getElementById("lessonFeedback");
  const nextButton = document.getElementById("nextQuestionButton");
  const modeLabel = document.getElementById("lessonModeLabel");

  document.getElementById("lessonCategoryCode").textContent = category.code;
  document.getElementById("lessonTitle").textContent = lesson.virtualTitle;
  document.getElementById("lessonMeta").textContent = `${chapter.title} • ${questionTotal} randomized questions${
    canEarnCoins ? "" : " • redo run, no coins"
  }`;

  function persistLessonUser() {
    user.testingProgress[category.id] = progress;
    persistUser(user);
  }

  function setNextButtonText() {
    if (!isRerunMode && currentQuestionIndex === questionTotal - 1) {
      nextButton.textContent = missedQuestions.length ? "Review Missed Questions" : "Finish Lesson";
      return;
    }

    if (isRerunMode && missedQuestions.length === 0) {
      nextButton.textContent = "Finish Lesson";
      return;
    }

    nextButton.textContent = "Next Question";
  }

  function queueCheckpointScreen(checkpointNumber) {
    if (MOTIVATION_CHECKPOINTS.has(checkpointNumber)) {
      checkpointScreens.push({
        checkpointNumber,
        type: "motivation",
        title: "You got this!",
        message: "Keep going and clean up anything you miss at the end.",
        image: getMotivationImage(),
      });
      return;
    }

    if (checkpointNumber === SHOP_CHECKPOINT) {
      checkpointScreens.push({
        checkpointNumber,
        type: "shop",
        title: "Checkpoint shop",
        message: "Use your coins on clothing items, or save them for later.",
      });
      return;
    }
  }

  function startRerunMode() {
    isRerunMode = true;
    rerunRound += 1;
    activeQuestions = shuffleItems(missedQuestions);
    currentQuestionIndex = 0;
    renderQuestion();
  }

  function finishLesson() {
    if (!progress.completedLessons.includes(lesson.virtualId)) {
      progress.completedLessons.push(lesson.virtualId);
      user.testsTaken = (user.testsTaken || 0) + 1;
    }
    progress.activeChapterId = lessonNumber >= 10 ? getNextChapterId(category, chapter.id) : chapter.id;
    persistLessonUser();
    if (user.lastDailyWheelDate !== getLocalDateKey()) {
      renderWheelScreen();
      return;
    }
    window.location.href = `testing-roadmap.html?category=${category.id}`;
  }

  function goToNextQuestion() {
    if (currentScreen === "wheel") {
      window.location.href = `testing-roadmap.html?category=${category.id}`;
      return;
    }

    if (currentScreen === "checkpoint") {
      currentScreen = "question";
      continueAfterQuestion();
      return;
    }

    if (checkpointScreens.length) {
      renderCheckpointScreen(checkpointScreens.shift());
      return;
    }

    continueAfterQuestion();
  }

  function leaveCheckpointScreen() {
    currentScreen = "question";
    continueAfterQuestion();
  }

  function continueAfterQuestion() {
    if (!isRerunMode) {
      if (currentQuestionIndex === questionTotal - 1) {
        if (missedQuestions.length) {
          startRerunMode();
        } else {
          finishLesson();
        }
        return;
      }

      currentQuestionIndex += 1;
      renderQuestion();
      return;
    }

    if (!missedQuestions.length) {
      finishLesson();
      return;
    }

    if (currentQuestionIndex < activeQuestions.length - 1) {
      currentQuestionIndex += 1;
      renderQuestion();
      return;
    }

    activeQuestions = shuffleItems(missedQuestions);
    currentQuestionIndex = 0;
    rerunRound += 1;
    renderQuestion();
  }

  function renderCheckpointScreen(screen) {
    currentScreen = "checkpoint";
    selectedAnswer = "checkpoint";
    modeLabel.textContent = `Checkpoint after question ${screen.checkpointNumber}`;
    modeLabel.classList.toggle("rerun-active", false);
    promptNode.textContent = screen.title;
    feedbackNode.textContent = "";
    const isMotivation = screen.type === "motivation";
    const isShop = screen.type === "shop";
    const shopOfferItems = isShop ? pickLessonShopOfferItems(user) : [];
    nextButton.textContent = isShop ? "Skip Shop" : "Continue";
    nextButton.disabled = false;

    choiceGrid.innerHTML = `
      <article class="lesson-checkpoint-card ${isShop ? "shop-checkpoint" : ""}">
        ${
          isMotivation
            ? `
              <div class="motivation-image">
                <img
                  class="motivation-photo"
                  src="${escapeHtml(screen.image.url)}"
                  alt="${escapeHtml(screen.image.alt)}"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
              </div>
            `
            : ""
        }
        <div class="lesson-checkpoint-copy">
          <p class="eyebrow">${escapeHtml(isShop ? "Checkpoint Shop" : "Checkpoint")}</p>
          <h3>${escapeHtml(screen.title)}</h3>
          <p>${escapeHtml(screen.message)}</p>
        </div>
        ${isShop ? renderLessonShop(user, shopOfferItems) : ""}
        ${isShop ? `<button class="button secondary shop-skip-button" type="button" data-shop-skip="true">Skip Shop</button>` : ""}
      </article>
    `;

    if (isShop) {
      bindLessonShop(choiceGrid, user, persistLessonUser, updateLessonCoinDisplay, shopOfferItems, leaveCheckpointScreen);
    }
  }

  function renderWheelScreen() {
    currentScreen = "wheel";
    selectedAnswer = "wheel";
    modeLabel.textContent = "Daily reward wheel";
    modeLabel.classList.toggle("rerun-active", false);
    promptNode.textContent = "Spin for today's lesson bonus";
    feedbackNode.textContent = "";
    nextButton.textContent = "Back to Roadmap";
    nextButton.disabled = true;
    choiceGrid.innerHTML = `
      <article class="lesson-checkpoint-card reward-wheel-card">
        <div class="reward-wheel" aria-hidden="true">
          ${WHEEL_REWARDS.map((reward) => `<span>${escapeHtml(reward.label)}</span>`).join("")}
        </div>
        <div class="lesson-checkpoint-copy">
          <p class="eyebrow">Daily Bonus</p>
          <h3>First lesson complete today</h3>
          <p>Spin once per day for extra coins.</p>
        </div>
        <button class="button primary wheel-spin-button" type="button" data-spin-wheel="true">Spin Wheel</button>
      </article>
    `;

    const spinButton = choiceGrid.querySelector("[data-spin-wheel]");
    const wheel = choiceGrid.querySelector(".reward-wheel");
    spinButton.addEventListener("click", () => {
      const reward = pickWheelReward();
      const turns = 5 + Math.floor(Math.random() * 2);
      const finalAngle = 360 * turns + Math.floor(Math.random() * 360);
      spinButton.disabled = true;
      wheel.style.setProperty("--wheel-rotation", `${finalAngle}deg`);
      wheel.classList.add("spinning");
      window.setTimeout(() => {
        applyCoinReward(user, reward.coins);
        user.lastDailyWheelDate = getLocalDateKey();
        persistLessonUser();
        updateLessonCoinDisplay(user);
        playCoinSound();
        animateCoinReward(reward.coins, spinButton);
        feedbackNode.textContent = `Daily wheel bonus: +${reward.coins} coins.`;
        nextButton.disabled = false;
      }, 900);
    });
  }

  function renderQuestion() {
    currentScreen = "question";
    const question = activeQuestions[currentQuestionIndex];
    selectedAnswer = null;
    promptNode.textContent = question.prompt;
    feedbackNode.textContent = "";
    setNextButtonText();
    nextButton.disabled = true;

    if (isRerunMode) {
      modeLabel.textContent = `Rerun of a missed question • ${missedQuestions.length} left`;
      modeLabel.classList.add("rerun-active");
    } else {
      modeLabel.textContent = `Question ${currentQuestionIndex + 1} of ${questionTotal}`;
      modeLabel.classList.remove("rerun-active");
    }

    const shuffledChoices = shuffleItems(question.choices.map((choice, index) => ({ choice, index })));

    choiceGrid.innerHTML = shuffledChoices
      .map(
        ({ choice, index }) => `
          <button class="choice-card" type="button" data-choice="${index}">
            ${escapeHtml(choice)}
          </button>
        `
      )
      .join("");

    choiceGrid.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        if (selectedAnswer !== null) {
          return;
        }

        selectedAnswer = Number(button.dataset.choice);
        const correct = selectedAnswer === question.answer;
        const questionKey = getQuestionKey(question);
        let rewardMessage = "";

        if (correct) {
          playCorrectSound();
          updateCorrectStreak(user);
          if (canEarnCoins && !rewardedQuestions.includes(questionKey)) {
            const reward = firstMissedQuestionKeys.has(questionKey) ? getMakeupCoinReward() : getCoinReward();
            rewardedQuestions.push(questionKey);
            applyCoinReward(user, reward);
            rewardMessage = ` +${reward} coins.`;
            playCoinSound();
            animateCoinReward(reward, button);
          }
          if (isRerunMode) {
            missedQuestions = missedQuestions.filter((item) => getQuestionKey(item) !== questionKey);
            modeLabel.textContent = missedQuestions.length
              ? `Rerun of a missed question • ${missedQuestions.length} left`
              : "All missed questions corrected";
          }
        } else {
          user.currentStreak = 0;
          firstMissedQuestionKeys.add(questionKey);
          if (!isRerunMode && !missedQuestions.some((item) => getQuestionKey(item) === questionKey)) {
            missedQuestions.push(question);
          }
        }

        if (!isRerunMode) {
          const checkpointNumber = currentQuestionIndex + 1;

          if (
            checkpointNumber % CHECKPOINT_INTERVAL === 0 &&
            (MOTIVATION_CHECKPOINTS.has(checkpointNumber) || checkpointNumber === SHOP_CHECKPOINT)
          ) {
            queueCheckpointScreen(checkpointNumber);
          }
        }

        updateTermPerformance(progress, question.focusTerm, correct);
        persistLessonUser();
        updateLessonCoinDisplay(user);

        choiceGrid.querySelectorAll("[data-choice]").forEach((choiceButton) => {
          const index = Number(choiceButton.dataset.choice);
          choiceButton.classList.add("locked");
          if (index === question.answer) {
            choiceButton.classList.add("correct");
          } else if (index === selectedAnswer) {
            choiceButton.classList.add("incorrect");
          }
        });

        feedbackNode.textContent = `${getAnswerFeedback(question, selectedAnswer)}${rewardMessage}`;
        setNextButtonText();
        nextButton.disabled = false;
      });
    });
  }

  nextButton.addEventListener("click", () => {
    if (currentScreen === "question" && selectedAnswer === null) {
      return;
    }

    goToNextQuestion();
  });

  document.addEventListener("keydown", (event) => {
    if (!adminMode || shouldIgnoreShortcut(event)) {
      return;
    }

    const key = event.key.toLowerCase();
    if (key === "c" && currentScreen === "question" && selectedAnswer === null) {
      const question = activeQuestions[currentQuestionIndex];
      const correctButton = Array.from(choiceGrid.querySelectorAll("[data-choice]")).find(
        (button) => Number(button.dataset.choice) === question.answer
      );
      correctButton?.click();
      return;
    }

    if (key === "x") {
      user.coins = 0;
      user.coinsEarned = 0;
      user.currentStreak = 0;
      user.bestStreak = 0;
      user.testingProgress = {};
      user.lastDailyWheelDate = "";
      persistUser(user);
      updateLessonCoinDisplay(user);
      window.location.href = `testing-roadmap.html?category=${category.id}`;
    }
  });

  document.getElementById("lessonSignOutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });

  renderQuestion();
}

bindLesson();
