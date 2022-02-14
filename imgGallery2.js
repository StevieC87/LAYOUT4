

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
   
    myImages.forEach((element, index) => {
        // GET ORIGINAL SIZE OF EACH PHOTO
      /*       var img = new Image();
          //  img.addEventListener('load', imgfunction, false);
            // const imgfunction = (event) => { }
           
            img.onload = function() {
                if(this.width > this.height) {
                    orientation = 'landscape';
                    thumbheight = '100px';
                // thumbwidth = '100px';
                //so if orientation portrait
                var orientation_cssclass = 'thumb-landscape';
                }
                else if (this.height > this.width) {
                    orientation = 'portrait';
                // thumbheight = '100px';
                thumbwidth = '100px';
                var orientation_cssclass = 'thumb-portrait';
                }
                console.log(orientation_cssclass);
                //img${index}
                return orientation_cssclass;
            }
            img.src = element;
            console.log(orientation_cssclass, 'orientation_cssclass'); */
           // orientation_cssclass = 'thumb-portrait';
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
            //imgclass ]
    
           
           // img2.onload = function() {
                
                //img${index}
               // return orientation_cssclass;
           // }
                // document.body.appendChild(img2);

                //END OF ALTERNATIVE
            //<img id="imgimg" class="imgclass" src="${myImages[index]}">
        
           // parentdiv.appendChild(onelessdiv);
           parentdiv.appendChild(img2);

            let newimg = document.querySelector(`#img${index}`);
     

        });
    
}

thumbnails(myImages);