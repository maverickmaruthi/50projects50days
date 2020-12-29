const searchBtn = document.getElementById('searchBtn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});