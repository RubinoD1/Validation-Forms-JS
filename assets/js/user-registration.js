const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

//passRegex: contains number, uppercase letter, special character, no space and is between 8 and 16 characters in length.
const passRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//email reg expression validation

let passError = false;//tracks if a password error message is active
let rePassError = false;//tracks if repeat password error message is active
let emailError = false;//tracks if a email error message is active
let usernameError = false;//tracks if username error message is active 
let firstNameError= false;

//event listener - show / hide password text for first password entry 
document.getElementById("show-password").onclick = () =>{
    target = password;
    passwordToggle(target);
}
//event listener - show/hide password text for repeat password entry
document.getElementById("show-repeat-password").onclick = () =>{
    target = repeatPassword;
    passwordToggle(target);
}

password.addEventListener('input', passwordValidate);//password input event listener
repeatPassword.addEventListener('input', rePassValidate);//repeat password event listener 
email.addEventListener('input', emailValidate);//email input event listener
userName.addEventListener('input', usernameValidate);//username event listener
firstName.addEventListener('input', nameValidate);//first name event listener
lastName.addEventListener('input', nameValidate);//last name event listener

//toggle password text based on checkbox clicked
function passwordToggle(target){
 if (target.type === "password"){
    target.type = "text";
  } else {
    target.type = "password";
  }
}

