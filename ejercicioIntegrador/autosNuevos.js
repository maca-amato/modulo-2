let autos = require ('./autos');

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente) {
      for (let i = 0; i < autos.length; i++) {
         if (autos[i].patente === patente) {
            return autos[i];
         } else {
            return null;
         }
      }
   },

   venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
            auto.vendido = true;
  },

  autosParaLaVenta: function(){
    return autos = this.autos.filter (function (auto) {
          return !auto.vendido
       })
  },

  autosNuevos: function () {
    let autosEnVenta = this.autosParaLaVenta ();
    let autos = autosEnVenta.filter (function (auto) {
        return auto.km < 100;
    })

    return autos;

  }
};