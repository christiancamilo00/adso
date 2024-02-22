const readline = require('readline');

let captura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let captura2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question("cual es el numero a sumar:",function(respuesta){
    console.log(`El numero ingresado es : ${respuesta}`);
    captura2.question("cual es el numero a sumar:",function(respuesta2){
        console.log(`El numero ingresado es : ${respuesta2}`);
    
        captura2.close();
    });
    captura.close();
    let resul = captura + captura2;
    console.log(resul);
});




