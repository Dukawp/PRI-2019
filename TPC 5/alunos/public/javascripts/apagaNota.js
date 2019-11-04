function apagaNota(alunoInf){
    var array = alunoInf.split('-')
    var nAluno = array[0]
    var idNota = array[1]

    console.log('Vou apagar a nota ' + idNota + ' do aluno: ' + nAluno)
    axios.delete('/alunos/' + nAluno + '/notas/' + idNota)
        .then(response => window.location.assign('/alunos/' + nAluno + '/notas'))
        .catch(error => console.log(error));
}