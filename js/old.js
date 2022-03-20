function transformlinesWidth() {
  let slidemeVisibleBoolean = menuhidden.classList.contains('visibleright');
  if (slidemeVisibleBoolean) {
    document.querySelectorAll('.line').forEach((item) =>
      item.classList.remove('openline')
    );
  }
  else if (!slidemeVisibleBoolean) {
    document.querySelectorAll('.line').forEach((item) =>
      item.classList.add('openline')
      //item.classList.toggle('openline')
    );

  }
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

/* FRONT PAGE ANIMATION DIV LAPTOP */

//do it for initial load
//set height of div, by maybe getting the width, which would be the width of the image, and saying 2/3 of that

// changeoutdivlaptopheight();
//window.addEventListener('resize', changeoutdivlaptopheight);
/* function changeoutdivlaptopheight() {
  let width = window.innerWidth;
  let heighta;
  let heightnew;
  let slim_width;
  let outerimgdiv = document.querySelector('#laptoptop');
  (outerimgdiv, 'outerimgdiv');

//make sure in mobile mode first
if(width <= 750) {
  slim_width = width * 0.9;
  heightnew = (slim_width *0.667)+200; 
}
else {
  heightnew = 380;
  
}
outerimgdiv.style.height = `${heightnew}px`;
  
  console.log(outerimgdiv,'newheight');
}
 */