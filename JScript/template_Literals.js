const person = {
    name: "blbalba",
    age: 67
};

//template literal com interpolaçao multilinhas e string

const greeting = 'Hi, my name is ${person.name}! I am ${person.age} years old.';

console.log(greeting);

// EXEMPLO 2

const result = {
    sucess: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArr = [];
    for (let i = 0; i < arr.length; i++){
        resultDisplayArr.push('<li class="text-warning">${arr[i]}</li>')
    }

    return resultDisplayArr;
}

const resultDisplayArr = makeList(result.failure);
console.log(resultDisplayArr);

//

// const criarPessoa = (nome, idade, genero) => {
//     return {
//         nome: nome,
//         idade: idade,
//         genero: genero,
//     };
// };
const criarPessoa = (nome, idade, genero) => ({nome, idade, genero}); //esta linha faz a mesma coisa que o codigo acima
console.log(criarPessoa("Vitor", 26, "Homem"));