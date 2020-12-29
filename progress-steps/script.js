const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const updateDOM = () => {
  circles.forEach((el, index) => {
    if (index < currentActive) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const completionPercent = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = completionPercent + "%";

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

const nextBtnClickHandler = () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
};

const prevBtnClickHandler = () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateDOM();
};

nextBtn.addEventListener("click", nextBtnClickHandler);
prevBtn.addEventListener("click", prevBtnClickHandler);
