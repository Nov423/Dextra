const USERS_KEY = "dextraUsers";
const CLUBS_KEY = "dextraClubs";
const CLUB_CONFIRMATION_KEY = "dextraClubConfirmation";
const SESSION_KEY = "dextraCurrentUser";
const ADMIN_EMAIL = "123@gmail.com";
const ADMIN_USERNAME = "admin";
const ADMIN_FIXED_STATS = {
  testsTaken: 67,
  roleplaysDone: 42,
  writtensGraded: 4,
};

const CODE_CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?";

const PLAN_CONFIG = {
  free: { label: "Free", unitPrice: 0 },
  single: { label: "Personal", unitPrice: 4.99 },
  small: { label: "Small Club", unitPrice: 3.99 },
  big: { label: "Big Club", unitPrice: 3.49 },
};

function readJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readJson(USERS_KEY);
}

function saveUsers(users) {
  writeJson(USERS_KEY, users);
}

function getClubs() {
  return readJson(CLUBS_KEY);
}

function saveClubs(clubs) {
  writeJson(CLUBS_KEY, clubs);
}

function setCurrentUser(user) {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      name: user.name,
      email: user.email,
      username: user.username,
      plan: user.plan,
      role: user.role,
    })
  );
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function saveClubConfirmation(payload) {
  localStorage.setItem(CLUB_CONFIRMATION_KEY, JSON.stringify(payload));
}

function getClubConfirmation() {
  try {
    return JSON.parse(localStorage.getItem(CLUB_CONFIRMATION_KEY) || "null");
  } catch {
    return null;
  }
}

function generateCode(existingClubs) {
  let code = "";

  do {
    code = Array.from({ length: 8 }, () => {
      const index = Math.floor(Math.random() * CODE_CHARSET.length);
      return CODE_CHARSET[index];
    }).join("");
  } while (existingClubs.some((club) => club.code === code));

  return code;
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function fallbackUsername(user) {
  if (String(user?.email || "").toLowerCase() === ADMIN_EMAIL) {
    return ADMIN_USERNAME;
  }

  const source = String(user?.email || user?.name || "dextra-user").split("@")[0];
  const cleaned = source.toLowerCase().replace(/[^a-z0-9._-]+/g, "").slice(0, 20);
  return cleaned || "dextra-user";
}

function userExists(email, users = getUsers()) {
  return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
}

function usernameExists(username, users = getUsers()) {
  const normalized = normalizeUsername(username);
  return users.some((user) => normalizeUsername(user.username || fallbackUsername(user)) === normalized);
}

function isValidUsername(username) {
  return /^[a-z0-9._-]{3,20}$/.test(normalizeUsername(username));
}

function findUserByLogin(login, users = getUsers()) {
  const normalizedLogin = normalizeUsername(login);
  return users.find((user) => {
    const email = String(user.email || "").toLowerCase();
    const username = normalizeUsername(user.username || fallbackUsername(user));
    return email === normalizedLogin || username === normalizedLogin;
  });
}

function isAdminUser(user) {
  return user?.role === "admin" || String(user?.email || "").toLowerCase() === ADMIN_EMAIL;
}

function applyAdminFixedStats(user) {
  if (isAdminUser(user)) {
    Object.assign(user, ADMIN_FIXED_STATS);
  }
  return user;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function markInvalid(input) {
  if (input) {
    input.classList.add("input-error");
  }
}

function clearInvalid(input) {
  if (input) {
    input.classList.remove("input-error");
  }
}

function bindValidationReset(inputs) {
  inputs.forEach((input) => {
    if (!input) {
      return;
    }

    input.addEventListener("input", () => clearInvalid(input));
  });
}

function bindPasswordToggles() {
  document.querySelectorAll("[data-toggle-password]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.togglePassword);
      if (!input) {
        return;
      }

      const nextType = input.type === "password" ? "text" : "password";
      input.type = nextType;
      const isVisible = nextType === "text";
      button.classList.toggle("active", isVisible);
      button.setAttribute("aria-pressed", String(isVisible));
      button.setAttribute("aria-label", isVisible ? "Hide password" : "Show password");
    });
  });
}

