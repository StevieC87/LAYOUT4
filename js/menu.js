const hamburgerbutton = document.querySelector('#hamburger-menu');
const menuhidden = document.getElementById("menuhidden");
const visibleRight = menuhidden.classList.contains('visibleright');


//on resize close menu and change X button to hamburger
function reportWindowSize() {
  let width = window.innerWidth;
  menuhidden.classList.remove("visibleright");
  document.querySelectorAll('.line').forEach((item) =>
    item.classList.remove('openline')
  );
}
window.onresize = reportWindowSize;

//on click hamburger button: call two functions 
if (hamburgerbutton) {
  hamburgerbutton.addEventListener('click', function () {
    slide();
    transformlines();
  });
}

//this function will make the hidden mobile menu appear 
function slide() {
  const slideme = document.querySelector('#menuhidden');
  const slidemeclasses = slideme.classList;
  const slidemeclassestoggle = slidemeclasses.toggle('visibleright');
}

//this function adds a class to the 'hamburger' lines, to create animation effect 'X'
function transformlines() {
  document.querySelectorAll('.line').forEach((item) =>
    item.classList.toggle('openline')
  );
}

