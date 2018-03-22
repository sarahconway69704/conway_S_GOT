(() => {
  console.log('video stuff loaded');
  // variables come first!
let sigils = document.querySelectorAll('.sigilContainer'),
    lightbox = document.querySelector('.lightbox'),
    closeLightBoxButton = document.querySelector('.close-lightbox');
//functions in the middle


function showHouseVideo(){
  //debugger;
  lightbox.classList.add('show-lightbox');
}


function closeLightBox(){
  lightbox.classList.remove('show-lightbox');
}
//stop the video and rewind it to 0
// event handling at the bottom

sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);
})();
