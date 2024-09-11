const comment = document.getElementById("comments");

let selectedEmoji = "";
let commentError = false;//tracks if comment error message is active 

//on submit click confirm submit 
submit.onclick = function(){
    alert("All fields are valid!");
}

comment.addEventListener('input', validate);//comment event listener

function star(id, value, array){
 for(let i = 1; i < 6; i++){
  let name = id;
  let number = value;
   if(i <= number){
    document.getElementById(`${name}` + "-" + `${i}`).innerHTML = `&#x2605;`;//black star unicode
   }else {
    document.getElementById(`${name}` + "-" + `${i}`).innerHTML = `&#x2606;`;//white star unicode
   }
 }
 //set array value to valid and set rating
 fieldArray[`${array}`].valid = true;
 fieldArray[`${array}`].rating = `${value}`;
 allFieldsCheck(); //call submit btn check   
}

//comment validation -- with character tracker 
function validate(e){
  //comment character counter update 
  let count = comment.maxLength - comment.value.length ;
  document.getElementById("character-count").innerHTML= "Characters remaning: " + `${count}` +" / " + `${comment.maxLength}`;

    //comment validation check 
    if (e.target.id == "comments"){
      if (!comment.value.trim().length == false){//check that value is not just spaces 
          fieldArray[3].valid = true;//field has valid input 
          document.getElementById("comments-icon").innerHTML = `&#9989;`;//add checkmark &#9989;
          comment.classList.remove('invalid'); //add class invalid 
        if (commentError === true){
          commentError = false;
          document.getElementById("commentWarning").remove(); //remove comment warning created div
        }
        allFieldsCheck();//check if all fields valid
      }
      else {
        fieldArray[3].valid = false;//field has invalid input
        document.getElementById("comments-icon").innerHTML = `&#10060;`; //add x icon &#10060;
        comment.classList.add('invalid');//add class invalid 
        if (commentError === false){
          commentError = true;
          //input needed message -- red font below input box 
          const commentWarning = document.createElement("div");
          commentWarning.innerHTML = 'Must be at least 1 character in length'
          commentWarning.style.color = 'red';
          commentWarning.setAttribute("id", "commentWarning"); //add id to commentWarning
          //'afterend': After the targetElement itself. 
          document.getElementById("comments-icon").insertAdjacentElement("afterend", commentWarning);
        }
      }
    allFieldsCheck();//check if all fields valid
  }
}

//emoji rating  
function emoji(rating, id){
  document.getElementById(`${id}`).classList.add("selected");
  fieldArray[4].valid = true;//field has valid input
  fieldArray[4].rating = `${rating}`;//set rating value
  if(selectedEmoji != ""){ //if var not "" then remove class from previous selection 
     document.getElementById(`${selectedEmoji}`).classList.remove("selected");
  }
  selectedEmoji = id;//set var to be used in removing the "selected" class if another emoji is selected
  allFieldsCheck();//submit btn check call 
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
    {id: "value", rating: 0 ,valid: false},//0
    {id: "quality", rating: 0 ,valid: false},//1
    {id: "features", rating: 0 ,valid: false},//2
    {id: "comment", valid: false},//3
    {id: "emoji", valid: false, rating:""}//4
];
  