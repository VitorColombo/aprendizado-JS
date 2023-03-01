function trueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, its true!"
    }
    return "No, its false!!!"
}
console.log(trueOrFalse(false));

//comparing equality

function testEqual(val){
    if(val == 12){
        return "Ëqual!";
    }
    return "Not Equal!";
}
console.log(testEqual(12));

//strict equal (===), também avalia o tipo da variavel
//strict not equal (!==)

function testestrito(val){
    if(val === 7){
        return "Equal";
    }
    else if (val == 7){
        return "Not entirely Equal";
    }
    return "Not Equal";
}
console.log(testestrito('7'));


