'use strict'

//tabla de multiplicar de un numero introducido por pantalla

/*var num = parseInt(prompt("ingrese el número", ""));

for (var i=1; i<=10; i++ ){
    var result=num*i;
    console.log(num+"x"+i+"="+result);
}*/

//todas las tablas de multiplicar

for(var i=1; i<=10; i++){
    for(var j=1; j<=10; j++){
        console.log(i+"x"+j+"="+(j*i));
    }

}
