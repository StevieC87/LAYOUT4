//ARRAY OF IMAGES
const myImages = [

    "images/dummy2/1.jpg",
    "images/dummy2/2.jpg",
    "images/dummy2/3.jpg",
    "images/dummy2/4.jpg",
    "images/dummy2/5.jpg",
    "images/dummy2/8.jpg",
    "images/dummy2/9.jpg",
    "images/dummy2/10.jpg",
    "images/dummy2/6.jpg",
    "images/dummy2/7.jpg"
];
//get total number of images
const totalImages = myImages.length;
//get index of last image
const totalImagesIndex = totalImages - 1;
//create counter variable
let currentSlide;

//grab elements 
const parentdiv = document.querySelector('#mainphotodiv');
let currentphoto = document.querySelector(`img${currentSlide}`);
let currentMainphoto = document.querySelector('.mainphoto');
const parentdivthumb = document.querySelector('.thumbcontainer');
const photoparentdiv = document.querySelector('#mainphotodiv2');
//more elements for event listeners
const pausebutton = document.querySelector('#pausediv');
const playbutton = document.querySelector('#playdiv');
const rangeslider = document.querySelector('#rangeSlider');
const button_back_div = document.querySelector('#buttonleftdiv');
const button_next_div = document.querySelector('#buttonrightdiv');
let speed; //create variable for slider speed


/****************** FUNCTION RETURN ORIENTATION OF IMAGE **********************/
const getImgOrientReturnClass = (imgObject) => {
    let mainphoto_width = imgObject.naturalWidth;
    let mainphoto_height = imgObject.naturalHeight;
    let landscapemainphoto;
    //for class name - get orientation
    if (mainphoto_width > mainphoto_height) {
        //  orientation = 'landscape';
        //thumbheight = '100px';
        // console.log(orientation);
        landscapemainphoto = 'landscape';
        return landscapemainphoto;
    }
    else if (mainphoto_height > mainphoto_width) {
        landscapemainphoto = 'portrait';
        return landscapemainphoto;
    }
};
/****************** CREATE THUMBNAILS FROM ARRAY **********************/
function thumbnails(imgsarray) {
    //LOOP OVER IMAGES ARRAY, CREATE THUMBNAIL IMAGES
    myImages.forEach((element, index) => {


        let imgid = 'thumb' + index; //create new imgid 
        let slideDynamicNew = `<img id="${imgid}" class="thumb " src="${myImages[index]}">`; //create img with template literal
        //create     div to put new img as innerHTML, then append it thumbnail container



        let divfirst = document.createElement('div');
        divfirst.innerHTML = slideDynamicNew;
        parentdivthumb.appendChild(divfirst);

    });
};
thumbnails(myImages);

