'use strict'

window.addEventListener('load', ()=>{

   var tiempo = setInterval(function (){  //setTimeOut solo se ejecuta una vez no mantiene ciclo
    var encabezado = document.querySelector("h1");
    
    
    
    if ( encabezado.style.fontSize == "50px")
    {
         encabezado.style.fontSize = "20px";
    }else{
        encabezado.style.fontSize = "50px";
    }


   },3000); // con clearInterval (tiempo) se pararía el intervalo de tiempo
    



});