// Elección usuario
const eleccionUsuario = function(){
    return parseInt(window.prompt("Elija: 1=piedra, 2=papel, 3=tijera"));
}

// Elección PC
const eleccionPC = function() {
    return parseInt(Math.random() * 3 + 1);
}

// Mostrar elecciones
const nombre = ["piedra","papel","tijera"]

function mostrarElecciones(eleccionPC,eleccionUsuario){
    alert("Elección Usuario: " + nombre[eleccionUsuario - 1]);
    alert("Elección PC: " + nombre[eleccionPC - 1]);
}

//Se agrega el - 1 porque tenemos las elecciones en un array que va de 0 a 2

// Comparar elecciones

// 1 pierde --> 2
// 2 pierde --> 3
// 3 pierde --> 1

function comparar(eleccionPC,eleccionUsuario){
    let resultado = -1;
    switch (eleccionPC) {
        case 1:
            if (eleccionUsuario == 1) {
                //empate
                resultado = 0;
            } else if (eleccionUsuario == 2) {
                // gana usuario
                resultado = 1;
            } 
        break;

        case 2:
            if (eleccionUsuario == 2) {
                //empate
                resultado = 0;
            } else if (eleccionUsuario == 3) {
                // gana usuario
                resultado = 1;
            } 
        break;

        case 3:
            if (eleccionUsuario == 3) {
                //empate
                resultado = 0;
            } else if (eleccionUsuario == 1) {
                // gana usuario
                resultado = 1;
            } 
        break;
    }
    return resultado;
}

// Mostrar ganador

function mostrarGanador(resultado){
    let mensaje = "Has perdido";
    if (resultado == 0) {
        mensaje = "Has empatado";
    } else if (resultado == 1) {
        mensaje = "Has ganado";
    }
    alert(mensaje);
}

//Ejecución

let eleccionQueHizoElUsuario = null;
eleccionQueHizoElUsuario = eleccionUsuario();

let eleccionQueHizoPC = null;
eleccionQueHizoPC = eleccionPC();

mostrarElecciones(eleccionQueHizoPC,eleccionQueHizoElUsuario);

let resultado = null;
resultado = comparar(eleccionQueHizoPC,eleccionQueHizoElUsuario);

mostrarGanador(resultado);


