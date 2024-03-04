// 1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

// 2.- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
  if (numero <= 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

// 3.- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function valorEnDolares(valor){
    let cotizacion = 4.94
    return valor * cotizacion;
}

// 4.- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaRectangulo(altura, anchura){
    let area = altura * anchura;
    let perimetro = (2 * altura) + (2 * anchura)

    console.log(`El area: ${area} El perimetro: ${perimetro}`)
}

// 5.- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaCircular(radio){
    const pi = 3.14
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio;

    console.log(`El area: ${area} El perimetro: ${perimetro}`)
}


// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${i} x ${numero} = ${i * numero}`)
    }
}
