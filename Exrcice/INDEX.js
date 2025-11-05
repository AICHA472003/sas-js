let button=document.getElementById("btn");
let homwork=document.getElementById("homwork");
let liste=document.getElementById("liste");

button.addEventListener("click",function(e){
    e.preventDefault()
    let Tarze= homwork.value;
    if(Tarze=='')  return;
    let broderi=document.createElement("li");
broderi.innerText=Tarze;
liste.appendChild(broderi);
homwork.value="";
let impaire=document.querySelectorAll("li:nth-child(odd)");
impaire.forEach(li=>li.style.color="green");
let pair=document.querySelectorAll("li:nth-child(even)");
pair.forEach(li=>li.style.color="red");
     
})

