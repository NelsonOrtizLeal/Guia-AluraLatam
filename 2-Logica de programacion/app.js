//Seleccionando el objeto h1 del objeto DOM
let titulo = document.querySelector('h1');
//titulo.innerHTML = "Juego del numero secreto";
titulo.innerHTML = "Hora del Desafío";


let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10";

// Control de eventos
function intentoDeUsuario(){
    alert("Has hecho click");
}

function mensajeConsola(){
    console.log("El botón fue clicado");
}

function mensajePrompt(){
    let ciudad = prompt("Dime una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

function mensajeAlerta(){
    alert("Yo amo Js");
}

function mensajeSuma(){
    let numero1 = parseInt(prompt("Dame el primero numero"));
    let numero2 = parseInt(prompt("Dame el segundo numero"));

    let result = numero1 + numero2;
    alert(`El resultado de la suma es ${result}`);
}