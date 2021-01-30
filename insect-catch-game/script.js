const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-game');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const quitGame = document.getElementById('quit-game');

let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

quitGame.addEventListener('click', () => location.reload());

chooseInsectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = {src, alt};
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function createInsect() {
  const insectEl = document.createElement('div');
  insectEl.classList.add('insect');
  const {x, y} = getRandomLocation();
  insectEl.style.top = `${y}px`;
  insectEl.style.left = `${x}px`;
  insectEl.innerHTML = `<img src="${selectedInsect.src}" 
  alt="${selectedInsect.alt}" 
  style="transform:rotate(${Math.random() * 360}deg" />`;
  insectEl.addEventListener('click', catchInsect);
  gameContainer.appendChild(insectEl);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y};
}

function startGame() {
  let interval = setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds/60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}: ${s}`;
  seconds++;
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => {
    this.remove();
  }, 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if(score > 19) {
    messageEl.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}