function apagaFilme(id){
    console.log('Vou apagar o filme: '+ id)
    axios.delete('/filmes/'+ id)
        .then(response => window.location.assign('/compras'))
        .catch(error => console.log(error))
    }