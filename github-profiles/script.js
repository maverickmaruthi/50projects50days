const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

async function getUser(userName) {
  try {
    const { data } = await axios(API_URL + userName);
    console.log(data);
    createUserCard(data);
    getUserRepos(userName);
  } catch (err) {
    if (err.response.status === 404)
      createErrorCard("No Profile with the username.");
  }
}

async function getUserRepos(userName) {
  try {
    const { data } = await axios(API_URL + userName + "/repos?sort=created");
    createRepoLinks(data);
  } catch (err) {
    createErrorCard("Problem fetching repos with the username.");
  }
}

function createErrorCard(message) {
  main.innerHTML = `<div class="card"><h1>${message}</h1></div>`;
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="user-image" class="avatar" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function createRepoLinks(repos) {
  const reposEl = document.getElementById("repos");
  let repoLinks = repos.slice(0, 10).map((repo) => {
    return `<a href="${repo.html_url}" target="_blank" class="repo">${repo.name}</a>`;
  });
  reposEl.innerHTML = repoLinks.join(" ");
}
