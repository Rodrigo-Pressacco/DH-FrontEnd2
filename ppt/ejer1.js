let numeroCasillas = 10;
let premioTotal = 2500;

function numeroCliente() {
    let numero;
    while (numero > numeroCasillas || numero < 1 || !numero) {
        numero = parseInt(prompt("Ingrese un numero entre 1 y el " + numeroCasillas + " para jugar")) 
    }
    return numero
}

function tuPremioEs() {  
     
    alert("Has ganado" + (numeroCliente() / numeroCasillas * premioTotal))
}
function ejecutar() {
    tuPremioEs();
    confirm("Quieres volver a jugar")?ejecutar():alert("Gracias a jugar")
}

ejecutar();