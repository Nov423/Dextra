const DEXTRA_RESET_KEY = "dextraResetVersion";
const DEXTRA_RESET_VERSION = "20260415-single-seed";

const seededUsers = [
  {
    name: "Admin",
    email: "123@gmail.com",
    username: "Admin",
    password: "12345678",
    plan: "single",
    role: "admin",
    testsTaken: 67,
    roleplaysDone: 42,
    writtensGraded: 4,
  },
];

function resetAndSeedStorage() {
  if (localStorage.getItem(DEXTRA_RESET_KEY) === DEXTRA_RESET_VERSION) {
    return;
  }

  localStorage.setItem("dextraUsers", JSON.stringify(seededUsers));
  localStorage.setItem("dextraClubs", JSON.stringify([]));
  localStorage.removeItem("dextraClubConfirmation");
  localStorage.removeItem("dextraCurrentUser");
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("dextraCurrentUser");
  sessionStorage.removeItem("currentUser");
  localStorage.setItem(DEXTRA_RESET_KEY, DEXTRA_RESET_VERSION);
}

resetAndSeedStorage();
