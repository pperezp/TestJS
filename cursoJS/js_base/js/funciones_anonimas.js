"use strict"

/*
Funciones anónimas
Funciones que no tienen nombres
*/

var pelicula = function(nombre){
    return "La película es: "+nombre;
}

function sumame(num1, num2, mostrar, mostrarPorDos){
    var sumar = num1 + num2;

    mostrar(sumar);
    mostrarPorDos(sumar);

    return sumar;
}

// Cuando le entrego como parámetro a una función, otra función
// anónima, se llama callback
sumame(1,2, function(dato){
    console.log("La suma es: "+dato);
}, function(dato){
    console.log("La suma por dos es: "+ (dato * 2));
});

/* Lo mismo pero funciones de flecha (lambda)*/
sumame(1,2, (dato) => {
    console.log("La suma es: "+dato);
}, (dato) => {
    console.log("La suma por dos es: "+ (dato * 2));
});
