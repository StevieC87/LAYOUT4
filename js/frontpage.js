
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

// changeoutdivlaptopheight();
//window.addEventListener('resize', changeoutdivlaptopheight);
/* function changeoutdivlaptopheight() {
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
 */
