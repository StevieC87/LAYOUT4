
//SEE IF SCROLLED INTO VIEW - THEN ANIMATE 
let tabletimg1 = document.querySelector('#tablet');
let tabletimg2 = document.querySelector('#tablet2');
let mobileimg = document.querySelector('#mobile');
let imgfromtop = tabletimg2.getBoundingClientRect().top;



let observer1 = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    //if true: visible on screen
    tabletimg1.classList.add('animationclassfortablet1');
  }
}, { threshold: [0] });

observer1.observe(document.querySelector("#tablet"));

let observer2 = new IntersectionObserver(function (entries) {
  // isIntersecting is true when element and viewport are overlapping
  // isIntersecting is false when element and viewport don't overlap
  if (entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');

    tabletimg2.classList.add('animationclassfortablet2');
  }
}, { threshold: [0] });

observer2.observe(document.querySelector("#tablet2"));


let observer3 = new IntersectionObserver(function (entries) {
  // isIntersecting is true when element and viewport are overlapping
  // isIntersecting is false when element and viewport don't overlap
  if (entries[0].isIntersecting === true) {
    console.log('Element has just become visible in screen');

    mobileimg.classList.add('animationclassforMOBILE');
  }
}, { threshold: [0] });

observer3.observe(document.querySelector("#mobile"));

