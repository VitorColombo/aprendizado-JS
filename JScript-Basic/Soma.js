//soma de um array usando reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);// (valor total, numero lido) => expressao matematica a ser feita, valor inicial do total)

console.log(sum);