
//while loop
var myAr = [];

var i = 0;
while (i<5) {
    myAr.push(i);
    i++;
}

console.log(myAr);

//for loop

var Ar2 = [ ];

for (var j = 0; j < 5; j++){
    Ar2.push(j);
}
console.log(Ar2)

// numeros impares com for

Ar2 = [];
for (i = 1; i < 10; i += 2){
    Ar2.push(i);
}
console.log(Ar2);

//contando ao contrario com for

Ar2 = [];
for (i = 10; i > 0; i -= 1){
    Ar2.push(i);
}
console.log(Ar2);

//interagindo com o conteudo de um Array usando for

var Ar = [8, 9, 5, 7, -12];
var total = 0;

for (i = 0; i < Ar.length; i++){ // array.length diz o número de itens contidos no array
    total += Ar[i];
}
console.log(total);

//nested for loops in arrays

function multiAll(arr){
    var produto = 1;
    
    for (i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            produto *= arr[i][j];
            console.log(arr[i][j]);
        }
    }
    return produto;
}

var produto = multiAll([[1, 2], [3, 4], [5, 6, 7]])
console.log(produto);

//do while loops. Nestes loops a açao é acionada no MINIMO 1 vez independente da condiçao ser aceita

myAr = [];
i = 10;

do {
    myAr.push(i);
    i++;
} while (i < 5)

console.log(i, myAr);

