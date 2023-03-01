var number = 5; //comment
console.log(number);
/* multiline 
comment */
number = 9;
console.log(number);

var myName = "Beau" // variável global mutável

let ourName = "freeCodeCamp" //variável com valor local

const pi = 3.14 //constante, não pode ser mudada


var a = 5;
var b = 10;
var c = "Eu sou uma ";

a = a+b;

b = b+c;

c = c + "String.";

console.log(a, b, c)

//As variaveis sao sensiveis ao caps

//Para declarar strings só precisa add var = " "
//Quando precisar declarar " " dentro da string, basta add \ antes do "

var str1 = "eu sou uma string \"com aspas\" dentro de uma string"; 
//Outra maneira é utilizar aspas simples para determinar a string

var str2 = 'eu sou uma string "com aspas" dentro de uma string'
console.log(str1, str2);

/*
\\ add backslash
\n nova linha
\r carriage return
\t tab
\b backspace
\f form feed
*/


//Valores booleanos

function bool(){
    return false;
}

//declarando as variaveis com let( uma variavel let nao pode ser declarada mais de uma vez)
//exemplo usando let onde o i receberia um novo valor caso fosse declarado como VAR

function checarLocal(){
    "use strict";
    let i = "variavel da funcao";
    if(true){
        let i = "variavel do bloco IF";
        console.log("Dentro do IF: ", i);
    }
    console.log("Fora do IF: ", i);
    return i;
}
checarLocal();

// variavel do tipo CONST nao pode ser alterada
// é usada quando voce nao pretende alterar nunca a variavel (nomes de CONST sao escritos em CAPS)

const S = [5, 7, 12];
console.log(S);
function editar(){
    "use strict";
    //S = [2, 5, 7]; isso nao é editavel e traz um erro, mas se o array for editado por posiçao funciona
    S[0] = 2;
    S[1] = 4;
    S[2] = 6;
}
editar();
console.log(S);