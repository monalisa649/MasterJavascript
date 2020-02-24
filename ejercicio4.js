'use strict'
//Programa que muestra los numeros impares entre dos numeros

var num1= parseInt(prompt("Ingrese el primer valor", ""));
var num2= parseInt(prompt("Ingrese el siguiente valor"));

for(let i=num1; i<=num2; i++){

    if(i%2){
        console.log(i);
    }
}
