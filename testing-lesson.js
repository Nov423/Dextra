const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";
const CHECKPOINT_INTERVAL = 5;
const MOTIVATION_CHECKPOINTS = new Set([5, 15]);
const SHOP_CHECKPOINT = 10;

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

function applyCoinReward(user, correctCount) {
  const reward = Array.from({ length: correctCount }, getCoinReward).reduce(
    (total, amount) => total + amount,
    0
  );
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
    rewardedCheckpoints: {},
  };
  user.testingProgress[categoryId].completedLessons ||= [];
  user.testingProgress[categoryId].termPerformance ||= {};
  user.testingProgress[categoryId].rewardedCheckpoints ||= {};
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

function getRewardedCheckpoints(progress, lessonId) {
  progress.rewardedCheckpoints ||= {};
  progress.rewardedCheckpoints[lessonId] ||= [];
  return progress.rewardedCheckpoints[lessonId];
}

function awardCheckpointCoins(user, progress, lessonId, checkpointNumber, correctCount, canEarnCoins) {
  const rewardedCheckpoints = getRewardedCheckpoints(progress, lessonId);
  const alreadyRewarded = rewardedCheckpoints.includes(checkpointNumber);

  if (!canEarnCoins || alreadyRewarded) {
    return {
      reward: 0,
      message: alreadyRewarded || !canEarnCoins ? "Redo run: no extra coins for this checkpoint." : "",
    };
  }

  rewardedCheckpoints.push(checkpointNumber);

  if (!correctCount) {
    return {
      reward: 0,
      message: "Checkpoint reached. No coins this time.",
    };
  }

  const reward = applyCoinReward(user, correctCount);
  return {
    reward,
    message: `Checkpoint: ${correctCount} correct in this set, +${reward} coins.`,
  };
}

function createLessonPopup({ title, message, variant = "motivation", body = "" }) {
  document.querySelectorAll(".lesson-popup").forEach((popup) => popup.remove());

  const wrapper = document.createElement("div");
  wrapper.className = `lesson-popup lesson-popup-${variant}`;
  wrapper.innerHTML = `
    <div class="lesson-popup-backdrop" data-popup-close="true"></div>
    <section class="lesson-popup-card panel" role="dialog" aria-modal="true">
      <button class="feedback-close" type="button" aria-label="Close popup" data-popup-close="true">×</button>
      <div class="motivation-image" aria-hidden="true">
        <span class="motivation-face"></span>
        <strong>You got this!</strong>
      </div>
      <div class="lesson-popup-copy">
        <p class="eyebrow">${escapeHtml(variant === "shop" ? "Checkpoint Shop" : "Keep Going")}</p>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(message)}</p>
      </div>
      ${body}
    </section>
  `;

  wrapper.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.popupClose === "true") {
      wrapper.remove();
    }
  });

  document.body.appendChild(wrapper);
  return wrapper;
}

function renderLessonShop(user, persist) {
  const owned = new Set(user.ownedClothing || []);
  return `
    <div class="lesson-shop-list">
      ${LESSON_SHOP_ITEMS.map((item) => {
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
      }).join("")}
    </div>
  `;
}

function bindLessonShop(popup, user, persist, updateCoins) {
  popup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-clothing-id]");
    if (!button || button.disabled) {
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

    const shopList = popup.querySelector(".lesson-shop-list");
    if (shopList) {
      shopList.outerHTML = renderLessonShop(user, persist);
    }
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
  getRewardedCheckpoints(progress, lesson.virtualId);

  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  let activeQuestions = questions;
  let isRerunMode = false;
  let rerunRound = 0;
  let checkpointCorrectCount = 0;
  let missedQuestions = [];

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

  function showCheckpointPopup(checkpointNumber, rewardResult) {
    const rewardLine = rewardResult.message ? `${rewardResult.message} ` : "";

    if (MOTIVATION_CHECKPOINTS.has(checkpointNumber)) {
      createLessonPopup({
        title: "You got this!",
        message: `${rewardLine}Keep going and clean up anything you miss at the end.`,
        variant: "motivation",
      });
      return;
    }

    if (checkpointNumber === SHOP_CHECKPOINT) {
      const popup = createLessonPopup({
        title: "Checkpoint shop",
        message: `${rewardLine}Use your coins on clothing items, or save them for later.`,
        variant: "shop",
        body: renderLessonShop(user, persistLessonUser),
      });
      bindLessonShop(popup, user, persistLessonUser, updateLessonCoinDisplay);
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
    window.location.href = `testing-roadmap.html?category=${category.id}`;
  }

  function goToNextQuestion() {
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

  function renderQuestion() {
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

    choiceGrid.innerHTML = question.choices
      .map(
        (choice, index) => `
          <button class="choice-card" type="button" data-choice="${index}">
            ${choice}
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
        let checkpointMessage = "";

        if (correct) {
          playCorrectSound();
          updateCorrectStreak(user);
          if (isRerunMode) {
            missedQuestions = missedQuestions.filter((item) => getQuestionKey(item) !== questionKey);
            modeLabel.textContent = missedQuestions.length
              ? `Rerun of a missed question • ${missedQuestions.length} left`
              : "All missed questions corrected";
          }
        } else {
          user.currentStreak = 0;
          if (!isRerunMode && !missedQuestions.some((item) => getQuestionKey(item) === questionKey)) {
            missedQuestions.push(question);
          }
        }

        if (!isRerunMode) {
          checkpointCorrectCount += correct ? 1 : 0;
          const checkpointNumber = currentQuestionIndex + 1;

          if (checkpointNumber % CHECKPOINT_INTERVAL === 0) {
            const rewardResult = awardCheckpointCoins(
              user,
              progress,
              lesson.virtualId,
              checkpointNumber,
              checkpointCorrectCount,
              canEarnCoins
            );
            checkpointCorrectCount = 0;
            checkpointMessage = rewardResult.message ? ` ${rewardResult.message}` : "";
            showCheckpointPopup(checkpointNumber, rewardResult);
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

        feedbackNode.textContent = `${getAnswerFeedback(question, selectedAnswer)}${checkpointMessage}`;
        setNextButtonText();
        nextButton.disabled = false;
      });
    });
  }

  nextButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
      return;
    }

    goToNextQuestion();
  });

  document.getElementById("lessonSignOutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });

  renderQuestion();
}

bindLesson();
