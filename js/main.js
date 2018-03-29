(() => {
  console.log('video stuff loaded');


//'this' means the content of the function
String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }

  // variables come first!
let sigils = document.querySelectorAll('.sigilContainer'),
    lightbox = document.querySelector('.lightbox'),
    closeLightBoxButton = document.querySelector('.close-lightbox'),
    vidPlayer = document.querySelector('video'),
    vidControls = document.querySelector('.controls');
//functions in the middle
function pausePlay(){

  let theButton = this.firstElementChild;

if (vidPlayer.paused == true){
    vidPlayer.play();
    theButton.dataset.icon = "pause-circle";
  } else {
    vidPlayer.pause();
    theButton.dataset.icon = "play-circle";
  }

}

function showHouseVideo(){
  let houseName = this.className.split(' ')[1].capIt()

  document.querySelector('h1').textContent = `House ${houseName}`;
    //debugger;
  lightbox.classList.add('show-lightbox');
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  //make it play
  vidPlayer.play();
}


function closeLightBox(){
  lightbox.classList.remove('show-lightbox');
  //stop the video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

// event handling at the bottom

sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox);
vidControls.addEventListener('click', pausePlay);
})();
