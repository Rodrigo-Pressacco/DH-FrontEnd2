/*alert("hola Mundo");

let array1 = [1 ,2 ,4 ,8];
let array2 = [1 ,2 ,3 ,4];
let array3 = [8 ,5 ,9 ,1];
let array4 = [-5 ,0 ,-4 ,6];

function suma(array) {
    return array.reduce((acum, num) => {
        console.log(acum)  
        acum += num; 
        return acum;
    })
};

console.log(suma(array1));
console.log("----");
console.log(suma(array2));
console.log("----");
console.log(suma(array3));
console.log("----");
console.log(suma(array4));
console.log("----");*/


let edad = parseInt(prompt("Ingrese su edad"));

if(edad>18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}