function createUserRecord(base) {
  return applyAdminFixedStats({
    testsTaken: 0,
    roleplaysDone: 0,
    writtensGraded: 0,
    coins: 0,
    coinsEarned: 0,
    currentStreak: 0,
    bestStreak: 0,
    ownedCosmetics: [],
    equippedBanner: "",
    equippedNameEffect: "",
    equippedWhalePrimary: "",
    equippedWhaleSecondary: "",
    equippedWhaleAccessory: "",
    equippedProfileBorder: "",
    profileImageData: "",
    profileMessage: "Ready for DECA practice.",
    friends: [],
    ownedClothing: [],
    equippedClothing: "",
    ...base,
  });
}

function bindSignUpPage() {
  const planCards = document.querySelectorAll(".plan-card");
  const signUpForm = document.getElementById("signUpForm");

  if (!signUpForm) {
    return;
  }

  const selectedPlanText = document.getElementById("selectedPlanText");
  const signUpStatus = document.getElementById("signUpStatus");
  const accountCountRow = document.getElementById("accountCountRow");
  const clubNameRow = document.getElementById("clubNameRow");
  const accountCountInput = document.getElementById("accountCount");
  const clubNameInput = document.getElementById("clubName");
  const priceSummary = document.getElementById("priceSummary");
  const signUpEmailInput = document.getElementById("signUpEmail");
  const signUpUsernameInput = document.getElementById("signUpUsername");
  const signUpPasswordInput = document.getElementById("signUpPassword");
  const signUpConfirmPasswordInput = document.getElementById("signUpConfirmPassword");

  bindValidationReset([
    signUpEmailInput,
    signUpUsernameInput,
    signUpPasswordInput,
    signUpConfirmPasswordInput,
  ]);

  let selectedPlan = "free";

  function updatePriceSummary() {
    let monthlyTotal = PLAN_CONFIG[selectedPlan].unitPrice;

    if (selectedPlan === "small" || selectedPlan === "big") {
      const count = Number(accountCountInput.value);
      monthlyTotal = Number.isFinite(count) && count > 0 ? count * PLAN_CONFIG[selectedPlan].unitPrice : 0;
    }

    priceSummary.textContent = `Current total: ${formatMoney(monthlyTotal)} / month`;
  }

  function updatePlan(plan) {
    selectedPlan = plan;
    planCards.forEach((card) => {
      card.classList.toggle("selected", card.dataset.plan === plan);
    });
    selectedPlanText.textContent = `Selected plan: ${PLAN_CONFIG[plan].label}.`;
    const needsSeatCount = plan === "small" || plan === "big";
    const needsClubName = plan === "small" || plan === "big";
    accountCountRow.classList.toggle("hidden", !needsSeatCount);
    clubNameRow.classList.toggle("hidden", !needsClubName);
    if (!needsSeatCount) {
      accountCountInput.value = "";
    }
    if (!needsClubName) {
      clubNameInput.value = "";
    }
    signUpStatus.textContent = "";
    updatePriceSummary();
  }

  planCards.forEach((card) => {
    card.addEventListener("click", () => updatePlan(card.dataset.plan));
  });

  accountCountInput.addEventListener("input", updatePriceSummary);

  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("signUpName").value.trim();
    const email = signUpEmailInput.value.trim();
    const username = normalizeUsername(signUpUsernameInput.value);
    const clubName = clubNameInput.value.trim();
    const password = signUpPasswordInput.value;
    const confirmPassword = signUpConfirmPasswordInput.value;
    const accountCount = Number(accountCountInput.value);

    clearInvalid(signUpEmailInput);
    clearInvalid(signUpUsernameInput);
    clearInvalid(signUpPasswordInput);
    clearInvalid(signUpConfirmPasswordInput);

    if (!name || !email || !username || !password || !confirmPassword) {
      if (!email) {
        markInvalid(signUpEmailInput);
      }
      if (!username) {
        markInvalid(signUpUsernameInput);
      }
      if (!password) {
        markInvalid(signUpPasswordInput);
      }
      if (!confirmPassword) {
        markInvalid(signUpConfirmPasswordInput);
      }
      signUpStatus.textContent = "Fill out every required field.";
      return;
    }

    if (!isValidUsername(username)) {
      markInvalid(signUpUsernameInput);
      signUpStatus.textContent = "Username must be 3 to 20 letters, numbers, dots, dashes, or underscores.";
      return;
    }

    if (!isValidEmail(email)) {
      markInvalid(signUpEmailInput);
      signUpStatus.textContent = "Enter a valid email address.";
      return;
    }

    if (password.length < 8) {
      markInvalid(signUpPasswordInput);
      signUpStatus.textContent = "Password must be at least 8 characters.";
      return;
    }

    if (password !== confirmPassword) {
      markInvalid(signUpPasswordInput);
      markInvalid(signUpConfirmPasswordInput);
      signUpStatus.textContent = "Passwords do not match.";
      return;
    }

    const users = getUsers();

    if (userExists(email, users)) {
      signUpStatus.textContent = "An account with that email already exists.";
      return;
    }

    if (usernameExists(username, users)) {
      markInvalid(signUpUsernameInput);
      signUpStatus.textContent = "That username is already taken.";
      return;
    }

    if (selectedPlan === "small") {
      if (!clubName) {
        signUpStatus.textContent = "Enter a club name for this advisor account.";
        return;
      }

      if (!Number.isInteger(accountCount) || accountCount < 10 || accountCount > 50) {
        signUpStatus.textContent = "Small club plans require 10 to 50 student accounts.";
        return;
      }

      const clubs = getClubs();
      const code = generateCode(clubs);
      const user = createUserRecord({ name, email, username, password, plan: "small", role: "advisor", code });
      clubs.push({
        code,
        name: clubName,
        plan: "small",
        advisorName: name,
        advisorEmail: email,
        seatLimit: accountCount,
        seatsUsed: 0,
      });
      saveClubs(clubs);
      users.push(user);
      saveUsers(users);
      setCurrentUser(user);
      saveClubConfirmation({
        plan: "small",
        clubName,
        code,
        seatLimit: accountCount,
        monthlyTotal: accountCount * PLAN_CONFIG.small.unitPrice,
      });
      window.location.href = "club-code.html";
      return;
    }

    if (selectedPlan === "big") {
      if (!clubName) {
        signUpStatus.textContent = "Enter a club name for this advisor account.";
        return;
      }

      if (!Number.isInteger(accountCount) || accountCount <= 50) {
        signUpStatus.textContent = "Big club plans require more than 50 student accounts.";
        return;
      }

      const clubs = getClubs();
      const code = generateCode(clubs);
      const user = createUserRecord({ name, email, username, password, plan: "big", role: "advisor", code });
      clubs.push({
        code,
        name: clubName,
        plan: "big",
        advisorName: name,
        advisorEmail: email,
        seatLimit: accountCount,
        seatsUsed: 0,
      });
      saveClubs(clubs);
      users.push(user);
      saveUsers(users);
      setCurrentUser(user);
      saveClubConfirmation({
        plan: "big",
        clubName,
        code,
        seatLimit: accountCount,
        monthlyTotal: accountCount * PLAN_CONFIG.big.unitPrice,
      });
      window.location.href = "club-code.html";
      return;
    }

    const user = createUserRecord({
      name,
      email,
      username,
      password,
      plan: selectedPlan,
      role: "member",
    });
    users.push(user);
    saveUsers(users);
    setCurrentUser(user);
    window.location.href = "index.html";
  });

  updatePlan("free");
}

