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

module.exports.removeFilme = id =>{
    console.log("Remoção do filme : "+ id)
    return Filme
        .deleteOne({_id: id})
        .exec()
}


//------------------------Gestao do actor------------------------//
module.exports.insereActor = (id,actor) =>{
    console.log("Inserção do actor: " + actor + " no filme: " +id)
    return Filme
       .updateOne({ _id: id }, {$push : { cast: actor }})
}

module.exports.removeActor = (id,actor) =>{
    console.log("Apagar o actor : " + actor + " do filme: " +id)
    return Filme
       .updateOne({ _id: id }, {$pull : { cast: actor }})
}


//------------------------Gestao do genero------------------------//
module.exports.insereGenero = (id,genero) =>{
    console.log("Inserção do genero: " + genero + " no filme: " +id)
    return Filme
       .updateOne({ _id: id }, {$push : { genres: genero }})
}

module.exports.removeGenero = (id,genero) =>{
    console.log("Apagar o genero : " + genero + " do filme: " +id)
    return Filme
       .updateOne({ _id: id }, {$pull : { genres: genero }})
}


