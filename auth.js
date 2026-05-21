const USERS_KEY = "dextraUsers";
const CLUBS_KEY = "dextraClubs";
const CLUB_CONFIRMATION_KEY = "dextraClubConfirmation";
const SESSION_KEY = "dextraCurrentUser";

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

function userExists(email) {
  return getUsers().some((user) => user.email.toLowerCase() === email.toLowerCase());
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
  return {
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
    ...base,
  };
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
  const signUpPasswordInput = document.getElementById("signUpPassword");
  const signUpConfirmPasswordInput = document.getElementById("signUpConfirmPassword");

  bindValidationReset([
    signUpEmailInput,
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
    const clubName = clubNameInput.value.trim();
    const password = signUpPasswordInput.value;
    const confirmPassword = signUpConfirmPasswordInput.value;
    const accountCount = Number(accountCountInput.value);

    clearInvalid(signUpEmailInput);
    clearInvalid(signUpPasswordInput);
    clearInvalid(signUpConfirmPasswordInput);

    if (!name || !email || !password || !confirmPassword) {
      if (!email) {
        markInvalid(signUpEmailInput);
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

    if (userExists(email)) {
      signUpStatus.textContent = "An account with that email already exists.";
      return;
    }

    const users = getUsers();

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
      const user = createUserRecord({ name, email, password, plan: "small", role: "advisor", code });
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
      const user = createUserRecord({ name, email, password, plan: "big", role: "advisor", code });
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
  const joinPasswordInput = document.getElementById("joinPassword");
  const joinConfirmPasswordInput = document.getElementById("joinConfirmPassword");

  bindValidationReset([joinEmailInput, joinPasswordInput, joinConfirmPasswordInput]);

  joinClassForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const code = document.getElementById("joinCode").value;
    const name = document.getElementById("joinName").value.trim();
    const email = joinEmailInput.value.trim();
    const password = joinPasswordInput.value;
    const confirmPassword = joinConfirmPasswordInput.value;

    clearInvalid(joinEmailInput);
    clearInvalid(joinPasswordInput);
    clearInvalid(joinConfirmPasswordInput);

    if (code.length !== 8) {
      joinClassStatus.textContent = "Enter a valid 8 character code.";
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      if (!email) {
        markInvalid(joinEmailInput);
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

    if (userExists(email)) {
      joinClassStatus.textContent = "An account with that email already exists.";
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

    const users = getUsers();
    const user = createUserRecord({
      name,
      email,
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
  const signInEmailInput = document.getElementById("signInEmail");
  const signInPasswordInput = document.getElementById("signInPassword");

  bindValidationReset([signInEmailInput, signInPasswordInput]);

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = signInEmailInput.value.trim();
    const password = signInPasswordInput.value;

    clearInvalid(signInEmailInput);
    clearInvalid(signInPasswordInput);

    if (!email || !password) {
      if (!email) {
        markInvalid(signInEmailInput);
      }
      if (!password) {
        markInvalid(signInPasswordInput);
      }
      signInStatus.textContent = "Fill out every required field.";
      return;
    }

    if (!isValidEmail(email)) {
      markInvalid(signInEmailInput);
      signInStatus.textContent = "Enter a valid email address.";
      return;
    }

    const user = getUsers().find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password
    );

    if (!user) {
      markInvalid(signInEmailInput);
      markInvalid(signInPasswordInput);
      signInStatus.textContent = "Invalid email or password.";
      return;
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
