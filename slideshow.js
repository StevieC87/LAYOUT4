/* import eventlist from "./slideshowEVENT.js" */


const myImages = [
    "https://picsum.photos/id/1003/200/300",
    "https://picsum.photos/id/1012/200/300",
    "https://picsum.photos/id/1011/200/300",
    "https://picsum.photos/id/1022/200/300"
];
let counter = 0;
let numberofImages = myImages.length;
let maxCounterValue = numberofImages - 1;

let parentdiv = document.querySelector('.slideshow-container');

/* HERE MAKE INITIALLY LOOP TO PRELOAD THE IMAGES AND PLACE THEM  */
myImages.forEach((element, index) => {
    console.log(index,'index');
    const newimg = document.createElement('div');
   let visibility;
   /* here only display the first one initially, others: hidden */
    if(index === 0) {
        visibility = 'display: block;';
    }
    else {
        visibility = 'display: none';
    }
    newimg.innerHTML = `
        <div class="fade mySlides slide${index}" id="img${index}" class="">
        <img id="imgimg" class="fade imgclass" src="${myImages[index]}" 
        style="${visibility}" class="imgclass" >
              
        </div>
        `;               
    parentdiv.appendChild(newimg);
    });
let ImgArrayIndex = myImages[counter];    
const imgspace = document.querySelector('#imgimg');

