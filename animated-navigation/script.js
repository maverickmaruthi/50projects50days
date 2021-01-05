const toggleBtn = document.querySelector('.icon');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});