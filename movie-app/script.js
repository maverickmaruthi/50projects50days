const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', searchFormHandler);

function searchFormHandler(e) {
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm && searchTerm !== ""){
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  }else{
    window.location.reload();
  }
}

async function getMovies(url){
  const config = {
    headers: {
    'Accept': 'application/json'
    }
  };
  const response = await fetch(url, config);
  const data = await response.json();
  displayMovies(data.results);
}

function computeClass(average){
  let className = 'orange';
  if(average >= 7.5){
    className = 'green';
  }else if(average <= 4){
    className = 'red';
  }
  return className;
}

function displayMovies(movies){
  console.log(Array.isArray(movies));
  main.innerHTML = '';
  const moviesEl = movies.map(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    return `
    <div class="movie">
      <img src="${IMG_PATH + poster_path}" 
          alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${computeClass(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    </div>
    `;
  });
  main.innerHTML = moviesEl.join('');
}


getMovies(API_URL);

