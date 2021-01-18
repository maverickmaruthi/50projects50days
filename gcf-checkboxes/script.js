const toggles = document.querySelectorAll(".toggle");
const goodEl = document.getElementById("good");
const cheapEl = document.getElementById("cheap");
const fastEl = document.getElementById("fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(targetEl) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === targetEl) {
      fastEl.checked = false;
    }

    if (cheapEl === targetEl) {
      goodEl.checked = false;
    }

    if (fastEl === targetEl) {
      cheapEl.checked = false;
    }
  }
}
