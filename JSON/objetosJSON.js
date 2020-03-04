//Objetos JSON forma de almacenar información tipo array asociativo como los hay en PHP
'use strict'

window.addEventListener('load', () =>{

    var pelicula = {
        tilte: "Batman-Forever",
        year: 2017,
        gender: "Suspenso"
    };

    console.log(pelicula);

    pelicula.tilte= "Spiderman";

    console.log(pelicula.tilte);

    console.log(pelicula);

    var peliculas = [
        {
            tilte: "Batman-Forever",
            year: 2003,
            gender: "Acción"
        },

        pelicula
    ]

    console.log(peliculas);
    var index;
    var divPeli = document.querySelector("#div-peli");

    for(index in peliculas){
        var parrafo = document.createElement('p');
        parrafo.append(peliculas[index].tilte +", "+ peliculas[index].year+", "+peliculas[index].gender);
        divPeli.append(parrafo);
        
        
    }

    


    

});


