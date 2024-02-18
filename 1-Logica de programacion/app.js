// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

console.log(numeroUsuario);

/*!SECTION
Este código realiza
la comparación
*/
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número por favor:");

  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadero la condición
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }

    //Aumenta el numero de intentos a 1, por haber fallado
    intentos++;
    palabraVeces = "veces";

    //La condición no se cumplio
    //alert("Lo siento, no acertaste el numero.");
  }
}
