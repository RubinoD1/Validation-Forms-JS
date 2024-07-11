const submit = document.getElementById("submit");
const userName = document.getElementById("name");

let nameError = false;//tracks if a name error message is active

//on submit click confirm submit || list needed inputs 
submit.onclick = function(event){
    console.log("hello");
    event.preventDefault();
    checkName();
}
    
userName.addEventListener('input', validate);

function validate(e){
  
  //user name validation check
  if (e.target.name == "name"){
    if(userName.value.length > 0){
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
        nameWarning.innerHTML = 'Name must be atleast 1 character in length'
        nameWarning.style.color = 'red';
        //add id to nameWarning
        nameWarning.setAttribute("id", "name-warning");
        //'afterend': After the targetElement itself. 
        document.getElementById("name-icon").insertAdjacentElement("afterend", nameWarning);
      }

    }
  }

  //email validation check 


}