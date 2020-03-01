'use strict'

var listadoDivs= document.getElementsByTagName("div");
console.log(listadoDivs);

var valor;
var seccion=document.querySelector("#mySeccion");
var hr= document.createElement("hr");
for(valor in listadoDivs){
    if(typeof listadoDivs[valor].textContent == 'string'){
    var parrafo= document.createElement("p");
    var texto= document.createTextNode(listadoDivs[valor].textContent);
    parrafo.appendChild(texto);
    seccion.appendChild(parrafo);

}

}

seccion.append(hr);

var divs = document.querySelectorAll("#titulo"); //querySelector hace lo mismo que el document.getElementByClassName
console.log(divs);