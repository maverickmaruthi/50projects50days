const imgEl = document.querySelector(".loveme");
const times = document.getElementById("times");

let clickTime = 0;
const CLICK_TIME_GAP = 800;
let timesClicked = 0;

imgEl.addEventListener("click", imgClickHandler);

function imgClickHandler(e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < CLICK_TIME_GAP) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
}

const createHeart = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  const heartEl = document.createElement("i");
  heartEl.classList.add("fas");
  heartEl.classList.add("fa-heart");
  heartEl.style.top = yInside + "px";
  heartEl.style.left = xInside + "px";
  imgEl.appendChild(heartEl);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heartEl.remove(), 1000);
};
