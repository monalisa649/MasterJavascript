$(document).ready(function(){

//Load hacer una peticiion ajax por  metodo get e incrustar el resultado en la página en la página

//$("#datos").load("https://reqres.in");

//Método Get y Post Ajax

$.get("https://reqres.in/api/users?page=2", function(response){
console.log(response);    
response.data.forEach((element)=> {
      $("#datos").append("<p>"+element.first_name+"<br> "+"email: "+element.email+"<p>");  
    });
});
 
//Metodo post Enviar un usuario y crear su registro en el backend
 /*var usuario = {
     first_name: "Elizabeth Orrego",
     email: "eorregogarcia@gmail.com"
 };*/

/*$.post("https://reqres.in/api/users",usuario, function(response){
 console.log(response);
});*/


$("#form").submit(function(e){

    e.preventDefault();
    var usuario ={
        name: $('input[name="nombre"]').val(),
        email: $('input[name="email]').val()
    };
    $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
    }).done(function(){
        alert("Usuario añadido correctamente");
    });

    return false;
});

   


});