/****************** CREATE IMAGES IN THE BEGINNING **********************/
const allimages = () => {

    //get width of div around img, to get width of available window space
    let availablewidth = parentdiv.offsetWidth;
    //console.log(availablewidth, 'availablewidth');
    //get max-width we have set as variable in css stylesheet
    let getcssmaxwidth = getComputedStyle(document.documentElement)
        .getPropertyValue('--width'); //e.g. 800px
    let csswidthclean = getcssmaxwidth.slice(0, 3); //remove px from the end
    let cssmaxwidth = csswidthclean * 1;  //convert into integer

    //LOOP THROUGH IMAGES ARRAY , AND CREATE IMAGES
    myImages.forEach((element, index) => {

        //create image inside setTimeout function otherwise it doesn't set the class
        const startdelay = setTimeout(() => {
            let height;
            let width;
            //create div element to append the image to
            //create image object to get orientation
            let img = document.createElement('img');
            img.id = 'img' + index; // concatenate for image id  e.g. img3 
            img.src = `${myImages[index]}`;  //get url for image src from array
            //pass img as parameter to orientation function
            let orientation = getImgOrientReturnClass(img);//calls orientation function to return  

            //if it's the first image in the array, set it to visible and set currentSlide to 0
            if (index === 0) {
                classvisible = 'visible';
                currentSlide = 0;
            }
            else {
                classvisible = 'hidden';

            }
            //create image class
            img.className = `mainphoto ${orientation} mainphoto2 ${classvisible}`;


            if (availablewidth < cssmaxwidth) {


                height = availablewidth * 0.677;
                width = availablewidth;
                if (orientation == 'portrait') {
                    height = availablewidth * 0.677;
                    width = height * 0.677;
                    let imgportraithalf = width / 2;
                    let cssclassnewleft = `calc(50% - ${imgportraithalf}px)`;
                    img.style.left = cssclassnewleft;
                }
            }
            else if (availablewidth >= cssmaxwidth) {
                width = 790;
                height = 790 * 0.67 - 100;
                if (orientation == 'portrait') {
                    height = width * 0.667 - 100;
                    width = height * 0.6;
                    let imgportraithalf = width / 2;
                    let cssclassnewleft = `calc(50% - ${imgportraithalf}px)`;
                    img.style.left = cssclassnewleft;

                }
            }
            photoparentdiv.style.height = `${height}px`;
            photoparentdiv.style.width = `${width}px`;
            img.style.height = `${height}px`;
            img.classList.add('mainphotofullsize');
            img.style.width = `${width}px`;

            document.querySelector('.slideOuterContainer').style.height = `${height + 100}px`;
            document.querySelector('.slideOuterContainer').style.width = `${width}px`;
            photoparentdiv.appendChild(img);
        }
            , 200);
    });

}
allimages();
/****************** SLIDE IMAGE BASED ON INDEX PROVIDED **********************/
const Slider = (photoindex) => {
    //get current photo
    let currentphoto1 = document.querySelector(`#img${currentSlide}`);
    //get new photo
    let nextphoto = document.querySelector(`#img${photoindex}`);

    //hide current photo using css + fade effect
    currentphoto1.classList.remove('visible');
    currentphoto1.classList.add('hidden');
    currentphoto1.classList.remove('fade');

    //make visible new photo + fade effect
    nextphoto.classList.add('fade');
    nextphoto.classList.remove('hidden');
    nextphoto.classList.add('visible');
    ''
    //remove 'focus' class on thumbnail of current picture
    let currentThumbnail = document.querySelector(`#thumb${currentSlide}`);
    currentThumbnail.classList.remove('thumbfocus');

    //add 'focus' class to thumbnail - of image we change to
    let new_thumbnail = document.querySelector(`#thumb${photoindex}`);
    new_thumbnail.classList.add('thumbfocus');

    //SET UP SCROLLING in thumbnail container
    //get width of thumbnail container
    let thumbG = document.querySelector('.thumbcontainer'); //get thumb container
    let thumb_container_width = thumbG.offsetWidth;

    //get px from the left , of new thumbnail, inside the thumbnail container
    let new_thumbnail_leftpx = new_thumbnail.offsetLeft;
    //get px from the right, of new thumbnail, isnide thumbnail cotnainer, adding 100px for thumbnail width
    let new_thumbnail_rightpx = new_thumbnail_leftpx + 155; //plus 155 pixels width of thumbnail width 
    //if position of right side of image, is more than width of thumbcontainer, so outside of the view, then scroll 
    if (new_thumbnail_rightpx > thumb_container_width) {
        thumbG.scrollLeft = new_thumbnail_leftpx; //thumbcontianer, scroll as many pixels to the right, as the offsetLeft position of the thumbnail
    }
    else {
        thumbG.scrollLeft = 0; //thumb container, scroll to left
    }
    currentSlide = photoindex;
}


