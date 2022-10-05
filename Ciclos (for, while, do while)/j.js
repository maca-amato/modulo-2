function asientosDisponibles(asientos, solicitado) {
  for (var i = 0; i < asientos.length; i++) {
    if (asientos.indexOf(solicitado) !=-1) {
      return ( "Felicitaciones, el asiento número " + solicitado + " está disponible");
    } else {
      return ("Lo sentimos, el asiento número " + solicitado + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles" );
    }
  }
}

console.log (asientosDisponibles([15, 28, 44, 45, 70], 50))