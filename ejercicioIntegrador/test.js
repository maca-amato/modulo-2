let autos = require ('./autos');

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente == patente) {
                return autos[i];
             }
        }

        return null;

    },

    venderAuto: function (patente) {
        return this.buscarAuto(patente).vendido = true;
    },

    autosParaLaVenta: function(){
        return this.autos.filter (function (auto) {
              return auto.vendido == false;
        })
    },

    autosNuevos: function () {
        let autosEnVenta = this.autosParaLaVenta ();
        let autos = autosEnVenta.filter (function (auto) {
            return auto.km < 100;
        })
    
        return autos;
    
    },

    listaDeVentas: function () {
        let arrayDePrecios = [];
        let autosVendidos = this.autos.filter (function (auto) {
            if (auto.vendido == true) {
                arrayDePrecios.push (auto.precio);
            }
        })

        return arrayDePrecios;

    },

    totalDeVentas: function() {
        let contador = this.listaDeVentas().reduce (function(acc, item){
            return acc + item;

        }, 0);

        return contador

    },

    puedeComprar: function (auto,persona) {
        return (auto.precio <= persona.capacidadDePagoTotal &&
                auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas)
    },

    autosQuePuedeComprar: function (persona) {
        let listaDeAutos = [];

        let autos = this.autosParaLaVenta ();

        autos.forEach (auto => {
            if (this.puedeComprar(auto,persona)) {
                listaDeAutos.push(auto);
            }
        }); 

        return listaDeAutos

    }

};
