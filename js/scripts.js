const hamburgerbutton = document.querySelector('#hamburger-menu');
const menuhidden = document.getElementById("menuhidden");
const visibleRight = menuhidden.classList.contains('visibleright');


/* HAMBURGER MENU RELATED */
function reportWindowSize() {
  /* et height = window.innerHeight; */
  let width = window.innerWidth;

  
  if(width > 676) {
   console.log(width, 'over 676');
    menuhidden.classList.remove("visibleright");

    
  }
  if(width < 676 ) {
    console.log(width, 'under 676');
    menuhidden.classList.remove("visibleright");

   
  }
  if(!visibleRight && width > 676)
    console.log(visibleRight, 'visibleright');
      /* transformlinesWidth(); */
      /*    */
      document.querySelectorAll('.line').forEach((item) =>
      item.classList.remove('openline')
    );
   
 /*  alert(height); */
}

window.onresize = reportWindowSize;

if (hamburgerbutton) {
hamburgerbutton.addEventListener('click', function () {
  //  vis();
  slide();
  transformlines();
 /*  document.querySelector('.line').style.backgroundColor = 'black'; */
});
}
function slide() {
  const slideme = document.querySelector('#menuhidden');
  //boolean
 /*  if(slidemeVisibleBoolean) {
    menuhidden.classList.remove("visibleright");
  }
  else if (!slidemeVisibleBoolean) {
    menuhidden.classList.add("visibleright");
  }
 */
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


function transformlinesWidth(){
  let slidemeVisibleBoolean = menuhidden.classList.contains('visibleright');
  if(slidemeVisibleBoolean) {
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