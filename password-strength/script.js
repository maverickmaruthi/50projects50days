const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val) {
    const length = val.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
  }
});
