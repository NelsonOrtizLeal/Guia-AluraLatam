//#1 - Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador++;
}

//#2 - Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let temporizador = 10;

while(temporizador >= 0){
    console.log(temporizador);
    temporizador--;
}

//#3 - Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let limite = prompt("Indicame un numero:");
let contadorLimite = 0;

while(contadorLimite <= limite){
    console.log(contadorLimite);
    contadorLimite++;
}

