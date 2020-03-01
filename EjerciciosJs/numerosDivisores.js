'use strict'

//programa que muestra los numeros divisores de un numero introducido por el usuario

var num1= parseInt(prompt("Ingrese el primer valor", ""));
var i=1;

for(i; i<=num1; i++){
    
    

    if(num1%i == 0){
        console.log(i);
    }
}