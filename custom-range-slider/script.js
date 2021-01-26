const rangeEl = document.querySelector("#range");

rangeEl.addEventListener("input", (e) => {
  const targetEl = e.target;
  const value = +targetEl.value;
  const labelEl = targetEl.nextElementSibling;

  const rangeWidth = getComputedStyle(targetEl).getPropertyValue("width");
  const labelWidth = getComputedStyle(labelEl).getPropertyValue("width");

  const num_range_width = +rangeWidth.substr(0, rangeWidth.length - 2);
  const num_label_width = +labelWidth.substr(0, labelWidth.length - 2);

  const max = +targetEl.max;
  const min = +targetEl.min;

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  labelEl.style.left = left + "px";

  labelEl.innerHTML = value;
});

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
