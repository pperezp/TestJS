"use restrict"
var juegos = ["Minecraft","PES","FIFA"];

var j = juegos.find((texto) => {
    return texto == "PES";
});

console.log(j);

var index = juegos.findIndex((texto) => {
    return texto == "PES";
});

console.log("Índice de PES --> "+index);

var existePes = juegos.some((texto) => {
    return texto == "PES";
});

console.log("Existe PES? :"+existePes);