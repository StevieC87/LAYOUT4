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
// let autoslideInterval = setInterval(nextslide, 5000, 'autoslide');

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
        <div class="mySlides slide${counter}" id="imgdiv${counter}" class="">
        <img id="img${counter}" class="fade imgclass" src="${myImages[counter]}" class="imgclass" >
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


 //MODAL STUYFF
 // Get the modal
var modal = document.getElementById("modal");
var modal2 = document.querySelector('.modal-content');
// let modal2 = document.querySelector('');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
 // modal2.style.width = 
}

// When the user clicks on <span> (x), close the modal
/* span.onclick = function() {
  modal.style.display = "none";
} */

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//ADD EVENT LISTENERS TO THUMBNAIL click - TO LOAD MODAL
// ON CLICK TO MODAL FROM THUMBNAIL

//let parentdiv = document.querySelector('.gallery-container');
console.log(parentdiv);

function clickOnThumb(event) {
    console.log('hello');
    console.log(event.target.id);
    let idclean = event.target.id.slice(3); 
    console.log(idclean);
    modal.style.display = "block";
    updateModal(idclean)

}
parentdiv.addEventListener('click', clickOnThumb);
  


function updateModal(photoindex) {
    //WHEN THUMBNAIL CLICKED - HANDLER
    let modal_content = document.querySelector('.modal-content');
    /* let parent2 = document.querySelector('.modal-photo');   */ 
    let thumbnailModalBig  = `
    <div class="" id="">
    <img id="img${photoindex}" class="imagefull imgresponsive" src="${myImages[photoindex]}">
    </div>
    `;
    //console.log(parent2, 'parent2');
    modal_content.innerHTML = thumbnailModalBig;
    let imgEl =  document.querySelector(`#img${photoindex}`);
    console.log(imgEl, 'imgEl');
    let thumbnail_width =  imgEl.clientWidth;
    let thumbnail_height = imgEl.clientHeight;

    if(thumbnail_width < thumbnail_height) {
        img_set_width = '400px';
        img_set_height = '250px';
    }
    else {
        img_set_width = '250px';
        img_set_height = '400px';
    }
    modal_content.style.width = img_set_width;
    
    console.log(thumbnail_width);
    console.log(thumbnail_height);
}