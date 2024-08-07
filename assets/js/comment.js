const submit = document.getElementById("submit");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comments");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//email reg expression validation

let nameError = false;//tracks if a name error message is active
let emailError = false;//tracks if a email error message is active
let commentError = false;//tracks if comment error message is active 

//on submit click confirm submit 
submit.onclick = function(){
    alert("Comment submitted!");
}
    
userName.addEventListener('input', validate);
comment.addEventListener('input', validate);
email.addEventListener('input', emailValidate);

function validate(e){
  //user name validation check
  if (e.target.name == "name"){
    if (userName.value.trim().length > 4){//at least 5 characters in length not including empty spaces
      fieldArray[0].valid = true; //field has valid input
      document.getElementById("name-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
      userName.classList.remove('invalid'); //remove class invalid 
      if (nameError === true){
        nameError = false;
        document.getElementById("name-warning").remove(); //remove nameWarning created div
      }
      allFieldsCheck();//check if all fields valid

    } else {
      fieldArray[0].valid = false;//field has invalid input
      document.getElementById("name-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      userName.classList.add('invalid');//add class invalid 
      if (nameError === false){
        nameError = true;
        //input needed message -- red font below input box 
        const nameWarning = document.createElement("div");
        nameWarning.innerHTML = 'Name must be at least 5 characters in length'
        nameWarning.style.color = 'red';
        nameWarning.setAttribute("id", "name-warning"); //add id to nameWarning
        //'afterend': After the targetElement itself. 
        document.getElementById("name-icon").insertAdjacentElement("afterend", nameWarning);
      }
      allFieldsCheck();//check if all fields valid
    }
  }

  //comment validation check 
  if (e.target.id == "comments"){
    if (!comment.value.trim().length == false){//check that value is not just spaces 
        fieldArray[2].valid = true;//field has valid input 
        document.getElementById("comments-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
        comment.classList.remove('invalid'); //add class invalid 
      if (commentError === true){
        commentError = false;
        document.getElementById("commentWarning").remove(); //remove comment warning created div
      }
      allFieldsCheck();//check if all fields valid
    }
    else {
      fieldArray[2].valid = false;//field has invalid input
      document.getElementById("comments-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      comment.classList.add('invalid');//add class invalid 
      if (commentError === false){
        commentError = true;
        //input needed message -- red font below input box 
        const commentWarning = document.createElement("div");
        commentWarning.innerHTML = 'Comment must be at least 1 character in length'
        commentWarning.style.color = 'red';
        commentWarning.setAttribute("id", "commentWarning"); //add id to commentWarning
        //'afterend': After the targetElement itself. 
        document.getElementById("comments-icon").insertAdjacentElement("afterend", commentWarning);
      }
    }
    allFieldsCheck();//check if all fields valid
  }
}

function emailValidate(){
   if (emailRegex.test(email.value)){
    fieldArray[1].valid = true;//field has valid input
    document.getElementById("email-icon").innerHTML = `&#9989;`; //add checkmark &#9989;
    email.classList.remove('invalid'); //remove class invalid 
    if (emailError === true){
      emailError = false;
      document.getElementById("email-warning").remove(); //remove nameWarning created div
    }
    allFieldsCheck();//check if all fields valid
   } else {
      fieldArray[1].valid = false;//field has invalid input
      document.getElementById("email-icon").innerHTML = `&#10060;`; //add x icon &#10060;
      email.classList.add('invalid');
    if (emailError === false){
      emailError = true;
      //input needed message -- red font below input box 
      const emailWarning = document.createElement("div");
      emailWarning.innerHTML = 'Invalid email'
      emailWarning.style.color = 'red';
      emailWarning.setAttribute("id", "email-warning"); //add id to nameWarning
      //'afterend': After the targetElement itself. 
      document.getElementById("email-icon").insertAdjacentElement("afterend", emailWarning);
    }
    allFieldsCheck();//check if all fields valid
   }
}

//remove disabled attribute || re-add disabled attribute to submit btn
function allFieldsCheck(){
  // Check if all 'valid' properties are true
  const allValid = fieldArray.every(obj => obj.valid === true);
  if(allValid === true){
    document.getElementById("submit").removeAttribute("disabled"); //enable submit btn
  }else {
   document.getElementById("submit").setAttribute("disabled", ""); //disable sumbmit btn 
  }
}

//array to track if all form fileds are valid
let fieldArray = [
  {id: "name", valid: false},//0
  {id: "comment", valid: false},//1
  {id: "email", valid: false}//2
];
