// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 5;
let b = 4;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divicao = a / b;
let modulo = a % b;

console.log('a soma entre ' + a + ' + ' + b + ' é ' + soma);
console.log('a subtração entre ' + a + ' - ' + b + ' é ' + subtracao);
console.log('a multiplicação entre ' + a + ' * ' + b + ' é ' + multiplicacao);
console.log('a divição entre ' + a + ' / ' + b + ' é ' + divicao);
console.log('o modulo entre ' + a + ' e ' + b + ' é ' + modulo);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let a = 5;
let b = 7;
let maiorNumero = '';

console.log('Pergunta>>> Qual o maior número, ' + a + ' ou ' + b + ' ? ');
if ( a > b) {
    maiorNumero = a;
    console.log('O maior número é: ' + a);
} else {
    maiorNumero = b;
    console.log('O maior número é: ' + b);
}

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 15;
let b = 9;
let c = 18;
let maiorNumero = '';

console.log('Pergunta>>> Qual o maior número, ' + a + ', ' + b + ' ou ' + c + ' ? ');
if ( a > b  && a > c) {
    maiorNumero = a;
    console.log('O maior número é: ' + a);
} else if (a < b && b > c) {
    maiorNumero = b;
    console.log('O maior número é: ' + b);
} else {
    maiorNumero = c;
    console.log('O maior número é: ' + c);
}

// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 let valor = -20;

 console.log('Pergunta>>> O valor ' + valor + ', é positivo, negativo ou zero?')

 if (valor > 0) {
    console.log('O valor é positivo!');
} else if (valor < 0) {
    console.log('O valor é negativo!');
} else {
    console.log('O valor é zero! ');
}

// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = -50;
let angulo2 = -45;
let angulo3 = -90;
let soma = angulo1 + angulo2 + angulo3;

console.log('Pergunta>>> ' + angulo1 + ', ' + angulo2 + ', ' + angulo3 + ', são angulos de um triângulo?');
if (soma === 180) {
    console.log(true);
} else if (soma < 0) {
    console.log('Error!! Ângulo inválido!!');
} else {
    console.log(false);
}

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = 'Rainha';

switch (pecaXadrez.toLowerCase()) {
    case 'peão':
        console.log('O Peão anda sempre pra frente uma casa por vez, e apenas na primeira jogada pode escolher entre andar uma ou duas casas!')
        break;
    case 'cavalo':
        console.log('O Cavalo anda em L, contando duas casas na horizontal ou vertical, e depois apenas uma casa para esquerda ou direita. e é o único que pode pular peças');
        break;
    case 'bispo':
        console.log('O Bispo anda várias casas por vez, porém sempre na diagonal');
        break;
    case 'torre':
        console.log('A Torre anda várias casas por vez, porém sempre na horizontal e vertical');
        break;
    case 'rei':
        console.log('O Rei anda em todas as direções, porém apenas uma casa por vez');
        break;
    case 'rainha':
        console.log('A Rainha pode andar em todas as direções varias casas por vez');
        break;
    default:
        console.log('Erro! peça inválida!');
        break;
}

// 7 - Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 101;

if (nota < 0 || nota > 100) {
    console.log('Erro!! Nota inválida');
} else if (nota >= 90) {
    console.log('Conceito A');
} else if (nota >= 80) {
    console.log('Conceito B');
} else if (nota >= 70) {
    console.log('Conceito C');
}else if (nota >= 60) {
    console.log('Conceito D');
} else if (nota >= 50) {
    console.log('Conceito E');
} else {
    console.log('Conceito F');
}

// 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .
let num1 = 3;
let num2 = 5;
let num3 = 9;

let ehPar = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    ehPar = true;
}
console.log(ehPar);

// 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .

let num1 = 4;
let num2 = 6;
let num3 = 8;

let ehImpar = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    ehImpar = true;
}
console.log(ehImpar);

/* 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/


let valorDeCusto = 2;
let valorDeVenda = 4;
let valorCustoTotal = valorDeCusto * 1.2;
if (valorDeCusto >= 0 && valorDeVenda >= 0) {
  let lucro = (valorDeVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Erro! valor negativo!");
};

/*11 - Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */


let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioLiquido = salarioBruto - aliquotaINSS;

if (salarioLiquido <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioLiquido <= 2826.65) {
  aliquotaIR = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido <= 3751.05) {
  aliquotaIR = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido <= 4664.68) {
  aliquotaIR = (salarioLiquido * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioLiquido * 0.275) - 869.36;
};

console.log("O Salário é: " + (salarioLiquido - aliquotaIR));