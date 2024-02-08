//1

let dia = true;

if (dia) {
  console.log("Claro");
} else {
  console.log("Está de noite");
}

//2

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//3

function exibirMensagem() {
  console.log("Ola vai na web!!");
}

exibirMensagem();

//4
function exibirNome(nome) {
  console.log("O nome fornecido é: " + nome);
}

exibirNome("Ayrson");

//5
function exibirDetalhes(nome, idade, estiloMusical) {
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Estilo Musical Preferido: " + estiloMusical);
}

exibirDetalhes("Ayrson", "48", "Heavy Metal");

//6

function exibirPreferencias(filme, musica) {
  console.log("Filme Preferido: " + filme);
  console.log("Música Preferida: " + musica);
}

exibirPreferencias("O grande dragão branco", "Rebirth");

//7

function triplo(numero) {
  return numero * 3;
}

console.log(triplo(10));

//8

function verificarBooleano(variavel) {
  if (variavel === true) {
    console.log("A variável é true");
  } else if (variavel === false) {
    console.log("A variável é false");
  } else {
    console.log("A variável não é booleana");
  }
}

// Para chamar a função, use:
verificarBooleano(true);
verificarBooleano(false);

//9

let array = ["Pao frances", "Manteiga", "Queijo prato", "Café", "Bolo"];
console.log(array);

//10

const paises = ["Nigéria", "Gana", "Ruanda"];

paises.unshift("Quênia");

console.log(paises); // ["Quênia","Nigéria", "Gana", "Ruanda"]

//11

var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
numeros.pop();
console.log(numeros);

//12

var numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]

//13

var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
numeros.pop();
console.log(numeros);

//14

let nome = ["João", "Maria", "Jose", "Pedro"];

nome.splice(2, 0, "Ayrson");

console.log(nome);

//15

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
