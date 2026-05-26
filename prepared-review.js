const USERS_KEY = "dextraUsers";
const SESSION_KEY = "dextraCurrentUser";
const ADMIN_EMAILS = new Set(["123@gmail.com"]);
const ADMIN_FIXED_STATS = {
  testsTaken: 67,
  roleplaysDone: 42,
  writtensGraded: 4,
};

const PREPARED_TYPES = {
  "pitch-deck": {
    label: "Pitch Deck",
    description:
      "Upload a pitch deck for a formatting and structure review before presenting it.",
    accept: ".pdf,.ppt,.pptx,.key",
    fileLabel: "Drop your pitch deck here",
  },
  written: {
    label: "Written",
    description:
      "Upload a written event file for a formatting and structure review before submission.",
    accept: ".pdf,.doc,.docx",
    fileLabel: "Drop your written event here",
  },
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

function bindPreparedReviewPage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "sign-in.html";
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const config = PREPARED_TYPES[type] || PREPARED_TYPES.written;

  const title = document.getElementById("preparedReviewTitle");
  const copy = document.getElementById("preparedReviewCopy");
  const eyebrow = document.getElementById("preparedActionEyebrow");
  const actionTitle = document.getElementById("preparedActionTitle");
  const actionCopy = document.getElementById("preparedActionCopy");
  const dropzone = document.getElementById("preparedDropzone");
  const dropzoneLabel = document.getElementById("preparedDropzoneLabel");
  const fileMeta = document.getElementById("preparedFileMeta");
  const fileInput = document.getElementById("preparedFileInput");
  const checkButton = document.getElementById("preparedCheckButton");
  const status = document.getElementById("preparedReviewStatus");
  const signOutButton = document.getElementById("preparedSignOutButton");

  let selectedFile = null;

  title.textContent = `${config.label} Review`;
  copy.textContent = config.description;
  eyebrow.textContent = config.label;
  actionTitle.textContent = `Check ${config.label} for Errors`;
  actionCopy.textContent = `Upload your ${config.label.toLowerCase()} and run a review pass for likely formatting problems, missing pieces, and presentation issues.`;
  dropzoneLabel.textContent = config.fileLabel;
  fileInput.setAttribute("accept", config.accept);

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
    const file = event.dataTransfer?.files?.[0] || null;
    setFile(file);
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0] || null;
    setFile(file);
  });

  checkButton.addEventListener("click", () => {
    if (!selectedFile) {
      status.textContent = `Upload a ${config.label.toLowerCase()} file first.`;
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
        users[userIndex].writtensGraded = Number(users[userIndex].writtensGraded || 0) + 1;
      }
      saveUsers(users);
    }

    status.textContent = `${config.label} review started for ${selectedFile.name}. Issues summary ready for the next step.`;
  });

  signOutButton.addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

bindPreparedReviewPage();
