let pause = document.querySelector('#buttonpause');


let buttonLeft = document.querySelector('#buttonleft');
let buttonRight = document.querySelector('#buttonright');

let eventlistright = buttonRight.addEventListener('click', function(event)
{
    //CURRENT IMAGE DIV MAKE DISAPPEAR
    nextslide(event);
})
let eventlistleft = buttonLeft.addEventListener('click', function(event)

{
    nextslide(event);
})

function nextslide(event) {
    let eventtarget; 
  if(event == 'autoslide') 
    {
        // 
        console.log(event);
    
    }
    else if(event !== 'autoslide') {
        eventtarget = event.target.id;
    }

   // console.log(event);
    let imgcounter = `img${counter}`;
    let currentDiv = document.getElementById(imgcounter);
    currentDiv.style.display = 'none';  
    //not used let imgdiv = document.querySelector('.mySlides');
    console.log(myImages.length, 'length myimages');
    //if previous slide - if click left
    if(eventtarget === 'buttonleft') {
        
     //  let counter = (counter === 0) ? counter = 4 : counter--;
       if(counter === 0)
       {  counter = maxCounterValue;
    console.log(counter, 'counter4');}
       else {
           counter--;
       }
      //  counter--; 
        console.log('buttonleft');
    }
    //otherwise (so default interval, and when click right)
    else {
        if (counter < maxCounterValue) {
            counter++;   
        }
        else if (counter >= maxCounterValue) {
            counter = 0;
        };
    }
    let imgcounternew = `img${counter}`;
    console.log(imgcounternew, 'imgcounternew');

    let slideDynamicNew  = `
        <div class="mySlides slide${counter}" id="img${counter}" class="">
        <img id="imgimg" class="fade imgclass" src="${myImages[counter]}" class="imgclass" >
              
        </div>
        `;
    /*   let nextdiv = document.getElementById(imgcounter); */
    document.querySelector('.slideshow-container').innerHTML = slideDynamicNew;
/*    nextdiv.style.display = 'block'; */


    
}

const autoslideInterval = setInterval(nextslide, 5000, 'autoslide');

let pauseEvent = pause.addEventListener('click', function(event) {
    
    clearInterval(autoslideInterval);
    console.log('clearinterval');

});
/* const handler = setInterval(alarm, 3000);
      function snooze() {
        clearInterval(handler);
      } */
/* export default eventlist; */