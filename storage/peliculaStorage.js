'use strict'
//TOMA LOS DATOS INGRESADOS EN EL INPUT Y LOS ALMACENA EN EL LOCALSTORAGE
window.addEventListener('load', ()=>{

    var form = document.querySelector('#form1');
    
     form.addEventListener('submit', ()=>{
        var pelicula = document.querySelector("#add_peli").value;
        if(pelicula.length >=1){
            localStorage.setItem(pelicula, pelicula);
        }  
         
     });
//MUESTRA LISTA DE PELICULAS ALMACENADA EN EL LOCALSTORAGE
//PENDIENTE ORDENAR LISTA QUE SE MUESTRA EN NAVEGADOR
     var mostrar = document.querySelector("#list-pelicula");
        for(var i in localStorage){
        
        if(typeof localStorage[i] == 'string'){  
        var li = document.createElement("li");
        li.append(localStorage[i]);
        mostrar.append(li);

        }
        }

        //borrar pelicula
        var form1 = document.querySelector("#form2");
        form1.addEventListener('submit', () => {
        var borrar = document.querySelector("#borra_peli").value;
        localStorage.removeItem(borrar);
        });
        


});