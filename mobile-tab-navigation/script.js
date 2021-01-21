const navItems = document.querySelectorAll("nav ul li");
const contents = document.querySelectorAll(".content");

navItems.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    hideAllContents();
    removeNavSelections();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((img) => img.classList.remove("show"));
}

function removeNavSelections() {
  navItems.forEach((item) => item.classList.remove("active"));
}
