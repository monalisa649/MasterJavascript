

//eventos del ratón

window.addEventListener('load', () =>{ //Cuando la página este cargada ejecutará el código, con esto se pueden cargar los script en el head
    var boton = document.querySelector("#boton");

    function cambiarColor(){
         
        if (boton.style.backgroundColor =="red"){

            boton.style.backgroundColor = "blue";

        }else{

            boton.style.backgroundColor= "red";
        }
      
        boton.style.padding = "20px";
        boton.style.border = "2px solid #ccc";
        console.log("hasta aquí voy");
        //return true;
        
    }
    
    // Evento click
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    // evento mouseover

    boton.addEventListener('mouseover', function(){
        boton.style.background= "blue";
    });

    //mouseout parecido al mouseover, la diferencia es que el evento lo hace cuando el mouse sale del botón. 

    boton.addEventListener('mouseout', function(){
        boton.style.background= "green";
    });

    //Eventos de teclado y foco
    //************************************************************************ *

    //focus: Poner el cursor dentro de una caja de texto.
    var texto = document.querySelector("#text1");
    texto.addEventListener('focus', function(){
    console.log("pusiste el clic aquí");
    });

    //blur: Salta afuera del focus.


    texto.addEventListener('blur', function(){
        console.log("Estas fuera del focus");
    })


    //keydown: Captura pulsaciones de teclado

    texto.addEventListener('keydown', function(event){
    console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode)); //fromCharCode: captura las letras que se teclan
    });

    //keypress: Muestra el valor de la tecla después de presionada
    texto.addEventListener('keypress', function(event){
        console.log("Presionaste la tecla", String.fromCharCode(event.keyCode));
    });


    //keyup: muestra el valor de la tecla presionada

    texto.addEventListener('keyup', function(event){
        console.log("Soltaste la tecla", String.fromCharCode(event.keyCode));
    });
}); //end load

