// Variables
let limite = parseInt(prompt("Indicame el limite del rango de numeros"));
let numeroSecreto = Math.floor(Math.random() * limite) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximoIntentos = 3;

// console.log(numeroSecreto);

/*!SECTION
Este código realiza
la comparación
*/
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Adivina el numero entre 1 y ${limite}`));

  if (numeroUsuario === numeroSecreto) {
    //Acertamos, fue verdadero la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }.`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }

    //Aumenta el numero de intentos a 1, por haber fallado
    intentos++;
    // palabraVeces = "veces";

    if (intentos > maximoIntentos) {
      alert(`Llegaste a el numero maximo ${maximoIntentos} intentos`);
      break;
    }

    //La condición no se cumplio
    //alert("Lo siento, no acertaste el numero.");
  }
}
