"use strict"

// Eventos del raton:

var boton = document.querySelector("#boton");
boton.style.padding = "20px";
boton.style.color = "white";
boton.style.fontSize = "30px";


/*
----------------
Eventos de mouse
----------------
click
mouseover
mouseout
----------------
*/
boton.addEventListener("click", function(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
});


/*
----------------
Eventos de teclado
----------------
focus
blur -- pierde el foco
keydown
keypress
keyup
----------------
*/
var nombre = document.querySelector("#nombre");

nombre.addEventListener("keydown", (e) => {
    console.log("[keydown] Pulsando: "+String.fromCharCode(e.keyCode));
});

nombre.addEventListener("keypress", (e) => {
    console.log("[keypress] Tecla Presionada: "+String.fromCharCode(e.keyCode));
});

nombre.addEventListener("keyup", (e) => {
    console.log("[keyup] Tecla Presionada: "+String.fromCharCode(e.keyCode));
});