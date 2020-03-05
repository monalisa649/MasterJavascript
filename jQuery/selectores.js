$(document).ready(function(){ //Carga el documento html dentro de las llaves se ejecuta el código SIGNO DOLLAR hace referencia a objeto de jQuery

//****SELECTORES/

//selector ID


$("#rojo").css("background","red")
          .css("color","white");

$("#amarillo").css("background","yellow")
             .css("color","green");
             
$("#verde").css("background","green")
            .css("color","white");

            
//selectores de Clase
var mi_clase=$(".zebra").css("padding", "5px");

$(".sin_borde").click(function(){
    $(this).addClass("zebra");
});

//Selectores de etiquetas

var parrafos = $('p').css("cursor","pointer");

parrafos.click(function(){
 
    var that= $(this); //para no usar tanto el this y solo acceder al DOM una sola vez

    if(!that.hasClass('grande')){
        that.addClass('grande');
    }else{
        that.removeClass('grande');
    }

});

//Selectores de atributos

$('[title="Google"]').css("background","blue");
$('[title="Facebook"]').css('background', "red");

//Seleccionar varias etiquetas y agregarles una clase

$('p,a').addClass('margen-superior')


//FIND Y PARENT

//Encontrar una clase //Revisar el html linea 48 a 56 para entenderlo

var etiquetaClassResaltado= $('#caja').find('.resaltado');//find buscar en el arbol de html 
//console.log (etiquetaClassResaltado);

var etiquetaClassRes= $('#caja .resaltado');//otra forma de buscar tener en cuenta que #caja el id de el div donde esta contenido la etiqueta con clase .resaltado
//console.log(etiquetaClassRes);

//usar eq(valor).parent().parent().parent() para ir saliendo de las etiquetas inferiiores y llegar a las superiores...investigar

var busquedaFueraDiv= $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google]');
console.log(busquedaFueraDiv);


});

