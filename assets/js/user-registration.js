const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");

//array to track if all form fileds are filled to requirments
let fieldArray = [
    {
     firstName: false,
     lastName: false,
     email: false,
     username: false,
     password: false,
     mail: false
    }
  ];

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

//toggle password text based on checkbox clicked
function passwordToggle(target){
 if (target.type === "password"){
    target.type = "text";
  } else {
    target.type = "password";
  }
}

//password validation check: contains number, uppercase letter, special character, no space and is between 8 and 16 characters in length.
const passRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
let passError = false;//tracks if a password error message is active

//password input event listener
password.addEventListener('input', passwordValidate);

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
    } else {
      fieldArray[0].password = false; //field has invalid input
      document.getElementById("password-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      password.classList.add('invalid');
      if (passError === false){
        passError = true;
        //password req message div
        const passWarning = document.createElement("div");
        // passWarning.innerHTML = `
        // At least 8 characters <br/>
        // Maximum of 16 characters  <br/>
        // Contains one uppercase letter  <br/>
        // Contains one number  <br/>
        // Contains one special character (@, #, $, etc.)  <br/>
        // Contains no spaces
        // `;
        // passWarning.style.color = 'red';
        passWarning.setAttribute("id", "passWarning");
        //'afterend': After the targetElement itself. 
        document.getElementById("password-icon").insertAdjacentElement("afterend", passWarning);
      }
      //run dynamic passWarning message 
      dynamicPassError();
    }
}

//re-type pass function -- use dynamic warning updates  
  // if pass not "" and is valid check if match 
function rePassValidate(){
  let pass = password.value;
  //switch statements pass not empty and valid, pass empty check pass, pass empty check invalid
   // or have disabled unless pass valid
  if (pass != ""){
    
    console.log(pass, " not empty");
  } else {
    console.log("Empty pass");
  }
}

//dynamic invalid password message
  //need to differenciate between password and re-type if both need this message 
    // or just have re-type disabled untill needed
function dynamicPassError(){
  let valid = `&#9989;`;
  let invalid = `&#10060;`;
  
// At least 8 characters min check 
  if (document.getElementById("minPass-child") == null){  //if child element dosen't exist create element
    //create child element 
    minPassChild = document.createElement("p");
    minPassChild.innerHTML = `${valid}` + ' At least 8 characters';
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
    maxPassChild.innerHTML = `${valid}` + ' Maximum of 16 characters';
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
    uppercaseChild.innerHTML = `${valid}` + ' Contains one uppercase letter';
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
    numberChild.innerHTML = `${valid}` + ' Contains one number';
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
    specialChild.innerHTML = `${valid}` + ' Contains one special character (@, #, $, etc.)';
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
    specialChild.classList.add("warning-pass");
    specialChild.innerHTML = `${invalid}` + ' Contains one special character (@, #, $, etc.)';
  }

  //no spaces check (?!.* )
  const noSpaces = /(?!.* )/g;


}
