const FEEDBACK_STORAGE_KEY = "dextraCompetitionFeedback";

function buildFeedbackModal() {
  const wrapper = document.createElement("div");
  wrapper.className = "feedback-modal hidden";
  wrapper.id = "feedbackModal";
  wrapper.innerHTML = `
    <div class="feedback-backdrop" data-feedback-close="true"></div>
    <div class="feedback-dialog panel" role="dialog" aria-modal="true" aria-labelledby="feedbackTitle">
      <button class="feedback-close" id="feedbackCloseButton" type="button" aria-label="Close feedback popup">×</button>
      <p class="eyebrow">Competition Check-In</p>
      <h3 id="feedbackTitle">How was your competition?</h3>
      <p class="feedback-copy">What event did you compete in, and how did it go for you?</p>
      <form class="feedback-form" id="feedbackForm">
        <label for="feedbackResponse">Competition recap</label>
        <textarea
          id="feedbackResponse"
          rows="4"
          placeholder="Tell us your event, placement, and how you felt about the performance."
        ></textarea>
        <div class="feedback-rating-block">
          <span class="feedback-rating-label">How much did Dextra help?</span>
          <div class="feedback-stars" id="feedbackStars" aria-label="Select a rating from 1 to 5 stars"></div>
        </div>
        <p class="form-status" id="feedbackStatus" aria-live="polite"></p>
        <button class="button primary submit-button" type="submit">Submit Feedback</button>
      </form>
    </div>
  `;
  document.body.appendChild(wrapper);

  const starsContainer = wrapper.querySelector("#feedbackStars");
  for (let index = 1; index <= 5; index += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "feedback-star";
    button.dataset.ratingValue = String(index);
    button.setAttribute("aria-label", `${index} star${index === 1 ? "" : "s"}`);
    button.textContent = "★";
    starsContainer.appendChild(button);
  }

  return wrapper;
}

function bindFeedbackModal() {
  if (document.getElementById("feedbackModal")) {
    return;
  }

  const modal = buildFeedbackModal();
  const form = modal.querySelector("#feedbackForm");
  const response = modal.querySelector("#feedbackResponse");
  const status = modal.querySelector("#feedbackStatus");
  const closeButton = modal.querySelector("#feedbackCloseButton");
  const stars = [...modal.querySelectorAll(".feedback-star")];
  let selectedRating = 0;

  function setRating(rating) {
    selectedRating = rating;
    stars.forEach((star, index) => {
      star.classList.toggle("active", index < rating);
    });
  }

  function openModal() {
    modal.classList.remove("hidden");
    document.body.classList.add("feedback-open");
    response.focus();
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("feedback-open");
    status.textContent = "";
  }

  function shouldIgnoreKeydown(event) {
    const target = event.target;
    if (!target) {
      return false;
    }

    const tagName = target.tagName ? target.tagName.toLowerCase() : "";
    return (
      tagName === "input" ||
      tagName === "textarea" ||
      tagName === "select" ||
      target.isContentEditable
    );
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
      return;
    }

    if (
      event.key.toLowerCase() === "p" &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      !shouldIgnoreKeydown(event)
    ) {
      event.preventDefault();
      openModal();
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.feedbackClose === "true") {
      closeModal();
    }
  });

  closeButton.addEventListener("click", closeModal);

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      setRating(Number(star.dataset.ratingValue));
      status.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const summary = response.value.trim();

    if (!summary) {
      status.textContent = "Add a short competition recap first.";
      return;
    }

    if (!selectedRating) {
      status.textContent = "Pick a 1 to 5 star rating.";
      return;
    }

    const feedback = {
      summary,
      rating: selectedRating,
      submittedAt: new Date().toISOString(),
      path: window.location.pathname,
    };

    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback));
    status.textContent = "Thanks. Your competition feedback was saved.";
    form.reset();
    setRating(0);
    window.setTimeout(closeModal, 700);
  });
}

bindFeedbackModal();
