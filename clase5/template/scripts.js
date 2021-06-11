const h1 = document.querySelector("h1")
console.log("Hello world!");

h1.style.color = "red";
h1.style.fontSize = "35px";

const li = document.querySelector("ul li:nth-child(4)");
console.log(li);


const resultado = confirm("desa cambiar la clase?");

if (resultado) {
    li.classList.toggle("importante");    
}

//const resultado2 = confirm("desa cambiar la clase?");
//if (resultado2) {
//    li.classList.toggle("importante");     
//}