/*********** THUMBNAIL CLICK - EVENT LISTENER ****************/
let thumbnail_click = parentdivthumb.addEventListener('click', function (event) {
    //we put event listener on container div of thumbnails
    //we check user clicked on an image, not e.g. on margin
    if (event.target.nodeName == 'IMG') {
        //get image's id, that we clicked on, to pass to slider function as parameter
        let idclean = event.target.id.slice(5);
        Slider(idclean);
    }

})
/*********** NEXT BUTTON - EVENT LISTENER ****************/
let click_next = button_next_div.addEventListener('click', function (event) {
    //change new photo index based on current index
    let nextslide;
    //if last picture, start again
    if (currentSlide == totalImagesIndex) {
        nextslide = 0;
    }
    else {
        //because 'next' button, go to next picture
        nextslide = currentSlide * 1 + 1;
    }
    //call slider function with new photo index
    Slider(nextslide);
});
/*********** BACK BUTTON - EVENT LISTENER ****************/
let click_back = button_back_div.addEventListener('click', function (event) {
    //change new photo index based on current index
    let nextslide;
    //if first image (with index of 0), go to last image
    if (currentSlide === 0) {
        nextslide = totalImagesIndex;
    }
    else {
        //because back button, go back 1
        nextslide = currentSlide - 1;
    }
    //call slider function with new photo index
    Slider(nextslide);
});
/********** RANGE SLIDER - EVENT LISTENER ****************/
let rangeevent = rangeslider.addEventListener('input', function (event) {
    //get value of range slider
    let rangespeed = event.target.value;
    //set slideshow speed (ms) depending on value 
    if (rangespeed == 1) {
        speed = 6000;
    }
    else if (rangespeed == 2) {
        speed = 4000;
    }
    else if (rangespeed == 3) {
        speed = 2000;
    }
    //stop automatic slideshow
    clearInterval(intervalAutoslideID);
    intervalAutoslideID = null;

    //if auto slideshow stopped -> set icon from play to pause - toggle hidden class
    if (!intervalAutoslideID) {
        let classif = playbutton.getAttribute("class");
        if
            (classif !== 'hidden') {
            pausebutton.classList.remove('hidden');
            playbutton.classList.add('hidden');
        }
        //and start slideshow with speed of range slider
        intervalAutoslideID = setInterval(autoslide, speed, 'autoslide');
    }

});

/********** CLICK PAUSE - EVENT LISTENER ****************/
let pauseclick = pausebutton.addEventListener('click', function (event) {
    //stop repeating function (auto slider) - stop slideshow
    clearInterval(intervalAutoslideID);
    intervalAutoslideID = null;
    //change icon from pause to play
    playbutton.classList.toggle('hidden');
    pausebutton.classList.toggle('hidden');
});

/********** CLICK PLAY - EVENT LISTENER ****************/
let playclick = playbutton.addEventListener('click', function (event) {
    let defaultspeed = 5000;
    let speed;
    //get speed from range slider
    let sliderspeed = document.querySelector('#rangeSlider').value;
    if (sliderspeed == 1) {
        speed = 6000;
    }
    else if (sliderspeed == 2) {
        speed = 4000;
    }
    else if (sliderspeed == 3) {
        speed = 2000;
    }
    //set repeating function, to call autoslide, with speed based on range
    if (!intervalAutoslideID) {
        intervalAutoslideID = setInterval(autoslide, speed, 'autoslide');
    }
    //change icon from play to pause
    playbutton.classList.toggle('hidden');
    pausebutton.classList.toggle('hidden');
});

//**** LAUNCH AUTOMATIC SLIDESHOW ******* */
let intervalAutoslideID;
if (!intervalAutoslideID) {
    intervalAutoslideID = setInterval(autoslide, 5000, 'autoslide');
}

/**********FUNCTION FOR AUTO SLIDESHOW CHANGE IMG INDEX ****************/
function autoslide() {
    //change new photo index based on current index, and call slider function
    let new_photo_index;
    //if we are at last image, set next image to 0, so first image
    if (currentSlide === totalImagesIndex) {
        new_photo_index = 0;
    }
    //else increase counter to show next image
    else {
        new_photo_index = currentSlide * 1 + 1;
    }
    //call slider function, pass index of photo we want to show
    Slider(new_photo_index);
}

