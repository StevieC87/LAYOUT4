//ARRAY OF IMAGES
const myImages = [
    
    "./images/dummy2/1.jpg",
    "./images/dummy2/3.jpg",
    "./images/dummy2/4.jpg",
    "./images/dummy2/5.jpg",
    "./images/dummy2/8.jpg",
    "./images/dummy2/9.jpg",
    "./images/dummy2/10.jpg",
    "./images/dummy2/6.jpg",
    "./images/dummy2/7.jpg"
];
//GET TOTAL NUMBER OF IMAGES  
const totalImages = myImages.length; // total images
const totalImagesIndex = totalImages -1; //get index of last image
 let currentSlide;  //set index of current child
//slider variables
let parentdiv = document.querySelector('#mainphotodiv');
// let currentphoto = document.querySelector('.mainphoto');
let currentphoto = document.querySelector(`img${currentSlide}`);
let currentMainphoto = document.querySelector('.mainphoto'); 
//thumbnail variables
let parentdivthumb = document.querySelector('.thumbcontainer');
//RETURNS IMAGE ORIENTATION CSS CLASS NAME, if we give it image object when creating it
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
//FUNCTION TO CREATE IMAGE , AND GIVE IT ID OF E.G. IMG3, using index 
const createImg = (index, idprefix,height = '') => {
    

    
    return img2;
}

function thumbnails(imgsarray) {
    let orientation;
    let thumbheight;
    let thumbwidth;
    var orientation_cssclass;
  //  let parentdivthumb = document.querySelector('.thumbcontainer');
   //LOOP OVER IMAGES ARRAY, CREATE THUMBNAIL IMAGES
    myImages.forEach((element, index) => {
            //Create image object for thumbnail, and add url src from index , create id with name of index    
            let img2 = document.createElement('img');
            img2.id = 'thumb' + index; // concatenate  e.g. img3 
            img2.src = `${myImages[index]}`;  //get url for image src from array
            let orientation = getImgOrientReturnClass(img2);//calls orientation function to return the class name for this image;
            img2.className = `thumb ${orientation}`;
            parentdivthumb.appendChild(img2);
        });
    
}
thumbnails(myImages);

const allimages = () => {
    myImages.forEach((element, index) => {
        //Create image object for thumbnail, and add url src from index , create id with name of index             
     // let img2 = createImg(index, 'thumb', 100);
     const startdelay = setTimeout(() => {
     //   const parentdiv2 = document.querySelector('#parentdiv2');
        const parentdiv2 = document.querySelector('#mainphotodiv2');
        let img2 = document.createElement('img');
        img2.id = 'img' + index; // concatenate  e.g. img3 
        img2.src = `${myImages[index]}`;  //get url for image src from array

        let orientation = getImgOrientReturnClass(img2);//calls orientation function to return 
      let iffirst;
       if(index === 0) {
        classvisible = 'visible';
        currentSlide = 0;
       }
       else {
        classvisible = 'hidden';
   
       }
        img2.className = `mainphoto ${orientation} mainphoto2 ${classvisible}`;

        let screenwidth = screen.width;
        let availablewidth = parentdiv.offsetWidth;
        if(availablewidth < 700) {
            var heighta = availablewidth * 0.667;
        }
        else {
        var heighta = 700 * 0.667;
        }

        parentdiv2.style.height = `${heighta}px` ;
        img2.height = heighta;

      parentdiv2.appendChild(img2);
       
     } 
     , 200);        
    });
    
}
allimages()

//FUNCTION THAT CHANGES THE IMAGE, BASED ON THE INDEX PROVIDED
const Slider = (photoindex) => { 
    //function Slider(photoindex) {
  //  alert(photoindex);
  
   // let currentMainphoto = document.querySelector('.visible'); 
   let currentphoto1 = document.querySelector(`#img${currentSlide}`); 
   console.log(currentphoto1,'currentphoto1currentphoto1');
   let nextphoto = document.querySelector(`#img${photoindex}`);
   console.log(nextphoto, 'NEXTPHOTO******************');
    
   currentphoto1.classList.remove('visible');
   currentphoto1.classList.add('hidden');
   
   nextphoto.classList.remove('hidden');
   nextphoto.classList.add('visible');
  
   // alert(currentphoto1.id);
    //console.log(currentphoto1, 'currentphoto1');
    //console.log(nextphoto, 'nextphoto');
  // currentphoto1.classList.add('hidden');

  //  let currentMainphotoID = currentMainphoto.id.slice(3);
   // let currentThumbnail = document.querySelector(`#thumb${currentMainphotoID}`); 
    let currentThumbnail = document.querySelector(`#thumb${currentSlide}`); 

    var thumbcontainer1 = document.getElementById("thumb_container");
    //console.log(thumbcontainer1, 'thumbcontainer1');
    let idthumb = `thumb${photoindex}`;
    let new_thumbnail = document.querySelector(`#thumb${photoindex}`);    
    console.log(currentThumbnail, 'CURRENT THUMBNAIL******');
    if(currentThumbnail) {
        currentThumbnail.classList.remove('thumbfocus');
    }
    if(new_thumbnail) {
        new_thumbnail.classList.add('thumbfocus');
        console.log(new_thumbnail.offsetLeft, 'offsetleft2');
        console.log(new_thumbnail,'new_thumbnail');
    
        let new_thumbnail_leftpx =  new_thumbnail.offsetLeft;
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
    }
    currentSlide = photoindex;
    console.log(currentSlide, 'COUUUUUNTER');
}

 //Slider(0);
