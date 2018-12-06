"use restrict"

// Arreglos

var nombres = ["Pato", "Fabi", "Julia"];

var lenguajes = new Array("Java", "JS", "PHP");

console.log(nombres);
console.log(lenguajes);

/* Recorrer array for normal */
for(let i=0; i<lenguajes.length; i++){
    document.write(lenguajes[i]+"<br>");
}

// el arreglo es el arreglo completo
lenguajes.forEach((elemento, index, arreglo) => {
    document.write(index+" -> "+elemento+"<br>");
});

// Otra forma
for(let index in lenguajes){
    //document.write(`${lenguajes[index]}<br>`);
    document.write(lenguajes[index]+"<br>");
}