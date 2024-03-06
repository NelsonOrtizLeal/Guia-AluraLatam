let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerosMaximo = 10;

function asignarTextoElemento(elemento, text) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = text;
}

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * numerosMaximo) + 1;
  console.log(numeroAleatorio);
  console.log(listaNumerosSorteados);

  //Agregando caso base de la recursividad para que se salga y termine el juego
  if (listaNumerosSorteados.length === numerosMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Agregamos recursivadad a la función, ya que solo queremos numeros que no se repitan
    if (listaNumerosSorteados.includes(numeroAleatorio)) {
      return generarNumeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroAleatorio);
      return numeroAleatorio;
    }
  }
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
  asignarTextoElemento("p", `Indica un número del 1 al ${numerosMaximo}`);
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
