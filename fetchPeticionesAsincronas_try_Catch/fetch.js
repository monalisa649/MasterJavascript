//Fetch método moderno para hacer peticiones asincronas 

'use strict'

window.addEventListener('load', ()=>{
 var div_usuarios = document.querySelector("#usuarios");
 var usuario_janeth = document.querySelector("#usuario_janeth");
 var div_profesor = document.querySelector("#profesor");
 
 function getUsuarios(){
    return fetch('https://reqres.in/api/users');//Acceder a datos remotos, fecth hace la petición
}
  
 getUsuarios()
  .then(data => data.json())//Cuando reciba los datos los convierta  a json
  .then(users =>{ //ya tenemos los datos recojidos
      
    listarUsuarios(users.data);//Pasamos los datos como parametro a la función

    return getInfo();

       
}).then(data => {
    div_profesor.innerHTML=data;

    return getJaneth();
}).then(data=>data.json())
.then(user =>{
    mostrarJanet(user.data);

    
}).catch(error =>{// código para capturar error en las promesas
alert("Ha ocurrido un error en las peticiones");
});
    function listarUsuarios(usuarios){
        usuarios.map((users, i)=>{ 
            let nombre = document.createElement('h2');
            nombre.innerHTML= i+"-"+users.first_name+" "+users.email;
            div_usuarios.append(nombre);
            var cargando = document.querySelector(".loading").style.display="none";
        });
      }

      function getJaneth(){
          return fetch("https://reqres.in/api/users/2");
      }

      function mostrarJanet(user){
        let nombre = document.createElement('h2');
        let avatar = document.createElement('img');
        nombre.innerHTML= user.first_name+" "+user.email;
        usuario_janeth.append(nombre);
        var cargando = document.querySelector("#usuario_janeth .loading").style.display="none";
        avatar.src = user.avatar;
        avatar.width = "100";
        usuario_janeth.append(avatar);
      }

      function getInfo(){
        var profesor={
            nombre: "Elizabeth",
            apellidos: "Orrego",
            email: "elisa1603@gmail.com"

        };

        return new Promise((resolve, reject)=>{
            var profesor_string= "";
            setTimeout(() => {
                profesor_string= JSON.stringify(profesor);//convertir objeto en string
                if(typeof profesor_string != 'string' || profesor_string ==''){
                    return reject('error');
                }
                return resolve(profesor_string);
            }, 3000);
            
           
           
        });

        

      }


});