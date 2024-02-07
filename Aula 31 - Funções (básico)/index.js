// FUNÇÕES BÁSICO
// Funções executam ações geralmente

// para criar uma função é usda a palavra function

function saudacao(nome) {
    return `Bom dia, ${nome}!`
}

// para chamar uma função e pedir que ela seja executada

const variavel = saudacao('Lorena');

console.log(variavel)


// pode criar parâmetros nas funções

//function saudacao(nome) {
//    console.log('Bom dia!');
//}


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));

// a var da function não pode ser usada fora
// return encerra a function

// podemos pré definir um parâmtro, quando parâmetro não é enviado, ele é usado.
//function soma(x = 1, y = 1) {
//    const resultado = x + y;
//    return resultado;
//}


// pode jogar uma função dentro de uma váriavel, nesse caso seria criada uma função anonima

const raiz = function(n) {
    return n**0.5;
};
console.log(raiz(9))

// arrow function

// const raiz = n => n**0.5;
// console.log(raiz(9))
