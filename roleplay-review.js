const USERS_KEY = "dextraUsers";
const SESSION_KEY = "dextraCurrentUser";
const ADMIN_EMAILS = new Set(["123@gmail.com"]);
const ADMIN_FIXED_STATS = {
  testsTaken: 67,
  roleplaysDone: 42,
  writtensGraded: 4,
};

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

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function isAdminUser(user) {
  return user?.role === "admin" || ADMIN_EMAILS.has(String(user?.email || "").toLowerCase());
}

function applyAdminFixedStats(user) {
  if (isAdminUser(user)) {
    Object.assign(user, ADMIN_FIXED_STATS);
  }
  return user;
}

function normalizeRecentRoleplays(user) {
  return Array.isArray(user.recentRoleplays) ? user.recentRoleplays : [];
}

function bindRoleplayReviewPage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("event");
  const eventConfig = DEXTRA_LEARNING_DATA.roleplays.find((entry) => entry.id === eventId);

  if (!eventConfig) {
    window.location.href = "index.html#roleplays";
    return;
  }

  const title = document.getElementById("roleplayReviewTitle");
  const copy = document.getElementById("roleplayReviewCopy");
  const eyebrow = document.getElementById("roleplayActionEyebrow");
  const actionTitle = document.getElementById("roleplayActionTitle");
  const actionCopy = document.getElementById("roleplayActionCopy");
  const dropzone = document.getElementById("roleplayDropzone");
  const dropzoneLabel = document.getElementById("roleplayDropzoneLabel");
  const fileMeta = document.getElementById("roleplayFileMeta");
  const fileInput = document.getElementById("roleplayFileInput");
  const gradeButton = document.getElementById("roleplayGradeButton");
  const status = document.getElementById("roleplayReviewStatus");
  const signOutButton = document.getElementById("roleplaySignOutButton");

  let selectedFile = null;

  title.textContent = `${eventConfig.name} Review`;
  copy.textContent = eventConfig.summary;
  eyebrow.textContent = eventConfig.title;
  actionTitle.textContent = `Grade ${eventConfig.title}`;
  actionCopy.textContent = `Upload your ${eventConfig.name.toLowerCase()} file and run a grading pass for performance structure, event alignment, and judging quality.`;
  dropzoneLabel.textContent = `Drop your ${eventConfig.title} file here`;
  fileInput.setAttribute("accept", ".pdf,.doc,.docx,.txt,.rtf");

  function setFile(file) {
    selectedFile = file || null;
    fileMeta.textContent = selectedFile
      ? `${selectedFile.name} • ${Math.max(1, Math.round(selectedFile.size / 1024))} KB`
      : "No file selected";
    status.textContent = "";
  }

  dropzone.addEventListener("click", () => fileInput.click());

  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropzone.classList.add("drag-active");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("drag-active");
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("drag-active");
    setFile(event.dataTransfer?.files?.[0] || null);
  });

  fileInput.addEventListener("change", () => {
    setFile(fileInput.files?.[0] || null);
  });

  gradeButton.addEventListener("click", () => {
    if (!selectedFile) {
      status.textContent = "Upload a roleplay file first.";
      return;
    }

    const users = getUsers();
    const userIndex = users.findIndex(
      (user) => user.email.toLowerCase() === currentUser.email.toLowerCase()
    );

    if (userIndex !== -1) {
      if (isAdminUser(users[userIndex])) {
        applyAdminFixedStats(users[userIndex]);
      } else {
        users[userIndex].roleplaysDone = Number(users[userIndex].roleplaysDone || 0) + 1;
      }
      const recent = normalizeRecentRoleplays(users[userIndex]).filter((id) => id !== eventConfig.id);
      users[userIndex].recentRoleplays = [eventConfig.id, ...recent].slice(0, 6);
      saveUsers(users);
    }

    status.textContent = `${eventConfig.title} grading started for ${selectedFile.name}. Feedback is ready for the next step.`;
  });

  signOutButton.addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

bindRoleplayReviewPage();
