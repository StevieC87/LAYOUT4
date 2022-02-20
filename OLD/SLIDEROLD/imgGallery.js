/* import eventlist from "./slideshowEVENT.js" */


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
//"https://picsum.photos/id/237/300/200"
// 'https://picsum.photos/id/237/300/200',

let counter = 0;
let numberofImages = myImages.length;
let lastImageIndex = numberofImages - 1;

let parentdiv = document.querySelector('.gallery-container');
console.log(parentdiv.width, 'parent width');

/* HERE MAKE INITIALLY LOOP TO PRELOAD THE IMAGES AND PLACE THEM  */
myImages.forEach((element, index) => {
    
    // GET ORIGINAL SIZE OF EACH PHOTO
    var img = new Image();
    img.onload = function() {
    console.log(this.width + 'x' + this.height, 'width height '); ;
    }
    img.src = element;
    

    
    console.log(index,'index');

    //if landscape: give it max-width,

        //but we want to get orientation -> so we can set each image a fixed width and height - so thye all match 


        let img2 = document.createElement('img');
        img2.id = `img${index}`;
        img2.src = `${myImages[index]}`;
        
        let img_width = img2.naturalWidth;
        let img_height = img2.naturalHeight
        let orientation;
        var orientation_cssclass;
        if(img_width > img_height) {
            orientation = 'landscape-thumb';
     
        // thumbwidth = '100px';
        //so if orientation portrait
        var orientation_cssclass = 'thumb-landscape';
        }
        else if (img_height > img_width) {
            orientation = 'portrait-thumb';
        // thumbheight = '100px';
        thumbwidth = '100px';
        var orientation_cssclass = 'thumb-portrait';
        }


        img2.className = `imgclass ${orientation}`;
        parentdiv.appendChild(img2);
 
    });

//let ImgArrayIndex = myImages[counter];    
// const imgspace = document.querySelector('#imgimg');

