//por conta do padrão IEEE 754-2008 existem algumas irregularidades quando tratamos de contas com números menores
// para esse caso, devemos usar console.log(Number.isInteger(num1));

// outra maneira de burlar esse erro é num1 = ((num1*100) + (num2*100)) / 100, assim temos um retorno do valor integral


let num1 = 10;
let num2 = 2.5; 

console.log(num1.toString() + num2); //converte num em string nessa ação
console.log(typeof num1) // demonstração do num1 que continua a ser number nesse caso.
num1 = num1.toString(); // define como string para o resto do código.
console.log(typeof num1)

console.log(num1.toString(2)); // esse número dois pede que seja representado em binário

console.log(num1.toFixed(4)); // quantas casas decimais desejo manter

console.log(Number.isInteger(num1)) // retorna true or false , se ele é inteiro ou não 

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); //  retorna verdadeiro se a conta for invalida

