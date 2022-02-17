

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
            img2.id = `thumb${index}`;
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

//            let newimg = document.querySelector(`#img${index}`);
     

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
  //  alert(photoindex);
    let parentdiv = document.querySelector('#mainphotodiv');
    let currentMainphoto = document.querySelector('.mainphoto'); 
    let currentMainphotoID = currentMainphoto.id.slice(3);
    let currentThumbnail = document.querySelector(`#thumb${currentMainphotoID}`); 
    console.log(currentThumbnail,'currentThumbnail');
   // currentMainphoto.style.display = 'none';  
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
    parentdiv.replaceChild(mainphoto,currentMainphoto);
    var scrollthumb = document.getElementById("img7");
    var thumbcontainer1 = document.getElementById("thumb_container");
    console.log(thumbcontainer1, 'thumbcontainer1');



    let idthumb = `thumb${photoindex}`;
    let new_thumbnail = document.querySelector(`#thumb${photoindex}`);    
    console.log(currentThumbnail, 'CURRENT THUMBNAIL******');
    if(currentThumbnail) {
        currentThumbnail.classList.remove('thumbfocus');
    }
    //DEPENDS IF IT'S AUTOSLIDER 
    //IF IT'S THUMBNAIL - WE GET NEXT THUMBNAIL - BY THE ONE WE CLICKIGN ON
    //IF IT'S NEXT
   
    new_thumbnail.classList.add('thumbfocus');
    
    console.log(new_thumbnail.offsetLeft, 'offsetleft2');
    console.log(new_thumbnail,'new_thumbnail');

    let new_thumbnail_leftpx =  new_thumbnail.offsetLeft;
    console.log(new_thumbnail_leftpx,'new_thumbnail_leftpx');
   //first get offset (position of thumbnail inside the thing)
   //let nextimg_thumbnail = document.querySelector('.thumb');
   //console.log(nextimg_thumbnail,'nextimg_thumbnail');
   //let positioninside = nextimg_thumbnail.offsetLeft;
   //console.log(positioninside, 'offsetleft');
    let thumbG = document.querySelector('.thumbcontainer');
  
    let thumb_container_width = thumbG.offsetWidth; 
    let new_thumbnail_rightpx = new_thumbnail_leftpx + 100; //plus 100 pixels width of thumbnail max size 
    console.log(thumb_container_width);
    if(new_thumbnail_rightpx > thumb_container_width) {
        thumbG.scrollLeft = new_thumbnail_leftpx;
    }
    else {
        thumbG.scrollLeft = 0;
    }



   

   //get width of container 
   //if offset with left , is more than width of container -> then : scroll intro view 

   // scrollthumb.scrollIntoView();
}
Slider(0);

const parentdiv = document.querySelector('.thumbcontainer');
const pausebutton = document.querySelector('#pausediv');
const playbutton = document.querySelector('#playdiv');
const rangeslider = document.querySelector('#rangeSlider');
let speed;

//  EVENT LISTENER - THUMBNAIL PHOTO PRESS
let thumbnail_click = parentdiv.addEventListener('click', function(event)
    {
        thumbnailPress(event);
    })
//EVENT LISTENER - NEXT , PREVIOUS PHOTO ARROW 
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
//PAUSE CLICK  EVENT LISTENER 
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
//PLAY CLICK EVENT LISTENER
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
    
 
});
//AUTOMATIC SLIDER FUNCTION  - WITH COUNTER FOR ARRAY ETC
function autoslider() {
    var autoslideInterval = setInterval(autoslide, 5000, 'autoslide');
}
//FUNCTION: PRESS THUMBNAIL
function thumbnailPress(event) {
     //console.log(event.target.id);
     console.log(event, 'event');
     let idclean = event.target.id.slice(5); 
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
      const currentMainphoto = document.querySelector('.mainphoto');
      //get current id from imgid
      let current_photo_index = currentMainphoto.id.slice(3); 
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
   
  }



let autoslideInterval2;
