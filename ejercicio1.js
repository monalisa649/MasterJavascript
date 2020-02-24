"use-strict"
//Programa que compara 2 numeros y muestra si son iguales, el mayor y el menor

var num1=parseInt(prompt("Ingrese un numero","")) ;
var num2=parseInt(prompt("Ingrese otro valor",""));

while(num1 <=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1=parseInt(prompt("Ingrese un numero","")) ;
   
    num2=parseInt(prompt("Ingrese otro valor",""));
    

}



console.log(num1,num2);

if(num1==num2){
document.write(num1+""+'es igual a'+''+num2);
}else if(num1>num2){
    document.write(num1+""+"es mayor que"+""+num2);
}else {
    document.write(num1+""+"es menor que"+""+num2);
}


