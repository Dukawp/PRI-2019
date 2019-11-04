function apagaAluno(ident){
    console.log('Vou apagar o Aluno: '+ ident)
    axios.delete('/alunos/'+ ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
    }

    
