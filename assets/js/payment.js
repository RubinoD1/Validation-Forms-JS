const fullName = document.getElementById("name");
const cvv = document.getElementById("cvv");
const cardNumber = document.getElementById("card-number");
const year = document.getElementById("year");
const month = document.getElementById("month");

let fullNameError = false;//tracks if error message is active 
let cvvError = false;//tracks if cvv error message is active
let cardNumberError = false;//tracks if card number error message is active

fullName.addEventListener('input', nameValidate);//full name event listener
cvv.addEventListener('input', cvvValidate);//cvv event listener
cardNumber.addEventListener('input', cardNumberValidate);//card number event listener

//month validation
month.addEventListener("click", function(){
   if (month.value != "month"){//input is not default list value
     fieldArray[3].valid = true; //field has valid input
     formValidationCheck();
   }else{
     fieldArray[3].valid = false; //field has invalid input
     formValidationCheck();
   }
})

//year validation
year.addEventListener("click", function(){
  if (year.value != "year"){//input is not default list value
    fieldArray[4].valid = true; //field has valid input
    formValidationCheck();
  }else{
    fieldArray[4].valid = false; //field has invalid input
    formValidationCheck();
  }
})

//on submit click confirm submit 
submit.onclick = function(){
  alert("All fields valid!");
}

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

//cvv validate - only number and three characters in length 
function cvvValidate(){
  const cvvRegex = /^(?=.*[0-9])(?!.*\W)(?!.* )(?!.*[a-z])(?!.*[A-Z])(?!.*_).{3,3}$/;//cvv regex -- only allow numbers and three characters in length 
  if (cvvRegex.test(cvv.value) == true){
    fieldArray[2].valid = true; //field has valid input
    document.getElementById("cvv-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
    cvv.classList.remove('invalid'); //remove class invalid 
    if (cvvError == true){
        cvvError = false;
        document.getElementById("cvv-warning").remove();//remove first-name-warning created div
      }
      formValidationCheck();//run submit btn check 
  }else {
    fieldArray[2].valid = false;//field has invalid input
    document.getElementById("cvv-icon").innerHTML = `&#10060;`;//add x icon &#10060;
    cvv.classList.add('invalid');//add class invalid 
    if (cvvError == false){
        cvvError = true; 
        const cvvWarning = document.createElement("div");
        cvvWarning.innerHTML = 'Invalid input'
        cvvWarning.style.color = 'red';
        cvvWarning.setAttribute("id", "cvv-warning");
        document.getElementById("cvv-icon").insertAdjacentElement("afterend", cvvWarning);
      }
      formValidationCheck();
  }
}

//card number validation
function cardNumberValidate(){
  let onlyNumbers = /^(?=.*[0-9])(?!.*\W)(?!.* )(?!.*[a-z])(?!.*[A-Z])(?!.*_).{16,16}$/;//only numbers allowed regex 
  
  switch(cardNumber.value.length){//if length is 4,9, or 14 add space to end of string
    case 4:
    case 9:
    case 14:
      cardNumber.value = `${cardNumber.value}` + " ";
      break;
    default://run if no case match
      break;
  }
  //check if cardNumber value is only numbers and is 16 digits in length
  if (onlyNumbers.test(cardNumber.value.replace(/ /g,'')) == true){//.replace is removing all spaces in the string & .test in then checking using the numbersOnly regex if the value has only numbers
    fieldArray[1].valid = true; //field has valid input
    document.getElementById("card-number-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
    cardNumber.classList.remove('invalid'); //remove class invalid 
    if (cardNumberError == true){
      cardNumberError = false;
      document.getElementById("card-number-warning").remove();//remove card-number-warning created div
    }
    formValidationCheck();//run submit btn check 
  }else {
    fieldArray[1].valid = false;//field has invalid input
    document.getElementById("card-number-icon").innerHTML = `&#10060;`;//add x icon &#10060;
    cardNumber.classList.add('invalid');//add class invalid 
    if (cardNumberError == false){
      cardNumberError = true; 
      const cardNumberWarning = document.createElement("div");
      cardNumberWarning.innerHTML = 'Please enter a valid card number'
      cardNumberWarning.style.color = 'red';
      cardNumberWarning.setAttribute("id", "card-number-warning");
      document.getElementById("card-number-icon").insertAdjacentElement("afterend", cardNumberWarning);
    }
    formValidationCheck();//run submit btn check 
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
    {id: "fullName", valid: false},//0
    {id: "cardNumber", valid: false},//1
    {id: "cvv", valid: false},//2
    {id: "month", valid: false},//3
    {id: "year", valid: false}//4
  ];
