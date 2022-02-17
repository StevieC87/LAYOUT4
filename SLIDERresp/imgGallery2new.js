

const myImages = [
    "./images/dummy2/1.jpg",
   /*  "./images/dummy/2.jpg", */
    
    "./images/dummy2/3.jpg",
    "./images/dummy2/4.jpg",
    "./images/dummy2/5.jpg",
    "./images/dummy2/6.jpg",
    "./images/dummy2/9.jpg",
    "./images/dummy2/10.jpg",
    "./images/dummy2/7.jpg",
    "./images/dummy2/8.jpg",
   

    
];
const totalImages = myImages.length;
const totalImagesIndex = totalImages -1;
//INSERT ARRAY OF IMAGES THUMBNAIL IN THUMB CONTAINER GALLERY BELOW
//1) FIRST DO LOOP

// let parentdiv2 = document.getElementById('thumb_container');

function thumbnails(imgsarray) {
    
    let parentdiv = document.querySelector('.thumbcontainer');
    console.log(parentdiv);
    let orientation;
    let thumbheight;
    let thumbwidth;
    var orientation_cssclass;

    function getOrientation (img) {
                    

    }
   //INITIAL LOAD - CREATE THUMBNAILS
    myImages.forEach((element, index) => {
        
        //CREATE DIV TO APPEND TO PARENT#
            const onelessdiv = document.createElement('div');
            onelessdiv.classList.add('thumb');
            onelessdiv.setAttribute("id", `imgdiv${index}`);
        // let visibility;
        // here only display the first one ini ially, others: hidden 
            onelessdiv.innerHTML = `
                <img id="img${index}" class="imgclass ${orientation_cssclass}" src="${myImages[index]}">
                `;    
                //ALTERNARTIVE WE CAN DO HERE
            let img2 = document.createElement('img');
            img2.id = `img${index}`;
            img2.src = `${myImages[index]}`;
           
            let img_width = img2.naturalWidth;
            let img_height = img2.naturalHeight
         
            //for class name - get orientation
            if(img_width > img_height) {
                orientation = 'landscape';
                thumbheight = '100px';
            // thumbwidth = '100px';
            //so if orientation portrait
            var orientation_cssclass = 'thumb-landscape';
            }
            else if (img_height > img_width) {
                orientation = 'portrait';
            // thumbheight = '100px';
            thumbwidth = '100px';
            var orientation_cssclass = 'thumb-portrait';
            }
            console.log(orientation_cssclass);

            img2.className = `thumb ${orientation_cssclass}`;
          
           parentdiv.appendChild(img2);

            let newimg = document.querySelector(`#img${index}`);
     

        });
    
}

thumbnails(myImages);

//HELPER FUNCTIONS
//here pass img object you are creating, return css class for orientation
const getImgOrientReturnClass = (imgObject) => {
   
    let mainphoto_width = imgObject.naturalWidth;
    let mainphoto_height = imgObject.naturalHeight;
    var landscapemainphoto;
    //for class name - get orientation
    if(mainphoto_width > mainphoto_height) {
    //  orientation = 'landscape';
        //thumbheight = '100px';
    // console.log(orientation);
        var landscapemainphoto = 'landscape-desktop';
        return landscapemainphoto;
    }
    else if (mainphoto_height > mainphoto_width) {
        var landscapemainphoto = 'portrait-desktop';
        return landscapemainphoto;
}
}

/* let resizewindow_resizeimg = window.addEventListener('resize', reportWindowSize);
const resizeimgOnwindowResize = () => {
    
} */
const Slider = (photoindex) => {
    let parentdiv = document.querySelector('#mainphotodiv');
    const currentDiv = document.querySelector('.mainphoto');
   // currentDiv.style.display = 'none';  
    let mainphoto = document.createElement('img');
    mainphoto.id = `img${photoindex}`;
    mainphoto.src = myImages[photoindex];

    let orientation = getImgOrientReturnClass(mainphoto)
    mainphoto.className = `mainphoto ${orientation} fade`;

    let screenwidth = screen.width;
    let availablewidth = parentdiv.offsetWidth;
    console.log(screenwidth, 'screenwidth');
    console.log(availablewidth, 'avialble width');
    /* if(orientation == 'landscape-desktop') {
        var height = screenwidth * 0.667;
    }
    else if (orientation == 'portrait-desktop') {
        var height = screenwidth * 1.;
    } */
    if(availablewidth < 700) {
        var heighta = availablewidth * 0.667;
    }
   else {
       var heighta = 700 * 0.667;
   }
  /*  if(orientation == 'portrait-desktop') {
       
   } */
    mainphoto.height = heighta;
    // parentdiv.appendChild(mainphoto);
    parentdiv.replaceChild(mainphoto,currentDiv);
}
Slider(0);

