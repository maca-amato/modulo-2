let generoComedias = {
    nombreGenero: "Comedia",
    popularidad: 3,
}

let miPobreAngelito = {
    nombre: "Mi Pobre Angelito",
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: "Qué pasó ayer?",
    duracion: 110,
    ...generoComedias
}

//para agregar los datos del primer objeto a los otros 2