//funcao anonima

var magia = function(){
    return true;
}

var magia = () => { //funcao anonima
    return true;
}

const magica = () => true; //funcoes que apenas retornam um valor

//Arrow functions com parametros
// sao usadas quando uma uma funcao requer outra funcao como um argumento

const myconcat = (arr1, arr2) => arr1.concat(arr2); //.concat une os dois arrays

console.log(myconcat ([1,2], [3, 4, 5]));

//lista com arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);//filtra os numeros inteiros E maiores que 0 e depois faz o quadrado de cada um deles
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//rest operador (...) une todos os valores em um unico array

const sum = (function() {
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 54, 76, 1));

//Spread operator (...) pega um array e separa ele

const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
let arr2;
(function() {
    arr2 = arr1; //os arrays sao os mesmos entao os 2 serao alterados
    arr2 = [...arr1]; //assim, o arr2 vai ser igual ao CONTEUDO do arr1. Se tornando apenas uma copia
    arr1[0] = 'potato'
})();
console.log(arr2);
