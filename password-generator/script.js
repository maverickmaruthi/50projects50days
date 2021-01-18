const resultEl = document.getElementById('result');
const uppercaseEl = document.getElementById('include-uppercase');
const lowercaseEl = document.getElementById('include-lowercase');
const numbersEl = document.getElementById('include-numbers');
const symbolsEl = document.getElementById('include-symbols');
const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const clipboardBtn = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardBtn.addEventListener('click', () => {
  const textareaEl = document.createElement('textarea');
  const password = resultEl.innerText.trim();
  if(!password) return;
  textareaEl.value = password;
  document.body.appendChild(textareaEl);
  textareaEl.select();
  document.execCommand('copy');
  textareaEl.remove();
  alert('Password is copied to the clipboard');
});

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  console.log(typesArr);
  if(typesCount === 0) {
    return '';
  }

  for(let i =0; i < length; i+= typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    })
  }
  return generatedPassword.slice(0, length);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}