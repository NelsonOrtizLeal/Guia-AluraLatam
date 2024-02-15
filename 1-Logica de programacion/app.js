// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);

/*!SECTION
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadero la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
}else{
    if(numeroUsuario > numeroSecreto){
        alert("El numero secreto es menor");
    }else{
        alert("El numero secreto es mayor");
    }
    //La condición no se cumplio
    alert('Lo siento, no acertaste el numero.')
}