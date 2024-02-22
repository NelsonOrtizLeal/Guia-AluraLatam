let numeroAleatorio = 0;
let intentos = 0;

function asignarTextoElemento(elemento, text) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = text;
}

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio);
  return numeroAleatorio;
}

function verificarNumero() {
  let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

  if (numeroUsuario === numeroAleatorio) {
    asignarTextoElemento(
      "p",
      `Felicidades acertaste el numero secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroAleatorio) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#numeroUsuario").value = "";
}

function iniciarValores() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroAleatorio = generarNumeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //Colocar los mensajes de nuevo
  //Calculaar numero aleatorio
  //reiniciar los intentos
  iniciarValores();
  //Deshabilitar el boton
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

iniciarValores();