const pause = document.querySelector('#buttonpause');
const buttonLeft = document.querySelector('#buttonleft');
const buttonRight = document.querySelector('#buttonright');
const resume = document.querySelector('#buttonresume');
const parentdiv = document.querySelector('.thumbcontainer');


//  EVENT LISTENER - THUMBNAIL PHOTO PRESS
let thumbnail_click = parentdiv.addEventListener('click', function(event)
    {
        thumbnailPress(event);
    })
/* // EVENT LISTENER ON BUTTONS LEFT RIGHT
let clickright = buttonRight.addEventListener('click', function(event)
    {
        buttonPressRL(event);
    })
let clickleft = buttonLeft.addEventListener('click', function(event)
    {
        buttonPressRL(event);
    })
 */
const button_right_div = document.querySelector('#buttonrightdiv');
let click_next = button_right_div.addEventListener('click', function(event)
{
    let currentphoto = document.querySelector('.mainphoto');
    let currentphoto_id = currentphoto.id.slice(3);
    console.log(currentphoto_id,'currentphoto_id');

    if(currentphoto_id == totalImagesIndex) {
        var nextimg = 0;
    }
    // else if(currentphoto_id < totalImagesIndex){
    else{
        var nextimg = ++currentphoto_id;
    }
    console.log(myImages.length, 'myImages length');
    console.log(nextimg, 'nextimg');
    
    Slider(nextimg);


});

const button_left_div = document.querySelector('#buttonleftdiv');
let click_back = button_left_div.addEventListener('click', function(event)
{
    let currentphoto = document.querySelector('.mainphoto');
    let currentphoto_id = currentphoto.id.slice(3);
    console.log(currentphoto_id,'currentphoto_id');

    if(currentphoto_id == 0) {
        var nextimg = totalImagesIndex;
    }

    else {
        var nextimg = --currentphoto_id;
    }
    console.log(myImages.length, 'myImages length');
    console.log(nextimg, 'nextimg');
    
    Slider(nextimg);

});
const pausebutton = document.querySelector('#pausediv');
const playbutton = document.querySelector('#playdiv');
const rangeslider = document.querySelector('#rangeSlider');
let speed;
//EVENT LISTENER - SLIDER RANGE - SLIDER SPEED
let rangeevent = rangeslider.addEventListener('input', function(event)

{
    let rangespeed = event.target.value;
    if(rangespeed == 1) {
        speed = 6000;
    }
    else if  (rangespeed == 2) {
        speed = 4000;
    }
    else if (rangespeed == 3) {
        speed = 2000;
    }
    clearInterval(interval_id);
    interval_id = null;
    if(!interval_id) {
        let classif = playbutton.getAttribute("class");
       console.log(classif);

       if (classif == 'hide'){

       }
       else if 
       (classif !== 'hide'){
            pausebutton.classList.remove('hide');
            playbutton.classList.add('hide');
           }
    

       /// 
        interval_id = setInterval(autoslide, speed, 'autoslide');
    }

});


let interval_id; 
console.log(interval_id,'interval id');

if(!interval_id) {
    interval_id = setInterval(autoslide, 5000, 'autoslide');
}


//PAUSE EVENT LISTENER 
let pauseclick = pausebutton.addEventListener('click', function(event)
{
   // console.log(autoslideInterval, 'BEFORE');
    clearInterval(interval_id);
    interval_id = null;
    playbutton.classList.toggle('hide');
    pausebutton.classList.toggle('hide');
    //playbutton.classList.add('show');
    //pausebutton.classList.add('hide');

   // clearInterval(autoslideInterval2);
  //  console.log(autoslideInterval, 'AFTER');
});
//console.log(autoslideInterval, 'autoslideInterval');
// var playclickcounter = 0;
/* function isEven(n) {
    return n % 2 == 0;
 } */
let playclick = playbutton.addEventListener('click', function (event)
{
    if(!interval_id) {
        interval_id = setInterval(autoslide, 5000, 'autoslide');
    }
    console.log(interval_id,'interval id2');
    playbutton.classList.toggle('hide');
    pausebutton.classList.toggle('hide');
    // alert('play');
   /*  playclickcounter++;
    console.log(isEven(playclickcounter));
   
    console.log(playclickcounter,'playclickcounter'); */
    
 //   clearInterval(autoslideInterval);
    // autoslider();
 
});

function autoslider() {
    var autoslideInterval = setInterval(autoslide, 5000, 'autoslide');
}

