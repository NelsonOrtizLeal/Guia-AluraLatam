// 1.- Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2.- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3.- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java");
lenguagesDeProgramacion.push("Ruby");
lenguagesDeProgramacion.push("GoLang");

// 4.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarArreglo(arreglo) {
  //   console.log(arreglo);
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

// 5.- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarArregloOrdenInverso(arreglo) {
  for (let i = arreglo.length - 1; i >= 0; i--) {
    console.log(arreglo[i]);
  }
}

// 6.- Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(arreglo) {
  let elementos = arreglo.length;
  let sumatoria = 0;

  for (let i = 0; i < elementos; i++) {
    sumatoria = sumatoria + arreglo[i];
  }

  let promedio = sumatoria / elementos;

  return promedio;
}

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
