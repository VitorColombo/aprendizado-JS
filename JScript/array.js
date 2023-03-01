
var Array = ["Vitor", 26];

//nested array (arrays com arrays dentro)
//Array = [["o universo", 42], ["tudo", 101010]];

//acessando arrays

var info1 = Array[0];
var info2 = Array[1];

console.log(info1, "\n" ,info2);

//Editando array com index

Array[1] = 22;
console.log(info1, "\n" ,Array[1]);

//Array multidimensional (arrays com arrays)

var myarray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var info3 = myarray[3][0][1];

console.log(info3);

//manipulando array com push (add)

myarray = [["Vitor", 26], ["maru", 1]];
myarray.push(["nix", 2]);
var i = 0;
console.log(myarray[i][0], myarray[i][1]);
i++;
console.log(myarray[i][0], myarray[i][1]);
i++;
console.log(myarray[i][0], myarray[i][1]);
i++;

//manipulando array com pop (remove the last)

var retiradoarray = myarray.pop();

console.log(retiradoarray);
console.log(myarray);

//manipulando array com shift (remove the first)

retiradoarray = myarray.shift();

console.log("\n\n\n\n", retiradoarray);
console.log(myarray);

//manipulando array com unshift (add to the beggining)

myarray.unshift(["let", 26]);
console.log(myarray);

function next(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("before: " + JSON.stringify(testArr));
console.log(next(testArr, 6));
console.log("after: " + JSON.stringify(testArr));

