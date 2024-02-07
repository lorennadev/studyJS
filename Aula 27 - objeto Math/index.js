let num1 = 9.54578;
// let num2 = Math.floor(num1); // arredonda para baixo 
// let num2 = Math.ceil(num1); //arredonda o número para cima
// let num2 = Math.round(num1); // retorna o arredondado para o mais próximo

console.log(num2.max(1,2,3,4,5,6,7,8,9)); // maior número dessa sequencia
console.log(num2.min(1,2,3,4,5,6,7,8,9)); // menor número dessa sequencia

const aleatorio = Math.random() * (10 - 5) + 5 // gera o número entre 10 e 5
console.log(aleatorio); // gera número aleatório 

const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // Arredondado
console.log(aleatorio); // gera número aleatório 

console.log(Math.PI) // mostra o valor de PI
console.log(Math.pow(2, 10)) // eleva o primeiro número ao segundo
console.log(2 ** 10) //Mais facilmente realizado assim


console.log(num1 ** (1/2)) //pega raiz quadrada
console.log(num1 ** 0.5) //pega raiz quadrada

//em JS você pode dividir um número por zero, resulta no dado númerico infinity 
console.log(100 / 0); //por isso, cuidado, isso avalia como true



