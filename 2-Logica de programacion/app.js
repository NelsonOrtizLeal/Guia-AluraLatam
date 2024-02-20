//Seleccionando el objeto h1 del objeto DOM
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10";

// Control de eventos
function intentoDeUsuario(){
    alert("Has hecho click");
}