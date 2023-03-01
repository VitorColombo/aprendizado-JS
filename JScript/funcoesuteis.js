//convertendo string in INT
function converterPInteiro(str){
    return parseInt(str);
}
converterPInteiro("56");

//converter com radix
function convertInt(str){
    parseInt(str, 2); //numero base 2, sabendo que é um numero binario (10 é o normal)
}
convertInt("10011");

//Operador ternario

function checkEqual(a,b){
    // if (a == b){
    //     return true;
    // }
    // else
    //     return false;
    //COM O OPERADOR TERNARIO FICARA ASSIM
    return a === b ? true : false;
    return a === b; //faz a mesma coisa que a linha acima, vai retornar o valor TRUE se a condiçao for correta
};
console.log(checkEqual(1,2));

function checarSinal(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" // se num>0 positivo, se num<0 negativo se nenhum dos dois zero
}
console.log(checarSinal(10));

