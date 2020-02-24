'use strict'

var num= parseInt(prompt("Ingrese un numero", ""));

while(isNaN(num) || num<=0 ){
    num= parseInt(prompt("Ingrese un numero", ""));
}
    if(num%2){
        console.log("Es numero impar");
    }else{
        console.log("Es numero par");
    }
