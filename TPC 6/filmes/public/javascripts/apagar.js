function apagarFilme(id){
    console.log('Vou apagar o filme: '+ id)
    axios.delete('/filmes/'+ id)
        .then(response => window.location.assign('/filmes'))
        .catch(error => console.log(error))
}

function apagarActor(args){
    var array = args.split('-')
    var id = array[0]
    var actor = array[1]
    console.log('Vou apagar actor: '+  actor + "do filme :"+ id)
    axios.delete(`/filmes/actor/${id}`, {data: {"cast": actor}})
        .then(response => window.location.assign(`/filmes/${id}`))
        .catch(error => console.log(error))
}
