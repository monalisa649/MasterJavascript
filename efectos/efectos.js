$(document).ready(function(){

//hide método jQuery para ocultar*****show para mostrar
    /*$("#mostrar").hide();
    $("#mostrar").click(function(){
        
        $("#caja").show('slow');//efecto para que desaparezca la caja lentamente
        $("#ocultar").show();
        $("#mostrar").hide();
       
        
    });

    $("#ocultar").click(function(){
        $("#mostrar").show();
        $(this).hide();
        $("#caja").hide('fast');
    });*/


    //efecto fadeIn fadeOut mismo efecto anterior en el div caja

   /* $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn('slow');//efecto para que desaparezca la caja lentamente
        
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('slow');

    });*/

//********fadeTo que vaya de un estado a otro en opacidad recibe 2 parametros*/
    /*
    $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeTo('slow',1);//efecto para que desaparezca la caja lentamente
        
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('slow', 0);

    });*/

    //****toggle** */
    //hace todo lo anterior en 2 lineas de código

    /*$("#todo").click(function(){
        $("#caja").toggle('fast');//también esta el slideToggle(), fadeToggle()... slideUp()(para mostrar) slideDown()(para ocultar)
    });*/

    /*$("#todo").click(function(){
        $("#caja").slideToggle('fast');/*Aquí puedo añadir una funcion de callback
         si quiero hacer algún procedimiento. ejemplo: .slideToggle('fast', function(){
             console.log("caja desplegada y oculatada");
         })
    });*/

    //***Función animate({parametros de animación},velocidad('slow,fast,normal)) */

    $("#animar").click(function () {
        $("#caja").animate({
            marginLeft: "400px",
            borderRadius: "900px",
            marginTop:"90px"
            
        },'slow').animate({
            marginTop: "200px",
            marginLeft: "0px",
            marginTop: "0px",
            
        },'slow').animate({
            borderRadius:"0px"
        },'slow') 

    });

});