'use strict'

var numeros= new Array();
var i=0;
var elemento=0;


//función que captura los numeros y los almacena en una array
function numArray(){
do{
    i++;
    elemento= parseInt(prompt('Ingrese un valor para la posción'+i,""));
    numeros.push(elemento);
}while( i !=6);
  document.write("<h2>"+"Arreglo ingresado por el usuario"+"</h2>"+numeros)
  return numeros;
 } 
//función que ordena y muestra el array
function mostrarArray(numeros, invertido){
document.write("<h2>"+"Mostrando arreglo ordenado"+"</h2>");
document.write("<ul>");
numeros.sort((a,b)=>a-b).forEach((items)=>{
document.write("<li>" +items+"</li>")
});
document.write("</ul>");
document.write("<hr>");

 invertido(numeros);

}
//función que busca un elemento dentro del array
function buscar(numeros){
    var numbuscar = parseInt(prompt("Ingrese es numero que desea buscar",""));
    var buscar= numeros.find(elemento => elemento === numbuscar)
    if(buscar === undefined){
        alert("El valor no se encuentra en el arreglo")
    }else{
        alert(buscar);}
    
    
}

numArray();
mostrarArray(numeros, arregloInver =>{
    document.write("<h2>"+"Arreglo invertido"+"</h2>")
    document.write(numeros.reverse())
    document.write("<h2>"+"El arreglo tiene"+" "+numeros.length+" "+"números"+"</h2>");
});

buscar(numeros);


