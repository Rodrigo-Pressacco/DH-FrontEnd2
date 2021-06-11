
//eleccion del usuario
const eleccionUsuario = function () {
    return parseInt(window.prompt("Piedra(1), Papel(2) o Tijera(3)?"))
}

//eleccion de la PC
const eleccionPC = function () {
    return (Math.round(Math.random() * 3 + 1));
}

//Mostrar Elecciones
const nombre = ["Piedra", "Papel", "Tijera"]

function mostrarElecciones(eleccionUsuario,eleccionPC) {
        alert("La Eleccion del usuario es " + nombre[eleccionUsuario - 1]);
        alert("La Eleccion de la PC es " + nombre[eleccionPC - 1])
}

//Comparacion
function comparacion(eleccionUsuario,eleccionPC) {
    let resultado = -1
    switch (eleccionPC) {
        case 1:
            if (eleccionUsuario == 1) {//Empate
                resultado = 0
            } else if (eleccionUsuario == 2) {//Ganaste
                resultado = 1
            }
            break;
        case 2:
            if (eleccionUsuario == 2) {//Empate
                resultado = 0
            } else if (eleccionUsuario == 3) {//Ganaste
                resultado = 1
            }
            break;
        case 3:
            if (eleccionUsuario == 3) {//Empate
                resultado = 0
            } else if (eleccionUsuario == 1) {//Ganaste
                resultado = 1
            }
            break;
    }
    return resultado
}

//ganador

function ganador(resultado) {
    let mensaje = "Has perdido"
    if (resultado === 0) {
        return mensaje = "Has empatado"
    }else if (resultado === 1){
        return mensaje = "Has Ganado"
    }
    alert(mensaje)
}

// ejecucion

let eleccionQueHizoElUsuario = null;
eleccionQueHizoElUsuario = eleccionUsuario();

let eleccionQueHizoPC = null;
eleccionQueHizoPC = eleccionPC();

mostrarElecciones(eleccionQueHizoPC,eleccionQueHizoElUsuario);

let resultado = null;
resultado = comparacion(eleccionQueHizoPC,eleccionQueHizoElUsuario);

ganador(resultado);
