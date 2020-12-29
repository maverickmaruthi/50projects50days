const panels = document.querySelectorAll('div.panel');

const removeActiveClasses = () => {
  panels.forEach(panel => panel.classList.remove('active'));
}

const panelClickHandler = (element) => {
  removeActiveClasses();
  element.target.classList.add('active');
}

panels.forEach(panel => {
  panel.addEventListener('click', panelClickHandler);
});

