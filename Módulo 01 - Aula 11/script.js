/**
 String
var nomeInstrutor = "William Firmino";

//Number ( inteiro )
var idadeInstrutor = 30;

//Number (real)
var alturaInstrutor = 1.82;

//Boolean
var compreiBolo = true;

//Utilizando no inspecionar
console.log("O instrutor " + nomeInstrutor + " tem " + idadeInstrutor + " anos");

// Preciso de uma verificação para informar ao usuário que aos domingos o Senac
// não funciona.

var diaSemana = "sabado"

// Se o dia for domingo o Senac está fechado
if (diaSemana == "domingo") {
    console.log("Hoje é " + diaSemana + " e o Senac está fechado");
} 
//Se o dia for de segunda a sabado o Senac estará aberto
else {
    console.log("Hoje é " + diaSemana + " e o Senac está aberto. Seja bem vindo. ;)")
} **/


//Preciso de uma verificação para informar ao usuário que se o dia for segunda, 
//quarta ou sexta informar que está aberto e se for no horário da manha ele
// poderá cortar o cabelo

var diaSemana = prompt("Informe o dia da semana: ")
var periodoDia = prompt("Informe o periodo (matutino, vespertino ou noturno")

//Se o dia for segunda, quarta ou sexta e for de manhã,o senac está aberto
// ele poderá cortar o cabelo.
if (diaSemana == "segunda" || diaSemana == "quarta" || diaSemana == "Sexta" 
&& periodoDia == "matutino") {
    console.log("Parabéns, vai cortar o cabelo de graça.")
}

//Se o dia for segunda, quarta ou sexta e for outro periodo (vespertino/noturno)
// o senac estará aberto mas ele não poderá cortar o cabelo.
else if (diaSemana == "segunda" || diaSemana == "quarta" || diaSemana == "Sexta" 
&& (periodoDia !== "matutino")) {
    console.log("Eita. Você veio no periodo errado.")
}

//Se for terca, quinta ou sabado em qualquer periodo o Senac vai estar aberto e 
//ele não poderá cortar o cabelo.
else if (diaSemana == "terca" || diaSemana == "quinta" || diaSemana == "sabado") {
    console.log("Eita. Você veio no dia errado. Volte no di certo.")
}

//se for domingo o Senac vai estar fechado e ele não irá cortar o cabelo
else if (diaSemana == "domingo"){
    console.log("Uma pena, você não pode cortar o cabelo hoje")
}














