const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");

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
    console.log("checked");
    target.type = "text";
  } else {
    console.log("unchecked");
    target.type = "password";
  }
}


