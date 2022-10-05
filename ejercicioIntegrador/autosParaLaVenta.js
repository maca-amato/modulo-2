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
    return autos = this.autos.filter (function (elemento) {
          return !elemento.vendido
       })
  },
};
