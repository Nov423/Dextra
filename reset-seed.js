const DEXTRA_RESET_KEY = "dextraResetVersion";
const DEXTRA_RESET_VERSION = "20260415-single-seed";

const seededUsers = [
  {
    name: "Single Plan User",
    email: "123@gmail.com",
    password: "12345678",
    plan: "single",
    role: "member",
    testsTaken: 0,
    roleplaysDone: 0,
    writtensGraded: 0,
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
