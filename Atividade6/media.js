var nome = prompt("Diite o nome do aluno:");
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var nota4 = parseFloat(prompt("Digite a quarta nota:"));

var media = (nota1 + nota2 + nota3 + nota4) / 4;
confirm("Deseja ver a média de " + nome + "?");
alert("Aluno: " + nome + "\nMédia" + media.toFixed(2));
