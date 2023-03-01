
var colecao = {
"1": {//id definido como propriedade
        "album": "Slippery When Wet",
        "artista": "Bon Jovi",
        "musicas": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2": {
        "album": "1999",
        "artista": "Prince",
        "musicas": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "3": {
        "artista": "Robert Palmer",
        "musicas": [
        ]
    },
    "4": {
        "album": "1999"
    },
}

var copiaColecao = JSON.parse(JSON.stringify(colecao)); //copiando o conteudo do array para a nova VAR

function atualizarCol(id, prop, valor){
    if(valor === ""){
        delete colecao[id][prop];
    }
    else if (prop === "musicas"){
        colecao[id][prop] = colecao[id][prop] || [];
        colecao[id][prop].push(valor);
    }
    else{
        colecao[id][prop] = valor;
    }
    return colecao;
}
var proc = "musicas";

atualizarCol(2, proc, "entao e natal");

console.log(colecao[2]);