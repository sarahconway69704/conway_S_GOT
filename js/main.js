(() => {
  console.log('video stuff loaded');
  // variables come first!
  // grab video
  const vidPlayer = document.querySelector('video'),
    pauseButton = document.querySelectorAll('button')[0],
    playButton = document.querySelectorAll('button')[1],
    rewindButton = document.querySelectorAll('button')[2];


//functions go in the middle
function volOn(){
  vidPlayer.muted = false;
}

function volOff(){
  vidPlayer.muted = true;
}

function playVid(){
  //make player play
  vidPlayer.play();
}

function pauseVideo(){
  //make player play
  vidPlayer.pause();
}

function rewindVid(){
  //make player play
  vidPlayer.currentTime = 0;
}

vidPlayer.addEventListener('mouseover', volOn);
vidPlayer.addEventListener('mouseout', volOff);

playButton.addEventListener('click', playVid);
pauseButton.addEventListener('click', pauseVideo);
rewindButton.addEventListener('click', rewindVid);

})();
