function funcaoreusavel(){
    console.log("sup, world?!");
}
funcaoreusavel();

//passando parametros por argumentos

function funcarg(a, b){
    console.log(a-b);
}
funcarg(5, 8);

//se uma variavel for criada fora da funcao ela sera global

function fun1(){
    var opsGlobal = 4;
    console.log(opsGlobal);
}

fun1();
if (opsGlobal = "undefined"){
    console.log(opsGlobal);
}

//Returning a value from a function

function minusSeven(num){
    return num - 7;
}
function timeFive(num){
    return num * 5;
}

console.log(minusSeven(6), timeFive(2));

var sum = 67;
function addFive(){
    return sum += 5;
}

sum = addFive();
console.log(sum);



