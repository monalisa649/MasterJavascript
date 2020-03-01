// Algoritmo que toma un valor, separa sus unidades y luego las suma. 

'use strict'

var x=123;
var suma=0;
while(x>0){
   suma=suma+x%10;
   x=x/10;
   
}
console.log(suma); 