function bindJoinClassPage() {
  const joinClassForm = document.getElementById("joinClassForm");

  if (!joinClassForm) {
    return;
  }

  const joinClassStatus = document.getElementById("joinClassStatus");
  const joinEmailInput = document.getElementById("joinEmail");
  const joinUsernameInput = document.getElementById("joinUsername");
  const joinPasswordInput = document.getElementById("joinPassword");
  const joinConfirmPasswordInput = document.getElementById("joinConfirmPassword");

  bindValidationReset([joinEmailInput, joinUsernameInput, joinPasswordInput, joinConfirmPasswordInput]);

  joinClassForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const code = document.getElementById("joinCode").value;
    const name = document.getElementById("joinName").value.trim();
    const email = joinEmailInput.value.trim();
    const username = normalizeUsername(joinUsernameInput.value);
    const password = joinPasswordInput.value;
    const confirmPassword = joinConfirmPasswordInput.value;

    clearInvalid(joinEmailInput);
    clearInvalid(joinUsernameInput);
    clearInvalid(joinPasswordInput);
    clearInvalid(joinConfirmPasswordInput);

    if (code.length !== 8) {
      joinClassStatus.textContent = "Enter a valid 8 character code.";
      return;
    }

    if (!name || !email || !username || !password || !confirmPassword) {
      if (!email) {
        markInvalid(joinEmailInput);
      }
      if (!username) {
        markInvalid(joinUsernameInput);
      }
      if (!password) {
        markInvalid(joinPasswordInput);
      }
      if (!confirmPassword) {
        markInvalid(joinConfirmPasswordInput);
      }
      joinClassStatus.textContent = "Fill out every required field.";
      return;
    }

    if (!isValidUsername(username)) {
      markInvalid(joinUsernameInput);
      joinClassStatus.textContent = "Username must be 3 to 20 letters, numbers, dots, dashes, or underscores.";
      return;
    }

    if (!isValidEmail(email)) {
      markInvalid(joinEmailInput);
      joinClassStatus.textContent = "Enter a valid email address.";
      return;
    }

    if (password.length < 8) {
      markInvalid(joinPasswordInput);
      joinClassStatus.textContent = "Password must be at least 8 characters.";
      return;
    }

    if (password !== confirmPassword) {
      markInvalid(joinPasswordInput);
      markInvalid(joinConfirmPasswordInput);
      joinClassStatus.textContent = "Passwords do not match.";
      return;
    }

    const users = getUsers();

    if (userExists(email, users)) {
      joinClassStatus.textContent = "An account with that email already exists.";
      return;
    }

    if (usernameExists(username, users)) {
      markInvalid(joinUsernameInput);
      joinClassStatus.textContent = "That username is already taken.";
      return;
    }

    const clubs = getClubs();
    const club = clubs.find((entry) => entry.code === code);

    if (!club) {
      joinClassStatus.textContent = "That code was not found. Codes are case-sensitive.";
      return;
    }

    if (club.seatsUsed >= club.seatLimit) {
      joinClassStatus.textContent = "This class is already full.";
      return;
    }

    const user = createUserRecord({
      name,
      email,
      username,
      password,
      plan: club.plan,
      role: "student",
      code,
    });
    users.push(user);
    saveUsers(users);

    club.seatsUsed += 1;
    saveClubs(clubs);
    setCurrentUser(user);
    window.location.href = "index.html";
  });
}

