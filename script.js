console.log("Hello World!");

let nomeDoAluno = prompt('Qual o seu nome?');
let materia = prompt('Qual a matéria que você cursa?');
let nota = prompt('Qual sua nota?');
let media = 6

if (nota >= media) {
    alert('Parabéns, o aluno ' + nomeDoAluno + ' da matéria ' + materia + ' foi aprovado.');

}
else if (nota >= media - 0.5) {
    alert(`Parabéns, o aluno ${nomeDoAluno} da matéria ${materia} foi aprovado pelo sistema.`);
}

else {
    alert(`A nota do aluno ${nomeDoAluno} na matéria ${materia} foi insuficiente.`);
}
