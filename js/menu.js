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

if (hamburgerbutton) {
hamburgerbutton.addEventListener('click', function () {
  slide();
  transformlines();
});
}
function slide() {
  const slideme = document.querySelector('#menuhidden');
  const slidemeclasses = slideme.classList; 
  const slidemeclassestoggle = slidemeclasses.toggle('visibleright');
}

function transformlines() {
  document.querySelectorAll('.line').forEach((item) =>
    item.classList.toggle('openline')
  );
}

