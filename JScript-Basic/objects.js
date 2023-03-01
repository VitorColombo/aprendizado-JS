
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//acessing object properties
//dot

var dogname = ourDog.name;
var doglegs = ourDog.legs;

console.log(dogname, doglegs, "legs");

//bracket, usado quando há um espaço em branco na propriedade do objeto
var testeObj = {
    "uma comida": "pizza",
    "a mesa": 3,
    "horario": "13h",

};

var comes = testeObj["uma comida"];
var qd = testeObj["horario"];
console.log(comes, qd);

//adding new properties to an object

ourDog.late = "grwwwal!";

//deleting properties

delete ourDog.tails;

//lookups
function procura(val){
    var lookup = {
        "Alpha": "Adams",
        "Beta": "Boston",
        "Delta": "Detroit"
    };
    var result = lookup[val];
    return result;
}
console.log(procura("Alpha"));


//Checar se o Objeto tem a propriedade
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(check){
    if (myObj.hasOwnProperty(check)){
        return myObj[check];
    }
    else{
        return "not found!"
    }
}
console.log(checkObj("robson"));

//Manipulando objetos complexos

var Musica = [
    {
        "artista": "Billy Joel",
        "titulo": "Piano Man",
        "ano": 1978,
        "formatos":
        [
            "CD",
            "LP"
        ],
        "gold": true
    },
    //adding a new record
    {
        "artista": "Joe",
        "titulo": "Man",
        "ano": 1956,
        "formatos": 
        [
            "CD",
            "You tube"
        ],
        "gold": false   
    }
]//os colchetes anunciam que isto é um array e cada objeto é um elemento do array

console.log(Musica[1].formatos[1]); //acessando o nested array dentro do objeto

//Objetos aninhados
var meusItens = {
    "carro": {
        "dentro": {
            "porta luvas": "mapa",
            "banco passageiro": "sujeira"
        },
        "fora": {
            "porta malas": "pneu"
        }
    },
    "casa":{
        "dentro": {
            "geladeira": "comida",
            "guarda roupas": "roupas"
        },
        "fora": {
            "jardim": "grama",
            "deposito": "estoque"
        }
    }
};

var oqtem = meusItens.casa.dentro["guarda roupas"];
console.log(oqtem);

//object.freeze

function freezeObj(){
    "use strict";
    const MATH_CONSTANTES = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTES); // vai fazer com que PI nunca possa ser alterado, mesmo sendo objeto
}
