const hamburgerbutton = document.querySelector('#hamburger-menu');

if (hamburgerbutton) {
hamburgerbutton.addEventListener('click', function () {
  //  vis();
  slide();
  transformlines();
});
}
function slide() {
  const slideme = document.querySelector('#menuhidden');
  const slidemeclasses = slideme.classList;
  //  slideme.classList.replace('hiddenright', 'visibleright');
  const slidemeclassestoggle = slidemeclasses.toggle('visibleright');
}

function transformlines() {
  //for each line add a class ideally
  document.querySelectorAll('.line').forEach((item) =>
    //item.style.backgroundColor = "pink"
    item.classList.toggle('openline')
  );
}



/* ON WINDOW RESIZE, CLOSE HAMBURGER MENU IF STILL OPEN */

/* function closeHamburger() {
  let width = window.innerWidth;
  if(width > 676) {
    document.querySelector("#menuhidden").classList.add('visibleright');
  } */

/*  */
/* } */
/* 
window.onresize = closeHamburger; */
/* 
const widthOutput = document.querySelector('#width'); */