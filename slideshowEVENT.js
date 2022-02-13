/* UI BUTTONS */
let pause = document.querySelector('#buttonpause');
let buttonLeft = document.querySelector('#buttonleft');
let buttonRight = document.querySelector('#buttonright');
let resume = document.querySelector('#buttonresume');

// EVENT LISTENER ON BUTTONS LEFT RIGHT
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

//FUNCTION SLIDE
function nextslide(event) {
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

   
}

let autoslideInterval2;

//RESUME SLIDER - EVENT LISTENER
let clickresume = resume.addEventListener('click', function(){
    console.log('resume');
   autoslideInterval2 = setInterval(nextslide, 5000, 'autoslide');
   
});
//PAUSE AUTOMATIC SLIDER - EVENT LISTENER
let pauseEvent = pause.addEventListener('click', function() {
    clearInterval(autoslideInterval);
    clearInterval(autoslideInterval2);
});


 /*   let nextdiv = document.getElementById(imgcounter); */   