const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1571752728294-107ff055e221?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Car">`;
  title.innerHTML = ` Do you have any idea how long it takes those cups to decompose?`;
  excerpt.innerHTML = `You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? Must go faster... go, go, go, go, go! Must go faster... go, go, go, go, go! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Author">`;
  name.innerHTML = `John Doe`;
  date.innerText =  `Dec 19, 2020`;
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

