let autos = require ('./autos');

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
      for (let i = 0; i < autos.length; i++) { // en vez del for puedo usar el .forEach
         if (autos[i].patente === patente) { // .patente es la clave de los objetos literales del archivo autos
            return autos[i];
         }
      }

      return null; //no va como else para que el for termine de recorrer el objeto, si no está = null

   }
}

console.log (concesionaria.buscarAuto('APL123'))