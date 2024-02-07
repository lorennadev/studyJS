// carctere de escape "\"

let umaString = "Um \"texto\"";

console.log (umaString);

let umaString1 = "Um \\texto";

console.log (umaString1);

// strings são indexadas 
//                01234567 (range)
let umaString2 = "Um texto";

console.log(umaString2[4]) //indíce 4 significa apenas o "e"

    //também pode ser feito chartAt
console.log(umaString2.charAt(6)); // 't'

// concatenação  

console.log(umaString2.concat(' bonito')); 
console.log(umaString2 + ' bonito'); 
console.log(`${umaString2} bonito`); 

//indexOf 

console.log(umaString.indexOf('o', 3)); // retorna em qual indice se encontra o dado solicitado
// o número identifica a partir de qual iníce quero procurar

console.log(umaString.lastIndexOf('o', 3)); // começa de trás para frente, nesse caso, 
                                            // a letra 'o' não será identificada


console.log(umaString.match(/[a-z]/g)); //match procura usando expressão regular, o g pede para que se repita
console.log(umaString.search(/x/)); // retorna o índice onde o que foi pedido será encontrado
console.log(umaString.replace(/Um/g,'Outro')); //substitui a primeira palavra pela segunda, pode ser usado expressão regular
console.log(umaString.length) // mede o tamanho da string
console.log(umaString.slice(2,6)); // fatia uma parte
console.log(umaString.length - 3);
console.log(umaString.slice(-3)); //valor negativo equivale ao escaneamento do fim ao inicio 
console.log(umaString.slice(7)); //É equivalente a length - 3 
console.log(umaString.split(' ')); // retorna um array que separa pelo elemento escolhido
console.log(umaString.toLocaleUpperCase())  // tudo maiusculo
console.log(umaString.toLocaleLowerCase())  // tudo minúsculo
// mais informações consultar w3schoolJS ou MDN Mozilla 

