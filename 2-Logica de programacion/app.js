let numeroAleatorio = generarNumeroAleatorio();

function asignarTextoElemento(elemento, text) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = text;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un número del 1 al 10");

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio);
  return numeroAleatorio;
}

function verificarNumero() {
  let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
  console.log(typeof numeroUsuario);
  console.log(typeof(numeroAleatorio));
  console.log(numeroUsuario === numeroAleatorio);
  //alert("Has hecho click");
}

