const imgs = document.getElementById("imgs");
const nextBtn = document.getElementById("right");
const prevBtn = document.getElementById("left");
const imgEls = imgs.querySelectorAll("img");
let idx = 0;

let interval = setInterval(startAnimation, 2000);

nextBtn.addEventListener("click", () => {
  idx++;
  resetInterval();
  changeImage();
});

prevBtn.addEventListener("click", () => {
  idx--;
  resetInterval();
  changeImage();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(startAnimation, 2000);
}

function startAnimation() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgEls.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgEls.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 30}rem)`;
}
