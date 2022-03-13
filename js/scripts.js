const hamburgerbutton = document.querySelector('#hamburger-menu');
const menuhidden = document.getElementById("menuhidden");
const visibleRight = menuhidden.classList.contains('visibleright');

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


//SEE IF SCROLLED INTO VIEW - THEN ANIMATE 
let tabletimg2 = document.querySelector('#tablet2');
let tabletimg1 =  document.querySelector('#tablet');
let mobileimg = document.querySelector('#mobile');
let imgfromtop = tabletimg2.getBoundingClientRect().top;
console.log(imgfromtop, 'imgfromtop');


let observer1 = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');

    tabletimg1.classList.add('animationclassfortablet1');
  }
}, { threshold: [0] });

observer1.observe(document.querySelector("#tablet"));

let observer2 = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');

  tabletimg2.classList.add('animationclassfortablet2');
  }
}, { threshold: [0] });

observer2.observe(document.querySelector("#tablet2"));


let observer3 = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');

    mobileimg.classList.add('animationclassforMOBILE');
  }
}, { threshold: [0] });

observer3.observe(document.querySelector("#mobile"));
/* FRONT PAGE ANIMATION DIV LAPTOP */

//do it for initial load
//set height of div, by maybe getting the width, which would be the width of the image, and saying 2/3 of that
changeoutdivlaptopheight();
window.addEventListener('resize', changeoutdivlaptopheight);
function changeoutdivlaptopheight() {
  let width = window.innerWidth;
  let heighta;
  let heightnew;
  let slim_width;
  let outerimgdiv = document.querySelector('#laptoptop');
  console.log(outerimgdiv, 'outerimgdiv');

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