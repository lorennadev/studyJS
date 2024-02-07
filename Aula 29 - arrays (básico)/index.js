// Arrays básico 

// const alunos = 'Luiz Maria João'; X
//            012345678910
const nome = 'Luiz Otávio'
console.log(nome[10]);


//               0       1         2
const aluno = ['Luiz', 'Maria', 'João', 1, true, null] // JS permite colocar qualquer tipo, mas não é boa prática
console.log(aluno[0]);
//console.log (aluno);

alunos [0] = 'Eduardo'; //muda o item 0 para Eduardo

alunos [alunos.length] = 'Luiza' //adiciona Luiza ao final ou...

alunos.push ('Luiza') // adciona de forma mais no fim prática

alunos.unshift('Luiza') //adciona ao inicio 

alunos.pop(); // remove elemento no final do array

const removido = alunos.pop() // armazena quem foi removido na var removido

alunos.shift() // remove do começo, atualiza posições dos indices pois removeu o primeiro então o 1 passa a ser 0 e assim consecutivamente

delete alunos[1] // ao invés de apagar, ele esvazia o elelemento, os indices de mantêm e o valor removido se encontra vazio.

console.log(alunos[50]); //acessando um índice q não existe resulta undefined

alunos.push('Luiza')
alunos.push('Eduardo')
 
alunos.slice(0,2); // fatia 
alunos.slice(0,-2); // trás para frente

//array é um objeto indexado

//Quando faz typeof do array, retorna Object 


alunos instanceof Array //retorna boolean 


