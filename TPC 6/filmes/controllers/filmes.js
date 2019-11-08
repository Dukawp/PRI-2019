var Filme = require('../models/filmes')

//Devolve a lista de filmes
module.exports.listar = () => {
    return Filme
        .find().sort({year: -1}).limit(10)
        .exec()
}

//listar filmes do ano x
module.exports.listarAno = ano =>{
    return Filme
        .find({year: ano}).sort({year : -1})
        .exec()
}

//listar por genero ( atençao ao case sensitive )
module.exports.listarGenero = genero =>{
    return Filme
        .find({genres: {$regex : genero, $options:'i'} }).sort({year:-1})
        .exec()
}

//conultar filme
module.exports.consultar = id =>{
    return Filme
        .findOne({_id: id})
        .exec()    
}

module.exports.contar = () =>{
    return Filme
        .countDocuments()
        .exec()
}

//inserçao filme
module.exports.inserir = filme =>{
    console.log(filme)  
    var novo = new Filme(filme)
    return novo.save()
}
