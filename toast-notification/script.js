const toasts = document.getElementById("toasts");
const notifyBtn = document.getElementById("notifyBtn");

const randomMsgs = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const randomClasses = ["info", "success", "error"];

notifyBtn.addEventListener("click", () => createNotification());

function getRandomMsg() {
  return randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
}

function getRandomClass() {
  return randomClasses[Math.floor(Math.random() * randomMsgs.length)];
}

function createNotification() {
  const notifyEl = document.createElement("div");
  notifyEl.classList.add("toast");
  notifyEl.classList.add(getRandomClass());
  notifyEl.innerText = getRandomMsg();
  toasts.appendChild(notifyEl);
  setTimeout(() => {
    notifyEl.remove();
  }, 2000);
}