function passwordValidate (){
    if (passRegex.test(password.value)){
      fieldArray[0].password = true; //field has valid input
      document.getElementById("password-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
      password.classList.remove('invalid');
      if (passError === true){
        passError = false;
        //remove passWarning created div
        document.getElementById("passWarning").remove();
      }
      //remove disable attribute from repeat-password input  
      document.getElementById("repeat-password").removeAttribute("disabled");
      //call repeat password function rePassValidate to check password match 
      rePassValidate();
    } else {
      fieldArray[0].password = false; //field has invalid input
      document.getElementById("password-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      password.classList.add('invalid');
      if (passError === false){
        passError = true;
        //password req message div
        const passWarning = document.createElement("div");
        passWarning.setAttribute("id", "passWarning");
        //'afterend': After the targetElement itself. 
        document.getElementById("password-icon").insertAdjacentElement("afterend", passWarning);
      }
      //add disable attribute to repeat-password input
      document.getElementById("repeat-password").setAttribute("disabled", "");
      //call dynamic passWarning message function
      dynamicPassError();
    }
}

//re-type pass function 
  // if pass not "" and is valid check if match 
function rePassValidate(){
  if (repeatPassword.value != ""){
    console.log(repeatPassword.value, " not empty");
    if (repeatPassword.value === password.value){
      repeatPassword.classList.remove('invalid'); //remove class invalid  
      document.getElementById("repeat-password-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
      fieldArray[0].repeatPass = true;//field has valid input
      //passwords match message 
      if(rePassError === true){
        rePassError = false;
        document.getElementById("repeat-warning").remove();//remove repeat-warning created div
      }
      //call submit btn check 
      
    }else {
      fieldArray[0].repeatPass = false;//field has invalid input
      document.getElementById("repeat-password-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      repeatPassword.classList.add('invalid');
      //create error message div
      if(rePassError === false){
        rePassError = true;
        const rePassWarning = document.createElement("div");//create div
        rePassWarning.innerHTML = 'Passwords do not match'
        rePassWarning.style.color = 'red';
        rePassWarning.setAttribute("id", "repeat-warning");//set id
        document.getElementById("repeat-password-icon").insertAdjacentElement("afterend", rePassWarning);
      }
    }
  } 
}

//dynamic invalid password message
function dynamicPassError(){
  let valid = `&#9989;`;
  let invalid = `&#10060;`;
  
// At least 8 characters min check 
  if (document.getElementById("minPass-child") == null){  //if child element dosen't exist create element
    //create child element 
    minPassChild = document.createElement("p");
    minPassChild.setAttribute("id", "minPass-child");
    minPassChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(minPassChild); //append to parent 
  }

  if (password.value.length >= 8){//pass must be at least 8 characters to be valid
    //remove invalid class 
    minPassChild.classList.remove("warning-invalid");
    //add valid class
    minPassChild.classList.add("warning-pass");
    minPassChild.innerHTML = `${valid}` + ' At least 8 characters';
  } else {
    //remove valid class
    minPassChild.classList.remove("warning-pass");
    //add invalid class 
    minPassChild.classList.add("warning-invalid");
    minPassChild.innerHTML = `${invalid}` + ' At least 8 characters';
  }

  //password max 16 characters check 
  if (document.getElementById("maxPass-child") == null){  //if child element dosen't exist create element
    //create child element 
    maxPassChild = document.createElement("p");
    maxPassChild.setAttribute("id", "maxPass-child");
    maxPassChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(maxPassChild); //append to parent 
  }

  if (password.value.length <= 16){//password must be a max of 16 characters to be valid 
    //remove invalid class 
    maxPassChild.classList.remove("warning-invalid");
    //add valid class
    maxPassChild.classList.add("warning-pass");
    maxPassChild.innerHTML = `${valid}` + ' Maximum of 16 characters';
  } else {
    //remove valid class
    maxPassChild.classList.remove("warning-pass");
    //add invalid class 
    maxPassChild.classList.add("warning-invalid");
    maxPassChild.innerHTML = `${invalid}` + ' Maximum of 16 characters';
  }

  //uppercase check
  const upperCaseLetters = /(?=.*[A-Z])/g;
  //if child element dosen't exist create element
  if (document.getElementById("uppercase-child") == null){//check if id exists
    //create child element 
    uppercaseChild = document.createElement("p");
    uppercaseChild.setAttribute("id", "uppercase-child");
    uppercaseChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(uppercaseChild); //append to parent 
  }
  //uppercase letter check for password value
  if (upperCaseLetters.test(password.value) == true){
    //remove invalid class 
    uppercaseChild.classList.remove("warning-invalid");
    //add valid class
    uppercaseChild.classList.add("warning-pass");
    uppercaseChild.innerHTML = `${valid}` + ' Contains one uppercase letter';
  }else {
    //remove valid class 
    uppercaseChild.classList.remove("warning-pass");
    //add invalid class
    uppercaseChild.classList.add("warning-invalid");
    uppercaseChild.innerHTML = `${invalid}` + ' Contains one uppercase letter';
  }

  // Contains at least one number
  const numbers = /(?=.*[0-9])/g;
  if (document.getElementById("number-child") == null){//check if id exists
    //create child element 
    numberChild = document.createElement("p");
    numberChild.setAttribute("id", "number-child");
    numberChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(numberChild); //append to parent 
  }
  //number check for password value 
  if (numbers.test(password.value) == true){
    //remove invalid class 
    numberChild.classList.remove("warning-invalid");
    //add valid class 
    numberChild.classList.add("warning-pass");
    numberChild.innerHTML = `${valid}` + ' Contains one number';
  }else {
    //remove valid class
    numberChild.classList.remove("warning-pass");
    //add invalid class 
    numberChild.classList.add("warning-invalid");
    numberChild.innerHTML = `${invalid}` + ' Contains one number';
  }

  //special characters check 
  const special = /(?=.*\W)/g;
  if (document.getElementById("special-child") == null){//check if id exists
    //create child element 
    specialChild = document.createElement("p");
    specialChild.setAttribute("id", "special-child");
    specialChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(specialChild); //append to parent 
  }

  if (special.test(password.value) == true){
    //remove invalid class 
    specialChild.classList.remove("warning-invalid");
    //add valid class
    specialChild.classList.add("warning-pass");
    specialChild.innerHTML = `${valid}` + ' Contains one special character (@, #, $, etc.)';
  }else {
    //remove valid class
    specialChild.classList.remove("warning-invalid");
    //add invalid class 
    specialChild.classList.add("warning-invalid");
    specialChild.innerHTML = `${invalid}` + ' Contains one special character (@, #, $, etc.)';
  }

  //no spaces check ?!.* 
  const noSpaces = /(?=.*\s)/g;
  if (document.getElementById("space-child") == null){//check if id exists
    //create child element 
    spaceChild = document.createElement("p");
    spaceChild.setAttribute("id", "space-child");
    spaceChild.setAttribute("class", "warning-pass");//add class valid
    document.getElementById("passWarning").appendChild(spaceChild); //append to parent 
  }

  if (noSpaces.test(password.value) == false){
    //remove invalid class 
    spaceChild.classList.remove("warning-invalid");
    //add valid class
    spaceChild.classList.add("warning-pass");
    spaceChild.innerHTML = `${valid}` + ' Contains no spaces';
  }else {
    //remove valid class 
    spaceChild.classList.remove("warning-valid");
    //add invalid class 
    spaceChild.classList.add("warning-invalid");
    spaceChild.innerHTML = `${invalid}` + ' Contains no spaces';
  }
}

//email validate 
function emailValidate(){
  if (emailRegex.test(email.value)){
   fieldArray[0].email = true;//field has valid input
   //add checkmark &#9989;
   document.getElementById("email-icon").innerHTML = `&#9989;`;
   //remove class invalid 
   email.classList.remove('invalid');
   if (emailError === true){
     emailError = false;
     //remove nameWarning created div
     document.getElementById("email-warning").remove();
   }
   //check if all fields valid
   //allFieldsCheck();
  } else {
     fieldArray[0].email = false;//field has invalid input
     //add x icon &#10060;
     document.getElementById("email-icon").innerHTML = `&#10060;`;
     email.classList.add('invalid');
   if (emailError === false){
     emailError = true;
     //input needed message -- red font below input box 
     const emailWarning = document.createElement("div");
     emailWarning.innerHTML = 'Invalid email'
     emailWarning.style.color = 'red';
     //add id to nameWarning
     emailWarning.setAttribute("id", "email-warning");
     //'afterend': After the targetElement itself. 
     document.getElementById("email-icon").insertAdjacentElement("afterend", emailWarning);
   }
   //allFieldsCheck();//check if all fields valid
  }
}

//username validate 
function usernameValidate(){
   if (userName.value.length > 4){//username is atleast 5 characters in length
    fieldArray[0].username = true; //field has valid input
    document.getElementById("username-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
    userName.classList.remove('invalid'); //remove class invalid 
    if (usernameError === true){
      usernameError = false;
      document.getElementById("username-warning").remove();//remeove username-warning div
    }
    //call submit btn check 
    //allFieldsCheck();
   }else {
    fieldArray[0].username = false; //field has invalid input
    document.getElementById("username-icon").innerHTML = `&#10060;`;//add x icon &#10060;
    userName.classList.add('invalid');//add class invalid
    if (usernameError === false){
       usernameError = true;
       const usernameWarning = document.createElement("div");
       usernameWarning.innerHTML = 'Username must be at least 5 characters in length'
       usernameWarning.style.color = 'red';
       usernameWarning.setAttribute("id", "username-warning");//add id to nameWarning
       //'afterend': After the targetElement itself. 
       document.getElementById("username-icon").insertAdjacentElement("afterend", usernameWarning);
    }
   }
}

//first and last name validation - min 1 character in length
function nameValidate(e){
  if (e.target.id == "first-name"){
    if (!firstName.value.trim().length == false){//check that value is not just spaces 
      fieldArray[0].firstName = true; //field has valid input
      document.getElementById("first-name-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
      firstName.classList.remove('invalid'); //remove class invalid 
      if (firstNameError == true){
        firstNameError = false;
        document.getElementById("first-name-warning").remove();//remove first-name-warning created div
      }
      //run submit btn check 
      
    }else{
      fieldArray[0].firstName = false;//field has invalid input
      document.getElementById("first-name-icon").innerHTML = `&#10060;`;//add x icon &#10060;
      firstName.classList.add('invalid');//add class invalid 
      if (firstNameError == false){
        firstNameError = true; 
         const firstNameWarning = document.createElement("div");
         firstNameWarning.innerHTML = 'Name must be at least 1 character in length'
         firstNameWarning.style.color = 'red';
         firstNameWarning.setAttribute("id", "first-name-warning");
         document.getElementById("first-name-icon").insertAdjacentElement("afterend", firstNameWarning);
      }
    }
  }


  
  
  if (e.target.id == "last-name"){
    console.log("last name");
  }
  
}


//array to track if all form fileds are filled to requirments
let fieldArray = [
  {
   firstName: false,
   lastName: false,
   email: false,
   username: false,
   password: false,
   repeatPass:false,
   mail: false
  }
];