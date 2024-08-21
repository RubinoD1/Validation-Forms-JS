//star value event listeners 
document.getElementById("value-1").onclick = function(){star("value" ,1, 0);}
document.getElementById("value-2").onclick = function(){star("value" ,2, 0);}
document.getElementById("value-3").onclick = function(){star("value" ,3, 0);}
document.getElementById("value-4").onclick = function(){star("value" ,4, 0);}
document.getElementById("value-5").onclick = function(){star("value" ,5, 0);}
// star quality event listeners
document.getElementById("quality-1").onclick = function(){star("quality" ,1, 1);}
document.getElementById("quality-2").onclick = function(){star("quality" ,2, 1);}
document.getElementById("quality-3").onclick = function(){star("quality" ,3, 1);}
document.getElementById("quality-4").onclick = function(){star("quality" ,4, 1);}
document.getElementById("quality-5").onclick = function(){star("quality" ,5, 1);}
// star features event listeners
document.getElementById("features-1").onclick = function(){star("features" ,1, 2);}
document.getElementById("features-2").onclick = function(){star("features" ,2, 2);}
document.getElementById("features-3").onclick = function(){star("features" ,3, 2);}
document.getElementById("features-4").onclick = function(){star("features" ,4, 2);}
document.getElementById("features-5").onclick = function(){star("features" ,5, 2);}

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
}

//comment validation -- with character tracker 








//array to track if all form fileds are valid
let fieldArray = [
    {id: "value", rating: 0 ,valid: false},//0
    {id: "quality", rating: 0 ,valid: false},//1
    {id: "features", rating: 0 ,valid: false},//2
    {id: "comment", valid: false},//3
    {id: "emoji", valid: false}//4
];
  