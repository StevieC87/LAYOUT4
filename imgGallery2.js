

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

            img2.className = `${orientation_cssclass}`;
          
           parentdiv.appendChild(img2);

            let newimg = document.querySelector(`#img${index}`);
     

        });
    
}

thumbnails(myImages);

//FIRST IMAGE DISPLAY - WORKS

const mainphotofirst = () => {
    let parentdiv = document.querySelector('.mainphotodiv');
    let firstphoto = myImages[0];
    let img2 = document.createElement('img');
    img2.id = `img0`;
    img2.src = myImages[0];
    img2.className = 'mainphoto';
    // img2.classList('mainphoto');
   //fade imgclass
    //let img_width = img2.naturalWidth;
    // let img_height = img2.naturalHeight
    parentdiv.appendChild(img2);
}
mainphotofirst();
//COULD MAYBE ALSO MAYBE MAKE FUNCTION - TO E.G. CREATE OBJECT, APPEND CHILD, BASED ON INDED NUMBER ONLY AS PARAMETER





//FOR CLICKS - NOT WORKING - PAUSED

const pause = document.querySelector('#buttonpause');
const buttonLeft = document.querySelector('#buttonleft');
const buttonRight = document.querySelector('#buttonright');
const resume = document.querySelector('#buttonresume');
const parentdiv = document.querySelector('.thumbcontainer');

// EVENT LISTENER ON BUTTONS LEFT RIGHT
let clickright = buttonRight.addEventListener('click', function(event)
    {
        buttonPressRL(event);
    })
let clickleft = buttonLeft.addEventListener('click', function(event)
    {
        buttonPressRL(event);
    })
// THUMBNAIL PHOTO PRESS - EVENT LISTENER
let thumbnail_click = parentdiv.addEventListener('click', function(event)
{
    thumbnailPress(event);
})
//CREATE AUTOMATIC SLIDER
// let autoslideInterval = setInterval(buttonPressRL, 5000, 'autoslide');

//FUNCTION SLIDE DOESNT WORK - PAUSED TO WORK ON FIRST IMAGE


function thumbnailPress(event) {
     //console.log(event.target.id);
     let idclean = event.target.id.slice(3); 
     //console.log(idclean, 'idclean');
   
    changeSlide(idclean);
}

function changeSlide(newphotoindex) {
   
   
    const parentdiv = document.querySelector('.mainphotodiv');
     //HIDE CURRENT SLIDE
    const currentDiv = document.querySelector('.mainphoto');
    currentDiv.style.display = 'none';  
 
    let img = document.createElement('img');
    img.id = `img${newphotoindex}`;
    img.src = `${myImages[newphotoindex]}`;
    img.className = 'mainphoto';
    //orientation related 
    // let img_width = img.naturalWidth;
    //let img_height = img.naturalHeight
    // img.className = `${orientation_cssclass}`;
         
    //parentdiv.appendChild(img);
    parentdiv.replaceChild(img, currentDiv);
    console.log(img);
    
    //MAYBE INNER HTML IS MUCH BETTER HERE 




   // let newimg = document.querySelector(`#img${newphotoindex}`);

     //CREATE DIV TO APPEND TO PARENT#
    /*  const onelessdiv = document.createElement('div');
     onelessdiv.classList.add('thumb');
     onelessdiv.setAttribute("id", `imgdiv${index}`);
    // let visibility;
    // here only display the first one ini ially, others: hidden 
     onelessdiv.innerHTML = `
         <img id="img${index}" class="imgclass ${orientation_cssclass}" src="${myImages[index]}">
         `;     */
         //ALTERNARTIVE WE CAN DO HERE
    

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
let clickresume = resume.addEventListener('click', function(){
    console.log('resume');
   autoslideInterval2 = setInterval(buttonPressRL, 5000, 'autoslide');
   
});
//PAUSE AUTOMATIC SLIDER - EVENT LISTENER
let pauseEvent = pause.addEventListener('click', function() {
    clearInterval(autoslideInterval);
    clearInterval(autoslideInterval2);
});
