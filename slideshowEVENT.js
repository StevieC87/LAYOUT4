/* UI BUTTONS */
let pause = document.querySelector('#buttonpause');
let buttonLeft = document.querySelector('#buttonleft');
let buttonRight = document.querySelector('#buttonright');
let resume = document.querySelector('#buttonresume');


let clickright = buttonRight.addEventListener('click', function(event)
    {
        nextslide(event);
    })
 
let clickleft = buttonLeft.addEventListener('click', function(event)
    {
        nextslide(event);
    })




//CREATE AUTOMATIC SLIDER
let autoslideInterval = setInterval(nextslide, 5000, 'autoslide');



function nextslide(event) {
    alert('yes');
  let eventtarget; 
  if(event !== 'autoslide') {
        eventtarget = event.target.id;
    }

    let imgcounter = `img${counter}`;
    //HIDE CURRENT SLIDE
    let currentDiv = document.getElementById(imgcounter);
    currentDiv.style.display = 'none';  

    //IF CLICK ON LEFT BUTTON / PREVIOUS SLIDE
    if(eventtarget === 'buttonleft') {
        //set counter - for which image to show next
       if(counter === 0) //if first image, set counter to last image
       {  
           counter = lastImageIndex;
        }
       else { //otherwise show previous image
           counter--;
       }
    }
    //IF CLICK RIGHT BUTTON
    else {
        if (counter < lastImageIndex) { 
            counter++;  //show next image
        }
        else if (counter >= lastImageIndex) {
            counter = 0;  //if last image, show first image
        };
    }
    //CREATE NEXT SLIDE IMAGE
    let imgcounternew = `img${counter}`; //for image id, using counter
    let slideDynamicNew  = `
        <div class="mySlides slide${counter}" id="img${counter}" class="">
        <img id="imgimg" class="fade imgclass" src="${myImages[counter]}" class="imgclass" >
        </div>
        `;
    document.querySelector('.slideshow-container').innerHTML = slideDynamicNew;

    /*   let nextdiv = document.getElementById(imgcounter); */   
}

//TEST HERE CONSTANT ARROW FUNCTION
 // const autoslideNew = setInterval(() => nextslide,200, 'autoslide' );
/* 
const hello = () => {
    //asdf
    console.log('hello');
} */
let bob = () => { console.log('bog') };
let autoslideInterval2;
//PAUSE AUTOMATIC SLIDER

//RESUME SLIDER
/* let clickresume = resume.addEventListener('click', function(event){
    console.log('resume');
   // hello();
   autoslideInterval;
}); */
let clickresume = resume.addEventListener('click', function(){
    console.log('resume');
   // hello();
  // autoslideInterval = 1;
   autoslideInterval2 = setInterval(nextslide, 5000, 'autoslide');
   
});
let pauseEvent = pause.addEventListener('click', function(event) {
    clearInterval(autoslideInterval);
    clearInterval(autoslideInterval2);
   // autoslideInterval = false;
    //console.log('clearinterval');
});
// const clickresume = resume.addEventListener('click', autoslideInterval);
//not used let imgdiv = document.querySelector('.mySlides');

