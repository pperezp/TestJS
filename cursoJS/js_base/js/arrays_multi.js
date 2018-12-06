"use restrict"

var juegos = ["Minecraft","PES","FIFA"];
var categorias = ["Shooter","RPG","Emulador","FPS"];

var arreglo = [juegos, categorias];

var elemento;
do{
    elemento = prompt("Ingrese un juego: ");

    // añade un nuevo juego
    juegos.push(elemento);
}while(elemento != "salir");

// saco el juego "salir"
juegos.pop();

// join convierte un array en un string separados por comas
var strJuegos = juegos.join();

// de string a arreglo
var arregloNuevo = strJuegos.split(",");

juegos.sort();

console.log(arreglo);
console.log(strJuegos);
console.log("Ordenado asc"+juegos);
console.log("Ordenado desc"+juegos.reverse());