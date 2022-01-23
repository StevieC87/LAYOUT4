const hamburgerbutton = document.querySelector('#hamburger-menu');
hamburgerbutton.addEventListener('click', function () {
  //  vis();
  slide();
  transformlines();
});

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
