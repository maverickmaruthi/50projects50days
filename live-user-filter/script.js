const API_URL = 'https://randomuser.me/api/';
const NO_OF_RESULTS = 20;
const result = document.getElementById('result');
const filter = document.getElementById('filter');
let listItems = [];

fetchRandomusers();

filter.addEventListener('input', (e) => searchUser(e.target.value));

function searchUser(value) {
  listItems.filter((item) => {
    if (item.innerText.toLowerCase().includes(value.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

async function fetchRandomusers() {
  const users = await fetch(API_URL + `?results= ${NO_OF_RESULTS}`);
  const { results } = await users.json();
  createUsers(results);
}

function createUsers(results) {
  result.innerHTML = '';
  results.forEach((user) => {
    const liEl = document.createElement('li');
    listItems.push(liEl);
    liEl.innerHTML = `
        <img
        src="${user.picture.large}"
        class="avatar"
        alt="${user.name.first}"
      />
      <div class="user-info">
        <h3 class="name">${user.name.first} ${user.name.last}</h3>
        <span class="location">J${user.location.city} ${user.location.country}</span>
      </div>
    `;
    result.appendChild(liEl);
  });
}
