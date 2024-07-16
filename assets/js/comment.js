const submit = document.getElementById("submit");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comments");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//email reg expression validation

let nameError = false;//tracks if a name error message is active
let emailError = false;//tracks if a email error message is active
let commentError = false;//tracks if comment error message is active 

//entered fields array
let fieldArray = [
  {
    id: "user name",
    valid: false,
    name: "",
  }
]

//on submit click confirm submit || list needed inputs 
submit.onclick = function(event){
    console.log("hello");
    event.preventDefault();
    // checkName();
}
    
userName.addEventListener('input', validate);
comment.addEventListener('input', validate);
email.addEventListener('input', emailValidate);

function validate(e){
  //user name validation check
  if (e.target.name == "name"){
    if(userName.value.length > 4){
      //add checkmark &#9989;
      document.getElementById("name-icon").innerHTML = `&#9989;`;
      //remove class invalid 
      userName.classList.remove('invalid');
      if (nameError === true){
        nameError = false;
        //remove nameWarning created div
        document.getElementById("name-warning").remove();
      }
      

    } else {
      //add x icon &#10060;
      document.getElementById("name-icon").innerHTML = `&#10060;`;
      //add class invalid 
      userName.classList.add('invalid');
      if (nameError === false){
        nameError = true;
        //input needed message -- red font below input box 
        const nameWarning = document.createElement("div");
        nameWarning.innerHTML = 'Name must be atleast 5 characters in length'
        nameWarning.style.color = 'red';
        //add id to nameWarning
        nameWarning.setAttribute("id", "name-warning");
        //'afterend': After the targetElement itself. 
        document.getElementById("name-icon").insertAdjacentElement("afterend", nameWarning);
      }

    }
  }

  //comment validation check 
  if (e.target.id == "comments"){
    //console.log("comments working", comment.value, comment.value.length);
    if(comment.value.length > 0){
      console.log("valid");
        //add checkmark &#9989;
        document.getElementById("comments-icon").innerHTML = `&#9989;`;
        //add class invalid 
        comment.classList.remove('invalid');
      if (commentError === true){
        commentError = false;
        //remove comment warning created div
        document.getElementById("commentWarning").remove();
      }
    }
    else {
      console.log("invalid");
      //add x icon &#10060;
      document.getElementById("comments-icon").innerHTML = `&#10060;`;
      //add class invalid 
      comment.classList.add('invalid');
      if (nameError === false){
        commentError = true;
        //input needed message -- red font below input box 
        const commentWarning = document.createElement("div");
        commentWarning.innerHTML = 'Comment must be atleast 1 character in length'
        commentWarning.style.color = 'red';
        //add id to commentWarning
        commentWarning.setAttribute("id", "commentWarning");
        //'afterend': After the targetElement itself. 
        document.getElementById("comments-icon").insertAdjacentElement("afterend", commentWarning);
      }
    }
  }
  
}

function emailValidate(){
   if (emailRegex.test(email.value)){
    //add checkmark &#9989;
    document.getElementById("email-icon").innerHTML = `&#9989;`;
    //remove class invalid 
    email.classList.remove('invalid');
    if (emailError === true){
      emailError = false;
      //remove nameWarning created div
      document.getElementById("email-warning").remove();
    }
   } else {
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
   }
}