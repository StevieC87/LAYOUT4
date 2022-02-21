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



//FUNCTION CREATE IMAGES IN THE BEGINNING
const allimages = () => {
    let screenwidth = screen.width;
    let screenheight = screen.height;
    let widthnew;
    let availablewidth = parentdiv.offsetWidth;
    //get css variable max-width
    let getcssmaxwidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--width');
    let csswidthclean = getcssmaxwidth.slice(0,4);
    let cssmaxwidth = csswidthclean*1;  //turn it into integer

   //console.log(screenwidth, 'availablewidth');
    //console.log(screenwidth, 'screenwidth');
    //console.log(screenheight, 'screenheight');

    /* if(availablewidth < 700) {
        var heighta = screenwidth * 0.667;
        console.log('availablewidth < 700');

    } */
    myImages.forEach((element, index) => {
        //Create image object for thumbnail, and add url src from index , create id with name of index             
        const startdelay = setTimeout(() => {
        //   const parentdiv2 = document.querySelector('#parentdiv2');
            const parentdiv2 = document.querySelector('#mainphotodiv2');
            let img2 = document.createElement('img');
         
            img2.id = 'img' + index; // concatenate  e.g. img3 
            img2.src = `${myImages[index]}`;  //get url for image src from 
            img2.setAttribute("name", `mainimage`);
          //  img2.style = 'display: none';
            if(index === 0) {
                classvisible = 'visible';
                currentSlide = 0;
            }
            else {
                classvisible = 'hidden';
        
            }
          //  img2.className = `mainphoto ${orientation} mainphoto2 ${classvisible}`;
          img2.className = `mainphoto mainphoto2 ${classvisible}`;
          parentdiv2.appendChild(img2);
        } 
        , 200);        
        });
    
}
allimages();

//then call function to style them after they've been created presumably

const startdelay = setTimeout(() => {
   // alert('hello');
    let imagesarraynew = document.querySelectorAll('[name="mainimage"]');
    console.log(imagesarraynew, imagesarraynew);
       
    imagesarraynew.forEach(function(image) {
        console.log(image, 'image');
        image.style.border = '10px solid red';

        let orientation = getImgOrientReturnClass(image);//calls orientation function to return 
        let iffirst;     
       
      });

  }, 300);


 function newnew() {   
  //  setTimeout(() => { 
      
   
 

    if(availablewidth < 700) {
        var heighta = availablewidth * 0.677;
        var widtha = availablewidth;
        
        if(orientation == 'portrait-desktop') {
        //  alert(orientation);
        var heighta = availablewidth * 0.677;
        var widtha = heighta * 0.677;
        let imgportraithalf = widtha/2;
        let cssclassnewleft = `calc(50% - ${imgportraithalf}px)`;
        img2.style.left = cssclassnewleft;

        }
    }

    else if(availablewidth > 700) {
        console.log('availablewidth > 700');
        if(availablewidth >= cssmaxwidth) {
            console.log(' if(availablewidth >= cssmaxwidth)');
            var widtha = 790;
            var heighta = 790 * 0.67 -100;
        //    var heighta = getcssmaxwidth * 0.667;       
            }
        else {
            console.log('else');
            var widtha = availablewidth;
            //var heighta = availablewidth * 0.66;
            var heighta =  availablewidth * 0.67 - 100;
        }
        if(orientation == 'portrait-desktop') {
            //  alert(orientation);
        //  var heighta = availablewidth * 0.6 -5;
        var heighta = widtha * 0.667 -100;
            var widtha = heighta * 0.6;
            let imgportraithalf = widtha/2;
            let cssclassnewleft = `calc(50% - ${imgportraithalf}px)`;
            img2.style.left = cssclassnewleft;

        }
    }

    parentdiv2.style.height = `${heighta}px`;
    parentdiv2.style.width = `${widtha}px`;
    img2.style.height = `${heighta}px`;
//   if(maxwidtha) { img2.style.maxWidth = '800px';}
    img2.classList.add('mainphotofullsize');
    img2.style.width = `${widtha}px`;
    
    document.querySelector('.slideOuterContainer').style.height = `${heighta + 100}px`;
    document.querySelector('.slideOuterContainer').style.width = `${widtha}px`;
    




 }

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
    
   currentphoto1.classList.remove('fade');
   nextphoto.classList.add('fade');
   nextphoto.classList.remove('hidden');
   nextphoto.classList.add('visible');
  
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
       (classif !== 'hidden'){
            pausebutton.classList.remove('hidden');
            playbutton.classList.add('hidden');
           }
        intervalAutoslideID = setInterval(autoslide, speed, 'autoslide');
    }

});
 let intervalAutoslideID; 

