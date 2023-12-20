// console.log("Hello World!");
function jugada(eleccionJugador, eleccionComputadora) {
  if (eleccionJugador === eleccionComputadora) {
    return "¡Empate!";
  } else if (
    eleccionJugador === "Piedra" &&
    eleccionComputadora === "Tijeras"
  ) {
    return "¡Ganaste! Piedra vence a Tijeras";
  } else if (eleccionJugador === "Papel" && eleccionComputadora === "Piedra") {
    return "¡Ganaste! Papel vence a Piedra";
  } else if (eleccionJugador === "Tijeras" && eleccionComputadora === "Papel") {
    return "¡Ganaste! Tijeras vence a Papel";
  } else if (
    eleccionJugador === "Tijeras" &&
    eleccionComputadora === "Piedra"
  ) {
    return "¡Perdiste! Piedra vence a Tijeras";
  } else if (eleccionJugador === "Piedra" && eleccionComputadora === "Papel") {
    return "¡Perdiste! Papel vence a Piedra";
  } else if (eleccionJugador === "Papel" && eleccionComputadora === "Tijeras") {
    return "¡Perdiste! Tijeras vence a Papel";
  }
}

const eleccionJugador = obtenerJugadaJugador();
const eleccionComputadora = obtenerJugadaComputadora();

function obtenerJugadaComputadora() {
  let respuestaComputadora = Math.floor(Math.random() * 3);
  switch (respuestaComputadora) {
    case 0:
      return "Piedra";
    case 1:
      return "Papel";
    case 2:
      return "Tijeras";
  }
}

function obtenerJugadaJugador() {
  let respuestaJugador = parseInt(
    prompt(
      "Ingresa un número del 0 al 2 donde 0 es piedra, 1 es papel y 2 es tijeras: "
    )
  );
  switch (respuestaJugador) {
    case 0:
      return "Piedra";
    case 1:
      return "Papel";
    case 2:
      return "Tijeras";
    default:
      return "Por favor, ingresa un número válido";
  }
}

console.log(jugada(eleccionJugador, eleccionComputadora));

let victoriasJugador = 0;
let victoriasComputadora = 0;

function jugarRonda() {
  const eleccionJugador = obtenerJugadaJugador();
  const eleccionComputadora = obtenerJugadaComputadora();

  console.log("Jugador: " + eleccionJugador);
  console.log("Computadora: " + eleccionComputadora);

  const resultado = jugada(eleccionJugador, eleccionComputadora);
  console.log(resultado);

  if (resultado.includes("Ganaste")) {
    victoriasJugador++;
  } else if (resultado.includes("Perdiste")) {
    victoriasComputadora++;
  }

  console.log("Victorias del Jugador: " + victoriasJugador);
  console.log("Victorias de la Computadora: " + victoriasComputadora);

  return victoriasJugador < 5 && victoriasComputadora < 5;
}

while (jugarRonda()) {}

console.log("Juego terminado");
