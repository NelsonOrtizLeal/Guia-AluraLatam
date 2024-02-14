// Numero 1
let dia = prompt("¿Qué día de la semana es?");

if(dia == "Sabado" || dia == "Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

// Numero 2
let numero = prompt("Ingresa un numero");

if(numero >= 0){
    alert(`El numero ${numero} es positivo`);
}else{
    alert(`El numero ${numero} es negativo`);
}

// Numero 3
let puntuacion = 90;

if(puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar");
}

// Numero 4
let saldoUsuario = 1000;
let mensaje = `El saldo de tu cuenta es: $${saldoUsuario}`;
console.log(mensaje);

// Numero 5
let nombreUsuario = prompt("Me puedes decir tu nombre");
alert(`¡Bienvenido, ${nombreUsuario}`);