const pausebutton = document.querySelector('#pausediv');
const playbutton = document.querySelector('#playdiv');
const rangeslider = document.querySelector('#rangeSlider');
const button_left_div = document.querySelector('#buttonleftdiv');
let speed;

/*-------------------- EVENT LISTENERS START HERE ---------------------- */

 //   currentSlide = 0;
  
//  EVENT LISTENER - THUMBNAIL PHOTO PRESS
let thumbnail_click = parentdivthumb.addEventListener('click', function(event)
    {
        if(event.target.nodeName == 'IMG')  {
            // changeSlide(idclean);
              let idclean = event.target.id.slice(5); 
            Slider(idclean);
            console.log(idclean, 'idcleanidcleanidclean');
        }

    })
//EVENT LISTENER - NEXT , PREVIOUS PHOTO ARROW 
//clieck on next button
currentSlide = 0;
const button_right_div = document.querySelector('#buttonrightdiv');
let click_next = button_right_div.addEventListener('click', function(event)
{
    let nextslide;
    console.log(currentSlide, 'currentSlide %%%%%%%%%%%%%%%%%%' );
    if(currentSlide == totalImagesIndex) {
        nextslide = 0;
    }
    else{
        nextslide = currentSlide*1 +1;
        console.log('nextslide CLICKNEXT added', nextslide);
    }
    console.log(nextslide, 'nextslide @@@@@@@@@@@@@@@@@@');
    Slider(nextslide);
});

let click_back = button_left_div.addEventListener('click', function(event)
{
    let nextslide;
    if(currentSlide == 0) {
        nextslide = totalImagesIndex;
    }
    else {
        nextslide = currentSlide - 1;
    }
    Slider(nextslide);
});
//EVENT LISTENER - SLIDER RANGE - SLIDER SPEED
let rangeevent = rangeslider.addEventListener('input', function(event){
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
    clearInterval(intervalAutoslideID);
    intervalAutoslideID = null;
    if(!intervalAutoslideID) {
        let classif = playbutton.getAttribute("class");
        if 
       (classif !== 'hide'){
            pausebutton.classList.remove('hide');
            playbutton.classList.add('hide');
           }
        intervalAutoslideID = setInterval(autoslide, speed, 'autoslide');
    }

});
 let intervalAutoslideID; 

//**** SET INTERVAL HERE ******* */
if(!intervalAutoslideID) {
  //  intervalAutoslideID = setInterval(autoslide, 5000, 'autoslide');
} 
//PAUSE CLICK  EVENT LISTENER 
let pauseclick = pausebutton.addEventListener('click', function(event)
{
   // console.log(autoslideInterval, 'BEFORE');
    clearInterval(intervalAutoslideID);
    intervalAutoslideID = null;
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
    if(!intervalAutoslideID) {
        intervalAutoslideID = setInterval(autoslide, 5000, 'autoslide');
    }
    console.log(intervalAutoslideID,'interval id2');
    playbutton.classList.toggle('hide');
    pausebutton.classList.toggle('hide');
    // alert('play');
   /*  playclickcounter++;
    console.log(isEven(playclickcounter));
   
    console.log(playclickcounter,'playclickcounter'); */
    
 //   clearInterval(autoslideInterval);
    
 
});





