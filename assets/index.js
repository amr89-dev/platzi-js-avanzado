import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const $video = document.querySelector("video");
const $button = document.querySelector("button");
const player = new MediaPlayer({
  el: $video,
  plugins: [new AutoPlay(), new AutoPause()],
});

document.addEventListener("click", (e) => {
  //console.log(e.target);
  if (e.target.matches("#play")) {
    player.togglePlay();
  }

  if (e.target.matches("#mute")) {
    player.toggleMute();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((err) => {
    console.log(err.message);
  });
}
