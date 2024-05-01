 
 function print(){

start = document.getElementById("start").value; 
End = document.getElementById("end").value; 


let print_d =document.getElementById("box");

for(let i=start; i<=End ; i++){
     print_d.innerHTML += "<li>"+i+"</li>"
}

 }
