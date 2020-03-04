//Comprobar si localStorage es compatible
window.addEventListener('load', ()=>{
    if(typeof(Storage) !== undefined){
        console.log("Storage disponible");
    }else{
        console.log("No disponible o no compatible");
    }
    
    //Guardar datos en localStorage
    
    localStorage.setItem("email", "eorregogarciag@gmail.com");
    
    //recuperar datos
    document.querySelector("#div-uno").innerHTML=localStorage.getItem("email");


    //Guardar objetos en LocalStorage

    var usuario = {
        correo: "eorregogarcia@gmail.com",
        nombre: "Elizabeth Orrego",
        ciudad: "Manizales"
    }

    localStorage.setItem("usuario", JSON.stringify(usuario)); //JSON.stringfy convierte el objeto json en un string para poder enviarlo al navegador

    //obtener datos objeto

    var datosJSON= JSON.parse(localStorage.getItem("usuario"));
    var div_uno = document.querySelector("#div-uno");
    div_uno.innerHTML=datosJSON.nombre;
    div_uno.append(datosJSON.correo+ " "+ datosJSON.ciudad)
    console.log(datosJSON);

    //borrar elementos del storage

    localStorage.removeItem("usuario");

    localStorage.clear(); //vacia todo el contenido del storage
});

