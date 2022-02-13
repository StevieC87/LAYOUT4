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


/* HERE MAKE INITIALLY LOOP TO PRELOAD THE IMAGES AND PLACE THEM  */
myImages.forEach((element, index) => {
    
    // GET ORIGINAL SIZE OF EACH PHOTO
    var img = new Image();
    img.onload = function() {
    console.log(this.width + 'x' + this.height, 'width height '); ;
    }
    img.src = element;
    
    
    
    console.log(index,'index');
 //   const newimg = document.createElement('div');
    //CREATE DIV TO APPEND TO PARENT
    const onelessdiv = document.createElement('div');
    onelessdiv.classList.add('thumb');
    onelessdiv.setAttribute("id", `imgdiv${index}`);
   let visibility;
   /* here only display the first one initially, others: hidden */
    if(index === 0) {
        //visibility = 'display: block;';
    }
    else {
       // visibility = 'display: none';
    }
    // <div class="thumb" id="imgdiv${index}">   </div>
    onelessdiv.innerHTML = `
       
        <img id="img${index}" class="imgclass" src="${myImages[index]}">
     
        `;        
        //class="slide${index}"  
        // /style="${visibility}"     
   parentdiv.appendChild(onelessdiv);
    });

//let ImgArrayIndex = myImages[counter];    
// const imgspace = document.querySelector('#imgimg');

