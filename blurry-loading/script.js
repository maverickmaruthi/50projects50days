const loadingText = document.querySelector('.loading-text');
const backgroundImg = document.querySelector('.bg');

let load = 0;

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
const blurring = () => {
  load++;
  if(load > 99){
    clearInterval(interval);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

let interval = setInterval(blurring, 30);