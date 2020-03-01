'use strict'
//mostrar el resultado y la media de los numeros  introducidos por el usuario hasta que el ultimo sea negativo
var i=0;
var result=0;
var media=0;

do{
    i++;
    var num= parseFloat( prompt("Ingrese valor"+i,+""));
    result=result+num;
    console.log(result);
    media=result/i;
    console.log("la media es",media);
    
}while(num>0);

