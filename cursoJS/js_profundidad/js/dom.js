"use strict"

// DOM: Document Object Model
// var caja = document.getElementById("micaja");

// más elegante!

/*
. --> clases
# --> id
  --> tag
*/
var caja = document.querySelector("#micaja");

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

console.log(caja);

/*Obtener varios elementos y recorrerlos, muy brígido*/
var btns = document.querySelectorAll(".btn");

btns.forEach((elemento) => {
    elemento.style.background = "red";
    elemento.style.padding = "20px";
    elemento.style.color = "white";
    elemento.style.margin = "5px";

    var p = document.createElement("p");
    var texto = document.createTextNode("Text Node");
    p.appendChild(texto);
    p.style.background = "blue";
    elemento.appendChild(p);
});
/*Obtener varios elementos y recorrerlos, muy brígido*/