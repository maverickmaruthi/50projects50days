const containerEl = document.getElementById("container");
const SQUARES = 500;
const DEFAULT_COLOR = "#1d1d1d";
const DEFAULT_BOX_SHADOW_COLOR = "#000";

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  containerEl.appendChild(square);
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = DEFAULT_COLOR;
  element.style.boxShadow = `0 0 2px ${DEFAULT_BOX_SHADOW_COLOR}`;
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
