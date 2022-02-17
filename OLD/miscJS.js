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
//--------------------------------------------------

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