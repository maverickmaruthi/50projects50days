const sendBtn = document.getElementById("send");
const panelEl = document.querySelector("div.panel");
const ratings = document.querySelectorAll("div.rating");
const feedbackEl = document.querySelector("div.feedback-options");
let selectedRating = "Happy";

feedbackEl.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  ratings.forEach((el) => el.classList.remove("active"));
}

sendBtn.addEventListener("click", (e) => {
  panelEl.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong><br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  `;
});
