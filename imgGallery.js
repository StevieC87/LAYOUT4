/* import eventlist from "./slideshowEVENT.js" */


const myImages = [
    "./images/dummy/1.jpg",
    "./images/dummy/2.jpg",
    "./images/dummy/3.jpg",
    "./images/dummy/4.jpg",
    "./images/dummy/5.jpg",
    "./images/dummy/6.jpg",
    "./images/dummy/7.jpg",
    "./images/dummy/8.jpg"
];
let counter = 0;
let numberofImages = myImages.length;
let lastImageIndex = numberofImages - 1;

let parentdiv = document.querySelector('.gallery-container');


/* HERE MAKE INITIALLY LOOP TO PRELOAD THE IMAGES AND PLACE THEM  */
myImages.forEach((element, index) => {
    console.log(index,'index');
    const newimg = document.createElement('div');
   let visibility;
   /* here only display the first one initially, others: hidden */
    if(index === 0) {
        //visibility = 'display: block;';
    }
    else {
       // visibility = 'display: none';
    }
    newimg.innerHTML = `
        <div class="thumb" id="imgdiv${index}">
        <img id="img${index}" class="imgclass" src="${myImages[index]}">
        </div>
        `;        
        //class="slide${index}"  
        // /style="${visibility}"     
   parentdiv.appendChild(newimg);
    });

//let ImgArrayIndex = myImages[counter];    
// const imgspace = document.querySelector('#imgimg');

