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

// Desafio
// Control de eventos

// asignarTextoElemento('h1', "Hora del Desafío.");

function mensajeConsola() {
  console.log("El botón fue clicado");
}

function mensajePrompt() {
  let ciudad = prompt("Dime una ciudad de Brasil");
  alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

function mensajeAlerta() {
  alert("Yo amo Js");
}

function mensajeSuma() {
  let numero1 = parseInt(prompt("Dame el primero numero"));
  let numero2 = parseInt(prompt("Dame el segundo numero"));

  let result = numero1 + numero2;
  alert(`El resultado de la suma es ${result}`);
}
