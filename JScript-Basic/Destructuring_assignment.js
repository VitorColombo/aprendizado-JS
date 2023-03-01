//EXEMPLO 1

var voxel = {x: 3.6, y: 7.4, z: 6.53};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x : a, y : b, z : c} = voxel; // da valor das variaveis do objeto(voxel) para as CONST a, b, c criadas

//EXEMPLO 2

const AVG_TEMP = {
    today: 28.6,
    tomorrow: 34.5
};

function tempAmanha(avgTemperatures) {
    "use strict";
    const {tomorrow: tempOfTomorrow, today: tempOfToday} = avgTemperatures;
    return tempOfTomorrow
}
console.log(tempAmanha(AVG_TEMP));

// EXEMPLO 3

const PREVISAO_LOCAL = {
    hoje: {min: 24.5, max: 30},
    amanha: {min: 25, max: 28}
};

function qualMaxAmanha (previsao){
    "use strict";
    const {amanha: {max: maxAmanha}} = previsao; // foram feitas 2 desconstrucoes do objeto Previsao e Amanha para chegar no max
    return maxAmanha;
}
console.log(qualMaxAmanha(PREVISAO_LOCAL));

// EXEMPLO 4

const [p, i, , , u] = [1, 2, 3, 4, 5, 6]; //decompondo o array escolhendo os conteudos 
console.log(p, i, u);

let g = 8, j = 6;
(() => {
    "use strict";
    [g, j] = [j, g]; //trocando o conteudo dos valores do array com arrow function
});
console.log(g);
console.log(j);

//EXEMPLO 5

const fonte = [1,2,3,4,5,6,7,8];
function remove2(list){
    const [, , ...arr] = list; //cria arr, decompoe e copia para ele da fonte a partir do 3 valor
    return arr;
}
const arr = remove2(fonte);
console.log(arr);
console.log(fonte);

// EXEMPLO 6
//API CALL

const status = {
    max: 56.4,
    min: 40.8, 
    bla: 342,
    bira: 834,
    bue: 1238
};
const half = (function (){ 
    return function half({max, min}){//mas apenas max e min estao sendo carregados para uso
        return (max + min) / 2.0;
    };
})();
console.log(half(status));//o objeto inteiro esta sendo enviado para a funcao

