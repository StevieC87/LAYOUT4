//form
const form = document.forms['contactform'];

// form elements
let formEls = form.elements;
//input fields
const el_name = form.elements['yourname'];
const el_tel = form.elements['telephone'];
const el_email = form.elements['youremail'];
const el_emailconfirm = form.elements['confirmemail'];
const el_address = form.elements['address'];
const el_notes = form.elements['yourmsg'];
//submit button 
const submitButton = document.querySelector('#submitbutton');

/********** DONT USE THIS FOR NOW ***************/
//GET FORM ELEMENTS WITH DECONSTRUCT
const myform = document.forms;
const [forma] = myform; 
console.log(forma.yourname);
const elname = forma.yourname;
const elnamevalue = elname.value;
/******************** END ************************/


let errordivname = document.querySelector(`#erroryourname`);

/********************* EVENT LISTENERS *********************/
/*-----  ON TYPE -----*/
  //When user types , remove error message
  //attach event listener to document, then check if it's from the input fields
document.addEventListener('keydown', (event) => {
  let input = event.target; //get input field
  let inputid = event.target.id; //get input field id  (e.g. 'yourname', 'youremail')
  let inputtagname = event.target.tagName;  //e.g. input or textarea
  
  if(inputtagname === 'INPUT' || inputtagname === 'TEXTAREA') {
    let errorbox = document.querySelector(`#error${inputid}`);  //get div to display error for this input (e.g. '#erroryourname' , '#erroryouremail')
    errorbox.textContent = ''; //remove error message
    input.classList.remove('red'); //remove red border 
  }
});
/*-----  FOCUS OUT -----*/
  //On focusout run validation on the field
document.addEventListener('focusout', (event) => {
  let input = event.target; //get input field we are focusing out from
  let inputid = event.target.id; //get its id
  let inputtagname = event.target.tagName;  //e.g. input or textarea
  let thisinputname;
  if(inputtagname === 'INPUT' || inputtagname === 'TEXTAREA') {
    //run validation functions for that field
    switch (inputid) {
      case 'yourname':
        checkifempty(input); // check not empty
        validatename(); // validate input value
      break;
      case 'youremail':
        checkifempty(input)  
        validateemail()
      break;
      case 'confirmemail':
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
/*-----  ON SUBMIT -----*/
  //On click submit, does validation of every field
submitButton.addEventListener('click', (event) => {
  //LOOPS THROUGH FIELDS TO SEE IF ANY EMPTY
  for (i = 0; i < formEls.length; i++) {    
    //only apply code to the input types we want (input and textarea)
      if (
        formEls[i].nodeName === "INPUT" || formEls[i].nodeName === "TEXTAREA"
        ) { 
          checkifempty(formEls[i]); //call validation function to check if empty, and displays error message 
      }
    }
  //call validation functions on fields
  validatename();
  validateemail();
  validateconfirmemail();
  validatephone();
  event.preventDefault();
})


/********************* THE VALIDATION FUNCTIONS *********************/
function validatename() {
  const elnamevalue = elname.value; //get value of 'name' field
  const alphabetic = /[^a-z \-]/i; //regexp pattern
  let falsetrue = alphabetic.test(elnamevalue); 
  
  if(falsetrue === false)  // if false: no mistake, clear error msg if exists
    {
      message = '';
      validationclass = '';
    }
  else if(falsetrue === true)  //if true: mistake, display error msg
  {
    el_name.classList.add('red'); 
    errordivname.textContent = 'Only alphabetical characters please';
  }
}
function validateemail() {
  const el_emailvalue = el_email.value; 
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regexp pattern
  let falsetrue = emailPattern.test(el_emailvalue);
  if(el_emailvalue.length !== 0)  
  { 
    if(falsetrue === true) {
      //if validation returns true there's no mistake
      message = '';
      validationclass = '';
    }
    else if (falsetrue === false) {
      //if validation returns false there's a mistake
      el_email.classList.add('red');
      erroryouremail.textContent = 'Invalid email address';
      console.log(erroryouremail, 'erroryouremail');
      console.log('email not good');
    }
  }
  else if(el_emailvalue.trim().length === 0){
    el_email.classList.add('red');
    erroryouremail.textContent = 'Please fill in email';
  }
}

function validateconfirmemail() {
  const el_emailconfirmvalue = el_emailconfirm.value;
  const el_emailvalue = el_email.value;
  let falsetrue;
  if(el_emailconfirmvalue !== el_emailvalue) {
    falsetrue = false;
  }
  else {
    falsetrue = true;
  }
  if(falsetrue === false) {
    el_emailconfirm.classList.add('red');
    errorconfirmemail.textContent = "Email doesn't match";
  }
 // else if (falsetrue === true) {}
}

function validatephone() {
  const el_telvalue = el_tel.value;
  console.log(el_telvalue, 'tel value');
  const telregexp = /[^\d+-.() ]/; 
  let falsetrue = telregexp.test(el_telvalue);
  console.log(falsetrue,'tel');

  if(falsetrue === true) {
    //if validation returns true there's a mistake
    el_tel.classList.add('red');
    errortelephone.textContent = 'No letters please';
    console.log('email not good');
    
  }
  else if (falsetrue === false) {
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
