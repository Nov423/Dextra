const SESSION_KEY = "dextraCurrentUser";
const USERS_KEY = "dextraUsers";

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

function applyCorrectReward(user) {
  const reward = getCoinReward();
  user.coins = Number(user.coins || 0) + reward;
  user.coinsEarned = Number(user.coinsEarned || 0) + reward;
  user.currentStreak = Number(user.currentStreak || 0) + 1;
  user.bestStreak = Math.max(Number(user.bestStreak || 0), user.currentStreak);
  return reward;
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
  };
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

function buildQuestionSet(baseLesson, progress, backupQuestions = []) {
  const uniqueQuestions = [];
  const seenPrompts = new Set();
  [...(baseLesson.questions || []), ...backupQuestions].forEach((question) => {
    const promptKey = question.prompt.trim().toLowerCase();
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
    .slice(0, 20);
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
    const rewardText = coinReward ? ` +${coinReward} coins.` : "";
    return `Correct: "${correctChoice}".${rewardText} ${explanation}`;
  }

  return `Not quite. You chose "${selectedChoice}". Correct: "${correctChoice}". ${explanation}`;
}

function persistUser(user) {
  const users = getJson(USERS_KEY);
  const index = users.findIndex((entry) => entry.email.toLowerCase() === user.email.toLowerCase());
  if (index >= 0) {
    users[index] = user;
    saveUsers(users);
  }
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
  const questions = buildQuestionSet(baseLesson, progress, backupQuestions);
  const questionTotal = questions.length;

  let currentQuestionIndex = 0;
  let selectedAnswer = null;

  const promptNode = document.getElementById("questionPrompt");
  const choiceGrid = document.getElementById("choiceGrid");
  const feedbackNode = document.getElementById("lessonFeedback");
  const nextButton = document.getElementById("nextQuestionButton");

  document.getElementById("lessonCategoryCode").textContent = category.code;
  document.getElementById("lessonTitle").textContent = lesson.virtualTitle;
  document.getElementById("lessonMeta").textContent = `${chapter.title} • ${questionTotal} adaptive questions`;

  function renderQuestion() {
    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    promptNode.textContent = question.prompt;
    feedbackNode.textContent = "";
    nextButton.textContent = currentQuestionIndex === questionTotal - 1 ? "Finish Lesson" : "Next Question";
    nextButton.disabled = true;

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
        const coinReward = correct ? applyCorrectReward(user) : 0;
        if (correct) {
          playCorrectSound();
        } else {
          user.currentStreak = 0;
        }
        updateTermPerformance(progress, question.focusTerm, correct);
        persistUser(user);
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

        feedbackNode.textContent = getAnswerFeedback(question, selectedAnswer, coinReward);
        nextButton.disabled = false;
      });
    });
  }

  nextButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
      return;
    }

    if (currentQuestionIndex === questionTotal - 1) {
      if (!progress.completedLessons.includes(lesson.virtualId)) {
        progress.completedLessons.push(lesson.virtualId);
        user.testsTaken = (user.testsTaken || 0) + 1;
      }
      progress.activeChapterId = lessonNumber >= 10 ? getNextChapterId(category, chapter.id) : chapter.id;
      user.testingProgress[category.id] = progress;
      persistUser(user);
      window.location.href = `testing-roadmap.html?category=${category.id}`;
      return;
    }

    currentQuestionIndex += 1;
    renderQuestion();
  });

  document.getElementById("lessonSignOutButton").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });

  renderQuestion();
}

bindLesson();
