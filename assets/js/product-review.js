
//star value event listeners 
document.getElementById("value-1").onclick = function(){star("value" ,1);}
document.getElementById("value-2").onclick = function(){star("value" ,2);}
document.getElementById("value-3").onclick = function(){star("value" ,3);}
document.getElementById("value-4").onclick = function(){star("value" ,4);}
document.getElementById("value-5").onclick = function(){star("value" ,5);}

function star(id, value){
 for(let i = 1; i < 6; i++){
  let name = id;
  let number = value;
   if(i <= number){
    document.getElementById(`${name}` + "-" + `${i}`).innerHTML = `&#x2605;`;//black star unicode
   }else {
    document.getElementById(`${name}` + "-" + `${i}`).innerHTML = `&#x2606;`;//white star unicode
   }
 }

 //set name value to true in array 

}