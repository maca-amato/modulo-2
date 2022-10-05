let peliculasThriller = ["La Isla Siniestra", "Club de la Pelea"];
let peliculasAccion = ["End Game", "Iron Man", "Rápido y Furioso"];

//let peliculas = [peliculasThriller, peliculasAccion];
// esta sintaxis nos muestra los dos arrays por separado

let peliculas = [...peliculasThriller, ...peliculasAccion];

console.log(peliculas);