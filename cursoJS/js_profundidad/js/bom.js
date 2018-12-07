"use strict"

// BOM - Browser Object Model
console.log("Ancho de la ventana: "+window.innerWidth);
// si la herramienta esta abierta, es menos
console.log("Alto de la ventana: "+window.innerHeight); 


console.log(screen.width);
// es full la pantalla
console.log(screen.height);

console.log(window.location);

function redirigir(url){
    // dirige automática hacia la url
    // lo probamos en console de chrome, 
    // llamando a la funcion redirigir("http://gtihub.com")
    window.location.href = url;

    // probar en el chrome, abre una ventana nueva
    window.open(url, "", "width=400, height=400");
}