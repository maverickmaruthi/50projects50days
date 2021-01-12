const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  const scrollY = window.scrollY;
  const navElOffsetHeight = nav.offsetHeight;
  if (scrollY > navElOffsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
