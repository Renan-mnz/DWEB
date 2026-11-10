function maiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o teceiro número:"));

    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    alert("O maior número é: " + maior);
}

function verificarPalindromo() {
    let palavra = prompt("Digite uma palavra ou frase:");

    palavra = palavra.toLowerCase();
    palavra = palavra.replaceAll(" ", "");

    let invertida = palavra.split("").reverse().join("");

    if (palavra == invertida) {
        alert("É um palíndromo!");
    } else {
         alert("Não é um palíndromo!");
    }
}    

function ordenarNumeros() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let  numeros = [n1, n2, n3];

    numeros.sort(function(a, b) {
        return a - b;
    })

    alert("Ordem crescente: " + numeros)
}

function verificarParImpar() {
    let numero = Number(prompt("Digite um número:"));

    if (numero % 2 == 0) {
        alert("O número é par!");
    } else {
        alert("O número é ímpar!");
    }
}

function calcularMedia() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número"));
    let n3 = Number(prompt("Digite o terceiro número"));

    let media = (n1 + n2 + n3) / 3;

    alert("A média é: " + media);
}

function ordemDecrescente() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número"));
    let n3 = Number(prompt("Digite o terceiro número"));

    let numeros = [n1, n2, n3];

    numeros.sort(function(a, b) {
        return b - a;
    })

    alert("Ordem decrescente: " + numeros);

}