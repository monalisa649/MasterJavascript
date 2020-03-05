$(document).ready(function(){

    //MOUSEOVER Y MOUSEOUT

    var caja = $("#caja");
/*
    caja.mouseover(function cambiarRojo(){
        $(this).css("background","red");
    });

    caja.mouseout(function cambiarVerde(){
        $(this).css("background","green");
    });
*/

//********************HOVER**************************** */
//Forma de hacer lo mismo que arriba pero más eficiente. 


    function cambiarRojo(){
        $(this).css("background","red");
    }

    function cambiarVerde(){
        $(this).css("background","green");
    }

    caja.hover(cambiarRojo, cambiarVerde);

    //*******************EVENTO CLICK Y DOBLECLICK*********************

    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });        

    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","blue");
            });

    //************ FOCUS Y BLUR **************** */
    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border","2px solid green")

    });       
    
    nombre.blur(function(){
        $(this).css("border","2px solid red");
        
        $("#datos").text($(this).val()).show();//Meter el valor del input en el div id datos

    });        

    //****MOUSEUP*****MOUSEDOWN*******/

    nombre.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    nombre.mouseup(function(){
        $(this).css("border-color", "black");
    });

//****MOUSEMOVE********** */
var divSigueme = $("#sigueme");

$(document).mousemove(function(){
    $('body').css("cursor","none");
    divSigueme.css("left", event.clientX)
                .css("top",event.clientY);
});
    
    

});