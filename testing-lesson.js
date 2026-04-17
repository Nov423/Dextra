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

function buildQuestionSet(baseLesson, progress) {
  const sourceQuestions = [];
  while (sourceQuestions.length < 20) {
    sourceQuestions.push(...baseLesson.questions);
  }

  return sourceQuestions
    .map((question, index) => ({
      ...structuredClone(question),
      weight: scoreForTerm(progress, question.focusTerm) + (20 - index),
    }))
    .sort((left, right) => right.weight - left.weight)
    .slice(0, 20);
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
  const questions = buildQuestionSet(baseLesson, progress);

  let currentQuestionIndex = 0;
  let selectedAnswer = null;

  const promptNode = document.getElementById("questionPrompt");
  const choiceGrid = document.getElementById("choiceGrid");
  const feedbackNode = document.getElementById("lessonFeedback");
  const nextButton = document.getElementById("nextQuestionButton");
  const progressLabel = document.getElementById("lessonProgressLabel");
  const progressFill = document.getElementById("lessonProgressFill");

  document.getElementById("lessonCategoryCode").textContent = category.code;
  document.getElementById("lessonTitle").textContent = lesson.virtualTitle;
  document.getElementById("lessonMeta").textContent = `${chapter.title} • 20 adaptive questions`;
  document.getElementById("termIntro").innerHTML = lesson.terms
    .map(
      (item) => `
        <article class="term-chip">
          <strong>${item.term}</strong>
          <span>${item.definition}</span>
        </article>
      `
    )
    .join("");

  function renderQuestion() {
    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    promptNode.textContent = question.prompt;
    feedbackNode.textContent = "";
    progressLabel.textContent = `Question ${currentQuestionIndex + 1} of 20`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / 20) * 100}%`;
    nextButton.textContent = currentQuestionIndex === 19 ? "Finish Lesson" : "Next Question";
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
        updateTermPerformance(progress, question.focusTerm, correct);
        persistUser(user);

        choiceGrid.querySelectorAll("[data-choice]").forEach((choiceButton) => {
          const index = Number(choiceButton.dataset.choice);
          choiceButton.classList.add("locked");
          if (index === question.answer) {
            choiceButton.classList.add("correct");
          } else if (index === selectedAnswer) {
            choiceButton.classList.add("incorrect");
          }
        });

        feedbackNode.textContent = correct
          ? `Correct. ${question.focusTerm} is a term to keep building on.`
          : `Not quite. Review ${question.focusTerm} and its meaning before the next question.`;
        nextButton.disabled = false;
      });
    });
  }

  nextButton.addEventListener("click", () => {
    if (selectedAnswer === null) {
      return;
    }

    if (currentQuestionIndex === 19) {
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
