const generateBtn = document.getElementById('generateJoke');
const joke = document.getElementById('joke');

// const generateJoke =  () => {
//   const config = {
//     headers: {
//     'Accept': 'application/json'
//     }
//   };
//   fetch('https://icanhazdadjoke.com/', config)
//   .then(response => response.json())
//   .then(data => joke.innerText = data.joke);
// }
generateJoke();

async function generateJoke() {
  const config = {
      headers: {
      'Accept': 'application/json'
      }
    };
  
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    joke.innerText = data.joke
}
generateBtn.addEventListener('click',generateJoke);