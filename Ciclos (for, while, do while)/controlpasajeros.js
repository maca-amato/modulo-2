function reporteDePasajeros (cantidadEstacionesAvanzadas) {
    let pasajeros = [];
        for (let i = 0; i <= cantidadEstacionesAvanzadas; i++) {
          let estacion = cantidadEstacionesAvanzadas [i];
            if (estacion == 5) {
                pasajeros = pasajeros + 40
            } else {
                pasajeros = pasajeros + 20
            }
        return 'En la estación ' + estacion + ' hay ' + pasajeros + ' pasajeros arriba del tren' 
        } 
}

//En cada estación el tren sube 50 pasajeros y se bajan 30. = 50 - 30 = 20
//En la estación Florida (la estación número 5), como es una estación central es la única donde 
//bajan 80 personas y suben 120. = -80 + 120 = 40

//['En la estación 0 hay 200 pasajeros arriba del tren']

function reporteDePasajeros (estaciones) {
    let respuesta = [];
    for (let i = 0; i <= estaciones; i++) {
        let pasajeros;
        if (i >= 5) {
            pasajeros = 200 + i * 20 + 20;
        } else {
            pasajeros = 200 + i * 20;
        }
        respuesta.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
    }
return respuesta;
}
console.log (reporteDePasajeros(6))