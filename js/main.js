(() => {
  console.log('video stuff loaded');


//'this' means the content of the function
String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }

  // variables come first!
let sigils = document.querySelectorAll('.sigilContainer'),
    lightbox = document.querySelector('.lightbox'),
    closeLightBoxButton = document.querySelector('.close-lightbox'),
    vidPlayer = document.querySelector('video'),
    vidControls = document.querySelector('.controls'),
    imageBanner = document.querySelector('#houseImages');
//functions in the middle


function showHouseVideo(){
  let houseName = this.className.split(' ')[1].capIt();

  document.querySelector('h1').textContent = `House ${houseName}`;
    //debugger;
  lightbox.classList.add('show-lightbox');
  vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  //make it play
  vidPlayer.play();

  scrollBanners(this.dataset.offset);
}

function scrollBanners(offset) {
  //move the banner images to the left
   let moveIt = offset * 600 + "px";
   imageBanner.style.right = moveIt;
}


function closeLightBox(){
  lightbox.classList.remove('show-lightbox');
  //stop the video and rewind it to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;

}

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

// event handling at the bottom

sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
vidPlayer.addEventListener('ended', closeLightBox);
vidControls.addEventListener('click', pausePlay);
})();
