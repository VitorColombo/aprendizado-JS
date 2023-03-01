function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    rand = Math.random();
    console.log(rand);
    return Math.floor(rand * (max-min) + min);
}

//Math.floor arredonda para baixo
//Math.ceil arredonda pra cima
//Math.random randomiza um número entre 0 e 1

function incase(num){
    var resp = " ";
    switch (num){
        case 1:
            resp = "primeiro";
            break;
        case 2:
            resp = "segundo";
            break;
        case 3:
            resp = "terceiro";
            break;
        case 4:
            resp = "quarto";
            break;
    }
    return resp;
}
var pos;
console.log(pos = getRandom(1,5));
console.log(incase(pos));


// default option in switch (como se fosse o else do if)
//basta add default: aos cases, caso nao seja nenhum case, sera acionado o default
//se nao for add nenhum break, todos os cases acima do case com break vao realizar a mesma açao





