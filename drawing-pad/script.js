const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x, y;
let isPressed = false;
let color = "black";
let size = 10;

const decreaseEl = document.getElementById("decrease");
const increaseEl = document.getElementById("increase");
let sizeEl = document.getElementById("size");
let colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

decreaseEl.addEventListener("click", () => {
  if (size <= 5) return;
  size -= 5;
  sizeEl.innerText = size;
});

increaseEl.addEventListener("click", () => {
  if (size >= 40) return;
  size += 5;
  sizeEl.innerText = size;
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

canvas.addEventListener("mouseDown", (e) => {
  isPressed = !isPressed;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = !isPressed;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

//drawCircle(100, 200);
//drawLine (300, 300, 300, 500)
