// 1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundoConsola(){
    console.log("¡Hola, mundo!");
}

// 2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre){
    console.log(`¡Hola, ${nombre}`);
}

// 3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleDeNumero(numero){
    return numero * 2;
}

// 4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3){
    let promedio = (numero1 + numero2 + numero3) / 3;
    return promedio;
}

// 5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function max(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else if(numero1 < numero2){
        return numero2;
    }else{
        return 0
    }
}

// 6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function alCuadrado(numero){
    return numero * numero;
}

// Ejecución
holaMundoConsola();
holaNombre("Nelson");

let numero = 7;
console.log(numero)
console.log(dobleDeNumero(numero));

let numero1 = 10;
let numero2 = 10;
let numero3 = 10;
console.log(`(${numero1}, ${numero2}, ${numero3})`);
console.log(promedio(numero1, numero2, numero3));

let numero4 = 5;
let numero5 = 10;
console.log(`(${numero4}, ${numero5})`);
console.log(max(numero4, numero5));

let numero6 = 5;
console.log(numero6);
console.log(alCuadrado(numero6));
