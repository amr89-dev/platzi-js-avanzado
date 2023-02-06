function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};
MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

export default MediaPlayer;

// Mi solución al pause
/* 
                            $button.addEventListener("click", () => {
                              if ($button.className === "playing") {
                                player.pause()
                                $button.className = "paused"
                        
                              } else {
                                player.play()
                                $button.className = "playing"
                              }
                        
                            })*/