function thumbnailPress(event) {
     //console.log(event.target.id);
     console.log(event, 'event');
     let idclean = event.target.id.slice(3); 
     //console.log(idclean, 'idclean');
   
    //make sure click on image - not if click on margin by mistake
    if(event.target.nodeName == 'IMG')  {
        // changeSlide(idclean);
        Slider(idclean);
    }

    
}
function autoslide() {
    //will be triggered by setInterval
       let parentdiv = document.querySelector('#mainphotodiv');
      const currentDiv = document.querySelector('.mainphoto');
      //get current id from imgid
      let current_photo_index = currentDiv.id.slice(3); 
      let current_photo_index_int = current_photo_index*1;
     // var new_photo_index = 0;
      console.log(current_photo_index_int,'current index integer');
      let totalimages = myImages.length;
      let totalimagesAdjusted = totalimages - 1; //last index has -1 value from total array length
      console.log(totalimagesAdjusted,'totalimagesAdjusted');
    if (current_photo_index_int === totalimagesAdjusted) {
       var new_photo_index = 0;
       console.log(new_photo_index,'new_photo_index1');
      }
      else {
       // new_photo_index++;
        var new_photo_index = current_photo_index_int + 1; 
        console.log(new_photo_index, 'new_photo_index2');
      } 
      Slider(new_photo_index);
   /*    let mainphoto = document.createElement('img');
      mainphoto.id = `img${new_photo_index}`;
      mainphoto.src = myImages[new_photo_index];
      mainphoto.className = `mainphoto ${getImgOrientReturnClass(mainphoto)} fade`;
      // parentdiv.appendChild(mainphoto);
      parentdiv.replaceChild(mainphoto,currentDiv);
        */
   

     let nextimg_thumbnail = document.querySelector('.thumb');
     //console.log(nextimg_thumbnail,'nextimg_thumbnail');
     let positioninside = nextimg_thumbnail.offsetLeft;
     console.log(positioninside, 'offsetleft');
     let thumbG = document.querySelector('.thumbcontainer');
     thumbG.scrollLeft = positioninside;
          
  }
function buttonPressRL(event) {
    //get id of image clicked 
    //function get image id of thumbnail clicked
    const get_image_id = () => {
        let imageid = event.target.id;
        return imageid;//
    } 
    get_image_id();
   // console.log(get_image_id(), 'get_image_id()');

     
   parentdiv.addEventListener('click', clickOnThumb);
     


   console.log('clicked');
  let eventtarget; 
  if(event !== 'autoslide') {
        eventtarget = event.target.id;
    }

    let imgcounter = `img${counter}`;
    console.log(imgcounter, 'imgcounter');
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
/* let clickresume = resume.addEventListener('click', function(){
    console.log('resume');
   autoslideInterval2 = setInterval(buttonPressRL, 5000, 'autoslide');
   
}); */
//PAUSE AUTOMATIC SLIDER - EVENT LISTENER
/* let pauseEvent = pause.addEventListener('click', function() {
    clearInterval(autoslideInterval);
    clearInterval(autoslideInterval2);
}); */

//CREATE AUTOMATIC SLIDER
// let autoslideInterval = setInterval(nextslide, 5000, 'autoslide');

//OLD STUFF
/* function changeSlide(newphotoindex) {
   
    //console.log(newphotoindex, 'newphotoindex');
     const parentdiv = document.querySelector('.mainphotodiv');
      //HIDE CURRENT SLIDE
     const currentDiv = document.querySelector('.mainphoto');
    // currentDiv.style.display = 'none';  
  
     let img = document.createElement('img');
     img.id = `img${newphotoindex}`;
     img.src = `${myImages[newphotoindex]}`;
     img.className = 'mainphoto';
     //orientation related 
     // let img_width = img.naturalWidth;
     //let img_height = img.naturalHeight
     // img.className = `${orientation_cssclass}`;
          
     //parentdiv.appendChild(img);
     parentdiv.replaceChild(img,currentDiv);
     console.log(img);
     
    //MAYBE INNER HTML IS MUCH BETTER HERE 
 } */
 /////////////////////////////////////////////////
 
//first image


/* const FirstSlide = () => {
    let photoindex = 0;
    let parentdiv = document.querySelector('#mainphotodiv');
    
    let mainphoto = document.createElement('img');
    mainphoto.id = 'img0';
    mainphoto.src = myImages[photoindex];

    // console.log(mainphoto, 'mainphoto');

    let mainphoto_width = mainphoto.naturalWidth;
    let mainphoto_height = mainphoto.naturalHeight;

    console.log(mainphoto_width, 'mainphoto_width');
    console.log(mainphoto_height, 'mainphoto_height');
    //for class name - get orientation
    if(mainphoto_width > mainphoto_height) {
    //  orientation = 'landscape';
        //thumbheight = '100px';
    // console.log(orientation);
        var landscapemainphoto = 'landscape-desktop';
       //return landscapemainphoto;
    }
    else if (mainphoto_height > mainphoto_width) {
        var landscapemainphoto = 'portrait-desktop';
      //  return landscapemainphoto;
    }  /**/
//${getImgOrientReturnClass(landscapemainphoto)}
/*     mainphoto.className = `mainphoto `;
    console.log(mainphoto, 'imgObject');
    console.log(landscapemainphoto,'landscapemainphoto');
   parentdiv.appendChild(mainphoto);

} */

//FirstSlide();


//here for clicks works