//AUTOMATIC SLIDER FUNCTION  - WITH currentSlide FOR ARRAY ETC
function autoslider() {
    //  var autoslideInterval = setInterval(autoslide, 5000, 'autoslide');
  }
  //FUNCTION: PRESS THUMBNAIL
  
  
  function autoslide() {
      //will be triggered by setInterval
        //const currentMainphoto = document.querySelector('.mainphoto');
        //get current id from imgid
         
        //  let current_photo_index = currentMainphoto.id.slice(3); 
      //  let current_photo_index_int = current_photo_index*1;
       // var new_photo_index = 0;
      
        let totalimages = myImages.length;
        totalImagesIndex
        let totalimagesAdjusted = totalImagesIndex; //last index has -1 value from total array length
        console.log(totalimagesAdjusted,'totalimagesAdjusted');
        let new_photo_index;
      if (currentSlide === totalimagesAdjusted) {
         new_photo_index = 0;
         console.log(new_photo_index,'new_photo_index1');
        }
        else {
          new_photo_index = currentSlide + 1; 
          console.log(new_photo_index, 'new_photo_index2');
        } 
        Slider(new_photo_index);
       // console.log(new_photo_index);
  }


  /* //FUNCTION TO CREATE THUMBNAILS

//FUNCTION TO CREATE FIRST IMAGE ON FIRST LOAD 
const Slider1stImage = () => {
    
    let mainphoto = document.createElement('img'); 
    mainphoto.id = 'img' + 0; // concatenate  e.g. img3 
    mainphoto.src = `${myImages[0]}`;  //get url for image src from array
    console.log(mainphoto, 'img2');
   
    setTimeout(() => {
        let orientation = getImgOrientReturnClass(mainphoto);//calls orientation function to return the class name for this image;
        console.log(orientation, 'orientation !!!!!!!!!!!!');
        mainphoto.className = `mainphoto ${orientation}`;
        
        let availablewidth = parentdiv.offsetWidth; 
        let heighta;
        //get css variable max-width
        let getcssmaxwidth = getComputedStyle(document.documentElement)
            .getPropertyValue('--width');
        let csswidthclean = getcssmaxwidth.slice(0,4);
        let cssmaxwidth = csswidthclean*1;  //turn it into integer
        //SET HEIGHT OF IMAGE BASED ON AVAILABLE WINDOW WIDTH and max-width CSS
        if(availablewidth >= cssmaxwidth) { //if available window width of cssmax-width or more
            let heighta1 = cssmaxwidth-100 // (so if max-width: 800px, height: 700px * 0.67)
            heighta = heighta1 * 0.667;
            console.log(heighta, 'heighta'); //set img height 2/3 of max-width
        }
        else if(availablewidth < cssmaxwidth) {
            heighta = availablewidth * 0.667; //set img height to 2/3 of screenwidth
        }
        mainphoto.height = heighta; //set height of img
        parentdiv.replaceChild(mainphoto,currentMainphoto);
    }, 50);
    currentSlide = 0;
   }
// Slider1stImage();
 */
/*     function getOrientation (img) {
                    

    } */

      /*  let img_width = img2.naturalWidth;
            let img_height = img2.naturalHeight
          */
          /*   //for class name - get orientation
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

            img2.className = `thumb ${orientation_cssclass}`; */


            /* /*  let img2 = document.createElement('img');
            img2.id = `thumb${index}`;
            img2.src = `${myImages[index]}`;
           
            let orientation1 = getImgOrientReturnClass(img2);
         
            img2.className = `thumb ${orientation1}`; */ 

             /* let currentMainphotoID = currentMainphoto.id.slice(3);
    let currentThumbnail = document.querySelector(`#thumb${currentMainphotoID}`); 
 //   console.log(currentMainphoto,'currentThumbnail');
   // currentMainphoto.style.display = 'none';  
     let mainphoto = document.createElement('img');
    mainphoto.id = `img${0}`;
    mainphoto.src = myImages[0];
    console.log(mainphoto.src, 'mainphoto.src');
 */



    

    /*  if(availablewidth < cssmaxwidth) {
        //if window width less than 700px, height of image will always be 2/3rds of window width
        var heighta = availablewidth * 0.667;
     }
     else if(availablewidth >= cssmaxwidth) {
            var heighta = cssmaxwidth * 0.667;
            //  var heighta = 467;
            //otherwise, if e.g. full screen, the height is fixed to 2/3 of max-width
     }
     else {
        var heighta = cssmaxwidth * 0.667;
     } */

     
            
           /*  if(orientation === 'landscape-desktop') {
            //height should be 2/3rds of width
            if(availablewidth >= cssmaxwidth) { //if available window width of cssmax-width or more
                var heighta1 = cssmaxwidth-100 // (so if max-width: 800px, height: 700px * 0.67)
                var heighta = heighta1 * 0.667;
                console.log(heighta, 'heighta'); //set img height 2/3 of max-width
            }
            else if(availablewidth < cssmaxwidth) {
                var heighta = availablewidth * 0.667; //set img height to 2/3 of screenwidth
            }

        }
        else if(orientation === 'portrait-desktop') {
            if(availablewidth >= cssmaxwidth) { //and available window width of max-width or more
            var heighta1 = cssmaxwidth-100 // (so if max-width: 800px, height: 700px * 0.67)
            var heighta = heighta1 * 0.667; //set img height to maximum - 100px of height, for the thumbnails        
            }
            else if(availablewidth < cssmaxwidth) {
                var heighta = availablewidth * 0.667;
            }
        } */

        /* function autoslide1() {
    //will be triggered by setInterval
      //const currentMainphoto = document.querySelector('.mainphoto');
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
 */

/* currentSlide = 0;
let click_next = button_right_div.addEventListener('click', function(event)
{
    let nextimg;
 
    console.log(currentSlide, 'currentSlide');
    if(currentSlide == totalImagesIndex) {
        nextimg = 0;
    }
        // else if(currentphoto_id < totalImagesIndex){
    else{
        nextimg = ++currentSlide;
    }
    console.log(nextimg, 'nextimg');
    Slider(nextimg);
});
 */
