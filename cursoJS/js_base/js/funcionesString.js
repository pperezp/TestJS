"use strict"

var mensaje = "wena, como estás?";

console.log(mensaje);
console.log("mensaje.toLowerCase(): "+ mensaje.toLowerCase());
console.log("mensaje.toUpperCase(): "+ mensaje.toUpperCase());
console.log("mensaje.length: "+mensaje.length);

mensaje = mensaje.concat(" Que wena");

console.log("mensaje.concat(\" Que wena\"): "+mensaje);

var index = mensaje.search("wena");
console.log("wena esta en el índice: "+index);
console.log("wena esta en el índice: "+mensaje.search("w"));

// g es de global, o sea busca la palabra wena en todo el string
// y lo deja como un array
var resultado = mensaje.match(/wena/g);

console.log(resultado);
console.log("Letra número 2: "+mensaje.charAt(2));
console.log("Comienza con w?: "+mensaje.startsWith("w"));
console.log("str.include(\"como\"): "+mensaje.includes("como"));
console.log(mensaje.replace("wena", "que wea"));

var html = `
    <h1>Prueba de plantilla</h1>
    Mensaje: ${mensaje}
`;

document.write(html);