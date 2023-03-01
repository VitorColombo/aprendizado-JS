const bicicleta = {
    marcha: 2,
    mudarmarcha (novamarcha){
        "use strict";
        this.marcha = novamarcha;
    }
};

bicicleta.mudarmarcha(3);
console.log(bicicleta.marcha);