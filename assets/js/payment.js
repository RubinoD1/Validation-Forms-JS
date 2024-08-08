const fullName = document.getElementById("name");

let fullNameError = false;//tracks if error message is active 


fullName.addEventListener('input', nameValidate);//full name event listener


//card holder name -- two characters in length with at least one space 
function nameValidate(){
    const nameRegex = /^(?=.* ).{2,60}$/;//contains at least one space and is at least two characters in length  
    if (nameRegex.test(fullName.value.trim()) == true){
        fieldArray[0].valid = true; //field has valid input
        document.getElementById("name-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
        fullName.classList.remove('invalid'); //remove class invalid 
      if (fullNameError == true){
          fullNameError = false;
          document.getElementById("name-warning").remove();//remove first-name-warning created div
        }
        formValidationCheck();//run submit btn check 
    }else {
        fieldArray[0].valid = false;//field has invalid input
        document.getElementById("name-icon").innerHTML = `&#10060;`;//add x icon &#10060;
        fullName.classList.add('invalid');//add class invalid 
      if (fullNameError == false){
          fullNameError = true; 
          const fullNameWarning = document.createElement("div");
          fullNameWarning.innerHTML = 'Name must be at least 2 characters in length and include a space'
          fullNameWarning.style.color = 'red';
          fullNameWarning.setAttribute("id", "name-warning");
          document.getElementById("name-icon").insertAdjacentElement("afterend", fullNameWarning);
        }
        formValidationCheck();
    }
}




//submit btn validation check 
function formValidationCheck(){
    // Check if all 'valid' properties are true
    const allValid = fieldArray.every(obj => obj.valid === true);
    if(allValid === true){
      document.getElementById("submit").removeAttribute("disabled"); //enable submit btn
    }else {
     document.getElementById("submit").setAttribute("disabled", ""); //disable sumbmit btn 
    }
}

let fieldArray = [
    {id: "firstName", valid: false},//0
    {id: "cardNumber", valid: false},//1
    {id: "cvv", valid: false},//2
    {id: "month", valid: false},//3
    {id: "year", valid: false}//4
  ];
  