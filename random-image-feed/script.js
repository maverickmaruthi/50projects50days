const container = document.querySelector('.container');
const randomUnsplashUrl = 'https://source.unsplash.com/random/';
const rows = 10;
const DEFAULT_IMG_WIDTH = 300;

loadRandomImages();



function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function loadRandomImages() {
  for(let i =0; i < rows*3; i++){
    const imgEl = document.createElement('img');
    imgEl.src = `${randomUnsplashUrl}${getRandomSize()}`;
    container.appendChild(imgEl);
  }
}