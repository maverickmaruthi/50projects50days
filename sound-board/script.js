const audios = document.querySelectorAll("audio");

const sounds = [...audios].map((el) => el.id);

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopPlaying();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopPlaying() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