//**** SET INTERVAL HERE ******* */
if(!intervalAutoslideID) {
    intervalAutoslideID = setInterval(autoslide, 5000, 'autoslide');
} 
//PAUSE CLICK  EVENT LISTENER 
let pauseclick = pausebutton.addEventListener('click', function(event)
{
   // console.log(autoslideInterval, 'BEFORE');
    clearInterval(intervalAutoslideID);
    intervalAutoslideID = null;
    playbutton.classList.toggle('hidden');
    pausebutton.classList.toggle('hidden');
    //playbutton.classList.add('show');
    //pausebutton.classList.add('hide');

   // clearInterval(autoslideInterval2);
  //  console.log(autoslideInterval, 'AFTER');
});
//PLAY CLICK EVENT LISTENER
let playclick = playbutton.addEventListener('click', function (event)
{
    let defaultspeed = 5000;
    let speed;
    let sliderspeed = document.querySelector('#rangeSlider').value;
    if(sliderspeed == 1) {
        speed = 6000;
    }
    else if  (sliderspeed == 2) {
        speed = 4000;
    }
    else if (sliderspeed == 3) {
        speed = 2000;
    }
    
    if(!intervalAutoslideID) {
        intervalAutoslideID = setInterval(autoslide, speed, 'autoslide');
    }
    console.log(intervalAutoslideID,'interval id2');
    playbutton.classList.toggle('hidden');
    pausebutton.classList.toggle('hidden');
    // alert('play');
   /*  playclickcounter++;
    console.log(isEven(playclickcounter));
   
    console.log(playclickcounter,'playclickcounter'); */
    
 //   clearInterval(autoslideInterval);
    
 
});



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
          new_photo_index = currentSlide*1 + 1; 
          console.log(new_photo_index, 'new_photo_index2');
        } 
        Slider(new_photo_index);
       // console.log(new_photo_index);
  }

  //CREATE LOOP WITH IMAGES TO APPLY STYLING AND CLASS, ONCE THEY'VE BEEN CREATED - TEST IT
 
  

     //if however window height is less than that height we set, then the height of the image must be the height of the window - 100 for thumbnails


     
      // img2.style. = `${widtha}px`;
        

      /*   if(orientation == 'portrait-desktop') {
            //imgObject.naturalWidth;
            //let imgportraitwidth = img2.naturalWidth;
            
            let newa = heighta * 0.67;
            let newhalf = newa / 2;
            console.log(newhalf, 'NEWHAAAAAAALF');

           let cssclassnewleft = `calc(50% - ${newhalf}px)`;
           img2.style.left = cssclassnewleft; */
   

         /*    console.log('imgportraitwidth',imgportraitwidth);
            let imgportraithalf = imgportraitwidth/2;
            console.log('imgportraithalf',imgportraithalf);
           let cssclassnewleft = `calc(50% - ${imgportraithalf}px)`;
           img2.style.left = cssclassnewleft;
    */
          // img2.height = 'fd';
           
        /*  } */

          /*      else if(availablewidth > 700 && screenheight < screenwidth) {
            if(availablewidth >= cssmaxwidth) {
                var widtha = 790;
                var heighta = widtha * 0.67 - 100;
            }
            else {
                var widtha = availablewidth;
                var heighta = availablewidth * 0.67 - 100;
            }
        //  var widtha = 750;
           // var heighta = widtha * 0.67;
            console.log('widtha', widtha);
            console.log('availablewidth < 700 && screenheight < screenwidth');
            }
        else if(availablewidth > 700 && screenheight > screenwidth) {
            if(availablewidth >= cssmaxwidth) {
                var widtha = 790;
                var heighta = widtha * 0.67 - 100;
            }
            else {
                var widtha = availablewidth;
                var heighta = availablewidth * 0.67 - 100;
            }
        //  var widtha = 750;
           // var heighta = widtha * 0.67;
            console.log('widtha', widtha);
            console.log('availablewidth < 700 && screenheight > screenwidth');
        } */
       /*  else if(availablewidth > 700) {
        
    
    
        } */
        /* else {
        var heighta = 700 * 0.667;
        console.log(heighta,'heighta = 700 * 0.667');
        } */
          /*  if(availablewidth < 700 && screenheight < screenwidth) {
           // var widtha = screenheight * 1.33;
           var widtha = availablewidth;
           var heighta = availablewidth * 0.67;
          // var widtha = screenheight * 1.33;;
            console.log('widtha', widtha);
            console.log('availablewidth < 700 && screenheight < screenwidth');
        }
        else if(availablewidth < 700 && screenheight > screenwidth) {
          //  -100
            var heighta = availablewidth * 0.677;
            var widtha = availablewidth;
            
            if(orientation == 'portrait-desktop') {
              //  alert(orientation);
              var heighta = availablewidth * 0.677;
              var widtha = '';

            }
    //TRY WITH CSS INSTEAD
            console.log('widtha', widtha);
            console.log('availablewidth < 700 && screenheight > screenwidth');
    
        } */