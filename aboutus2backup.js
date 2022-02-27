


const submitButton = document.querySelector('#submitbutton');
const form = document.forms['contactform'];
let formEls = form.elements;
//console.log(form);
const el_name = form.elements['yourname'];
const el_tel = form.elements['telephone'];
const el_email = form.elements['youremail'];
const el_emailconfirm = form.elements['confirmemail'];
const el_address = form.elements['address'];
const el_notes = form.elements['yourmsg'];

console.log(el_name);
console.log(form);
submitButton.addEventListener('click', (event) => {
mysubmit();
    event.preventDefault();
    
    //loop through form elements
    
    for (i = 0; i < formEls.length; i++) {

       let thisinput = formEls[i];
       /*  console.log(thisinput, 'thisinput!!!!!!!!!!'); */
       let thisinputname = formEls[i].name;
       //choose this input type's error div to show message
       let errordiv1 = `error${thisinputname}`;
       let errordivtarget = document.querySelector(`#${errordiv1}`);
       let message;
      
       //make sure we have type of input 
        if (formEls[i].nodeName === "INPUT" && formEls[i].type === "text" || formEls[i].type === "textarea" || formEls[i].type === 'email') {
      
       
            if(formEls[i].value.trim().length === 0) {

              switch(thisinputname) {
                //get name of input and check which one it is
                  case 'yourname' : message = 'Please fill in your name';
                  break;
                  case 'youremail' : message = 'Please fill in your email';
                  break;
                  case 'confirmemail' : message = 'Please confirm your email';
                  break;
                  case 'telephone' : message = 'Please fill in your telephone number';
                  break;
                  case 'address' : message = 'Please fill in your address';
                  break;
                  case 'yourmsg' : message = "Don't forget the message";
                  break;
              }            
              thisinput.classList.add('red');

            }
            else if (formEls[i].value.trim().length !== 0){
              switch(thisinputname) {
                //get name of input and check which one it is
                  case 'yourname' : 
                    //
                    
                  break;
                  case 'youremail' : 
                   
                   //
                  break;
                  case 'confirmemail' :
                      //
                  break;
                  case 'telephone' : 
                   //
                  break;
                  case 'address' :
                       //
                  break;
                  case 'yourmsg' : 
                    //
                  break;
            }
            
              

            }

            else {
                thisinput.classList.remove('red');
                message = '';
            }
            errordivtarget.textContent = message;
            //  thisinput.style.border = '2px solid red';
             
              
        }
      }
 
})
function mysubmit() {
   // alert('test');
}

function nameregex() {

  
}
