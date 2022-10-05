function peliculasVistas (...nombrePeliculas) {
    console.log (nombrePeliculas);
}

console.log (peliculasVistas ("End Game", "Iron Man"));
//podemos agregar cualquier cantiddad de parámetros en el console.log

//podemos combinar con otras cosas:

function peliculasVistas (...nombrePeliculas) {
    for (let i = 0; i < nombrePeliculas.length; i++);
        console.log ("La persona ya vió " + nombrePeliculas[i]);
}
