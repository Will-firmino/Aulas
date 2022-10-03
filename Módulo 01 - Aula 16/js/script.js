// Temos uma turma aonde precisamos saber o conceito de cada aluno da turma, com as seguintes observações


//Solicitar o nome do aluno com o prompt.
// Se o aluno tirar uma nota maior ou igual a 9, ele receberá o CONCEITO A e ganhará uma mochila.
// Se o aluno tirar uma nota entre 7 a 8.9, ele receberá o CONCEITO B E ganhará um caderno.
// Se o aluno tirar uma nota entre 6 e 7, ele receberá o CONCEITO C e ele não irá ganhar nada.
// Se o aluno tirar uma nota abaixo de 6, ele recebe CONCEITO D, e irá ganhar um castigo dos pais.

//OBS:
//Preciso que seja solicitado ao usuário a informação da nota do aluno através do prompt de comando.
//Preciso que o nome, CONCEITO e o brinde do aluno (se tiver), seja exibido como um alerta. 
//EX: o Aluno Joâo tirou 9 na prova, com isso teve CONCEITO A e ganhou uma mochila. Parabéns.
//Preciso que se o usuário digitar uma nota que não esteja mencionada, seja informado que ele precisa inserir uma nota válida.

//Utilizem prompt, alert, template string, if, else if, else...


var nomeAluno = prompt("Informe o nome do aluno: ");
var notaAluno = prompt("Informe a nota do aluno: ");
    if(notaAluno >=9 && notaAluno <= 10) {
        alert(`Parabéns ${nomeAluno}, seu CONCEITO FOI A, e você ganhou uma mochila.`);
    } else if (notaAluno >=7 && notaAluno <= 8.9 ){
        alert(`Parabéns ${nomeAluno}, seu CONCEITO FOI B, e você ganhou um caderno.`);
    } else if (notaAluno >=6 && notaAluno <= 7) {
        alert(`${nomeAluno}, Seu CONCEITO FOI C, e você não ganhou nada.`);
    } else if (notaAluno <6) {
        alert(`${nomeAluno},Seu CONCEITO FOI D, e você irá ganhar um castigo dos pais`);
    } else {
        alert(`${notaAluno} não é uma nota válida.Informe uma nota válida`);
    };