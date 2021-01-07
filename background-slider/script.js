const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const slides = document.querySelectorAll(".slide");
const body = document.body;

let activeSlide = 0;

setBgtoBody();

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

rightArrow.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setActiveSlide();
  setBgtoBody();
});

leftArrow.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setActiveSlide();
  setBgtoBody();
});
