(() => {
  console.log('fired! JS is FUN!');

//variables always go at the top
  var iconSet = document.querySelectorAll('svg');

//function goes here (inbetween)
function logThisIcon() {
  console.log('clicked on this icon: ') this.id);

  //change opacity
  thic.style.opacity = 0.5;
}

//event handling goes at the bottom
  iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));
})();
