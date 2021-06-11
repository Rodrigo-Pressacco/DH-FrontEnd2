
function eligeUsuario() {
  let eleccionUsuario;
  while (eleccionUsuario > 3 || eleccionUsuario < 1 || !eleccionUsuario) {
    eleccionUsuario = parseInt(window.prompt('Piedra(1), papel(2) o tijera(3)?'));
  }
  return eleccionUsuario
}
function eligePC() {
  return parseInt(Math.random() * 3 + 1);
}

function calcularGanador(eleccionUsuario, eleccionPC) {
  console.log(eleccionUsuario);
  console.log(eleccionPC);
  switch (eleccionPC) {
    case 1:
      if (eleccionUsuario == 1) {
        // empate
        return "Han empatado";
      } else if (eleccionUsuario == 2) {
        // gana usuario
        return "Has Ganado";
      } else {
        // pierde usuario
        return "Perdiste ;)";
      }

    case 2:
      if (eleccionUsuario == 2) {
        // empate
        return "Han empatado";
      } else if (eleccionUsuario == 3) {
        // gana usuario
        return "Has Ganado";
      } else {
        // pierde usuario
        return "Perdiste ;)";
      }

    case 3:
      if (eleccionUsuario == 3) {
        // empate
        return "Han empatado";
      } else if (eleccionUsuario == 1) {
        // gana usuario
        return "Has Ganado";
      } else {
        // pierde usuario
        return "Perdiste ;)";
      }
  }
}

function mostrarQuienGano(nombreGanador) {
  alert(nombreGanador)
}
//const nombre = ['piedra', 'papel', 'tijera']

function jugar() {
  const eleccionUsuario = eligeUsuario();
  const eleccionPC = eligePC();
  const ganador = calcularGanador(eleccionUsuario, eleccionPC);
  mostrarQuienGano(ganador);
}

const queresJugar = confirm("Queres Jugar?");

if (queresJugar) {
  jugar()
}
