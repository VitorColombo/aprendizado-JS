//sintax velha

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;     //constructing object
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);

//class sintax

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//EXEMPLO 2

function makeClass(){
    class Vegetable {
        constructor(name, color){
            this.name = name,
            this.color = color;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot', 'orange');
console.log(carrot.color);

//EXEMPLO3 

function makeClass1(){
    class Thermostato {
        constructor(temp){
            this._temp = 5/9 * (temp - 32); //this = variavel apenas acessivel pela classe //_temp define que temp é uma variavel privada
        }
        get temperatura(){
            return this._temp;
        }
        set temperatura(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostato;
}

const Thermostato = makeClass1();
const thermo = new Thermostato(89);
let temp = thermo.temperatura;
console.log(temp);
thermo.temperatura = 12;
temp = thermo.temperatura;
console.log(temp);