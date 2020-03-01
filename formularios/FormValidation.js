window.addEventListener('load', () =>{

    var form= document.querySelector("#form1");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";

    form.addEventListener('submit', function(){
        console.log("Evento capturado");

        
        var nombre= document.querySelector("#nombre").value; //. value toma el valor que hay en el campo
        var apellidos= document.querySelector("#apellidos").value;
        var edad= parseInt(document.querySelector("#edad").value) ;

        if(nombre.trim() == null || nombre.trim().length == 0 ){
            
            document.querySelector("#error_nombre").innerHTML="El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display="none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            document.querySelector("#error_apellido").innerHTML="Los apellidos no son validos";
            return false;
        }else{
            document.querySelector("#error_apellido").style.display="none";
        }

        if(edad == null || isNaN(edad) || edad <=0){
            
            document.querySelector("#error_edad").innerHTML="La edad no es valida";
            return false;
        }else{
            document.querySelector("#error_edad").style.display="none";
        }

        var datos=[nombre,apellidos,edad];
        var valor;
        
        for(valor in datos ){
            
        var parrafo = document.createElement("p");
        parrafo.append(datos[valor]);
        box_dashed.append(parrafo);
        box_dashed.style.display="block";
             
        }


    });


    
});