// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const number of numbers) {
  console.log(number);
}

// 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let result = 0;
for (let i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
  console.log(result); 
}

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
soma += numbers[index];
}
let media = soma / numbers.length;
console.log(media);

// 4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}

console.log('O maior valor do Array é: ' + maiorValor);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valorImpar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    valorImpar += 1;
  }
}

if (valorImpar === 0) {
  console.log('Não existe números impares!');
} else {
  console.log('Existe ' + valorImpar + ' números impares');
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = 1000;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}

console.log('O menor valor do Array é: ' + menorValor);

// 8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado.

let arrayNumbers = [];

for (let i = 1; i <= 25; i += 1) {
  arrayNumbers.push(i);
}
console.log(arrayNumbers);
