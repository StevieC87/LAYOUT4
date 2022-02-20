

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