function bindSignInPage() {
  const signInForm = document.getElementById("signInForm");

  if (!signInForm) {
    return;
  }

  const signInStatus = document.getElementById("signInStatus");
  const signInLoginInput = document.getElementById("signInEmail");
  const signInPasswordInput = document.getElementById("signInPassword");

  bindValidationReset([signInLoginInput, signInPasswordInput]);

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const login = signInLoginInput.value.trim();
    const password = signInPasswordInput.value;

    clearInvalid(signInLoginInput);
    clearInvalid(signInPasswordInput);

    if (!login || !password) {
      if (!login) {
        markInvalid(signInLoginInput);
      }
      if (!password) {
        markInvalid(signInPasswordInput);
      }
      signInStatus.textContent = "Fill out every required field.";
      return;
    }

    const users = getUsers();
    const user = findUserByLogin(login, users);

    if (!user || user.password !== password) {
      markInvalid(signInLoginInput);
      markInvalid(signInPasswordInput);
      signInStatus.textContent = "Invalid email, username, or password.";
      return;
    }

    if (isAdminUser(user)) {
      applyAdminFixedStats(user);
      saveUsers(users);
    }

    setCurrentUser(user);
    window.location.href = "index.html";
  });
}

function bindClubCodePage() {
  const codeNode = document.getElementById("confirmationCode");

  if (!codeNode) {
    return;
  }

  const data = getClubConfirmation();
  const planNode = document.getElementById("confirmationPlan");
  const titleNode = document.getElementById("confirmationTitle");
  const summaryNode = document.getElementById("confirmationSummary");
  const seatsNode = document.getElementById("confirmationSeats");
  const priceNode = document.getElementById("confirmationPrice");

  if (!data) {
    titleNode.textContent = "No recent club purchase found";
    summaryNode.textContent = "Create a small or big club plan to generate a code.";
    codeNode.textContent = "--------";
    seatsNode.textContent = "Seats: 0";
    priceNode.textContent = "Monthly total: $0.00";
    return;
  }

  const label = PLAN_CONFIG[data.plan]?.label || "Club";
  planNode.textContent = `${label} Plan`;
  titleNode.textContent = `${label} account created`;
  summaryNode.textContent = "Share this exact 8 character code with students. It is case-sensitive.";
  codeNode.textContent = data.code;
  seatsNode.textContent = `Seats purchased: ${data.seatLimit}`;
  priceNode.textContent = `Monthly total: ${formatMoney(data.monthlyTotal)} / month`;
}

bindPasswordToggles();
bindSignUpPage();
bindJoinClassPage();
bindSignInPage();
bindClubCodePage();
