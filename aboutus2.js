


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


//GET FORM ELEMENTS WITH DECONSTRUCT
const myform = document.forms;
const [forma] = myform; 
console.log(forma.yourname);

const elname = forma.yourname;
const elnamevalue = elname.value;

let errordivname = document.querySelector(`#erroryourname`);
//console.log(el_name);
//console.log(form);


//WE WANT REAL TIME VALIDATION
//first we build validation - then we can apply it real time or not etc

//remove error message as user types on keyboard
document.addEventListener('keydown', (event) => {
  console.log(event.target, 'EVENT TARGET');
  console.log(event.target.tagName);
  let input = event.target;
  let inputid = event.target.id;
  // console.log(inputid);
  let inputtagname = event.target.tagName;  //e.g. input or textarea
  if(inputtagname === 'INPUT' || inputtagname === 'TEXTAREA') {
    //console.log('SUCCESS');
    let errorbox = document.querySelector(`#error${inputid}`);
    console.log(errorbox, 'ERRORBOX');
    errorbox.textContent = '';
    input.classList.remove('red');
  }
});


//run validation on focusout
document.addEventListener('focusout', (event) => {
  //console.log(event.target, 'EVENT TARGET');
  //console.log(event.target.tagName);
  let input = event.target;
  let inputid = event.target.id;
  let inputtagname = event.target.tagName;  //e.g. input or textarea
  let thisinputname;
  if(inputtagname === 'INPUT' || inputtagname === 'TEXTAREA') {
    
    switch (inputid) {
      case 'yourname':
        checkifempty(input)  
        validatename();
       // checkifempty(input);
      break;
      case 'youremail':
        checkifempty(input)  
        validateemail()
      break;
      case 'confirmemail':
      //  console.log('confirm');
      checkifempty(input);  
      validateconfirmemail();
      break;
      case 'telephone':
        checkifempty(input);  
        validatephone();
      break;
      case 'address':
        checkifempty(input);
      break;
      case 'yourmsg':
        checkifempty(input);
      break;
    }
  }
});

//COPY
function validatename() {

  if(namevalidation() === false) 
   //if function returns false, so NO mistake
    {
      message = '';
      validationclass = '';
    }
  else if(namevalidation() === true) 
   //if function returns true then MISTAKE in validation
  {
    console.log('namevalidation  true');
   // message = 'Only alphanumeric characters please';
    el_name.classList.add('red');
   errordivname.textContent = 'Only alphabetical characters please';
  }
}
function validateemail() {
  if(emailvalidation() === true) {
    //if validation returns true there's no mistake
    message = '';
    validationclass = '';
  }
  else if (emailvalidation() === false) {
    //if validation returns false there's a mistake
    el_email.classList.add('red');
    erroryouremail.textContent = 'Invalid email address';
    console.log(erroryouremail, 'erroryouremail');
    console.log('email not good');
  }
}

function validateconfirmemail() {
  if(confirmemailvalidation() === false) {
    el_emailconfirm.classList.add('red');
    errorconfirmemail.textContent = "Email doesn't match";
  //  console.log('email not good');
  }
  else if (confirmemailvalidation() === true) {
   
  }
}

function validatephone() {
  if(telValidation() === true) {
    //if validation returns true there's a mistake
    el_tel.classList.add('red');
    errortelephone.textContent = 'Invalid phone';
    console.log('email not good');
    
  }
  else if (telValidation() === false) {
    //if validation returns false there's no mistake
    message = '';
    validationclass = '';
  }
}


function checkifempty(input) {

  let inputid = input.id;
  let errordiv1 = `error${inputid}`;
  let errordivtarget = document.querySelector(`#${errordiv1}`);
  if(input.value.trim().length === 0) {

    switch(inputid) {
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
    input.classList.add('red');

  }
  else {
      input.classList.remove('red');
      message = '';
  }
  
  errordivtarget.textContent = message;
  //  thisinput.style.border = '2px solid red';
  
} 

//SUBMIT EVENT LISTENER
submitButton.addEventListener('click', (event) => {
  let errordivname = document.querySelector(`#erroryourname`);
  const form = document.forms['contactform'];
  let formEls = form.elements;
  const el_name = form.elements['yourname'];
  const el_email = form.elements['youremail'];
  let test = document.querySelector('.yourname');
  let message;
  let validationerror;
  let validationclass;
  
  //LOOPS THROUGH FIELDS TO SEE IF ANY EMPTY
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
          else {
              thisinput.classList.remove('red');
              message = '';
          }
          
          errordivtarget.textContent = message;
          //  thisinput.style.border = '2px solid red';
          
            
      }
    
    
    }
 
  validatename();
  validateemail();
  validateconfirmemail();
  validatephone();
  event.preventDefault();
})

function namevalidation() {
  const elname = forma.yourname;
  const elnamevalue = elname.value;
  const alphabetic = /[^a-z \-]/i;
  let falsetrue = alphabetic.test(elnamevalue);
   //false if it doesn't match bad characters
   //true if there's a mistake
  console.log(falsetrue);
  return falsetrue;
}


function emailvalidation() {
  const el_emailvalue = el_email.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let falsetrue = emailPattern.test(el_emailvalue);
  console.log(el_emailvalue,'el_emailvalue');
 // console.log(falsetrue);
  return falsetrue;
}
function confirmemailvalidation() {
  const el_emailconfirmvalue = el_emailconfirm.value;
  const el_emailvalue = el_email.value;
  if(el_emailconfirmvalue !== el_emailvalue) {
    return false;
  }
  else {
    return true;
  }
}

function telValidation() {
  const el_telvalue = el_tel.value;
  console.log(el_telvalue, 'tel value');
  const telregexp = /[^\d+-.() ]/; 
  let falsetrue = telregexp.test(el_telvalue);
  console.log(falsetrue,'tel');
  return falsetrue;
}

function removemsg() {

}
 