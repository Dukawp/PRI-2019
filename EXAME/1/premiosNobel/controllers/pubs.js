var Pub = require('../models/pubs')

//Devolve a lista de pubs -> id, title, year e type
module.exports.listarFields = () => {
    return Pub
            .find({}, {_id:0,id:1 , title :1, year: 1, type: 1})
            .exec()
}

//Devolve a info de um pub (id)
module.exports.listarPub = id => {
    return Pub
            .find({"id": id})
            .exec()
}

//Devolve a lista de type sem repetidos
module.exports.listarType = () => {
    return Pub
            .distinct('type')
            .exec()
}

//Filtrar por type
module.exports.filtrarType = type => {
    return Pub
            .find({type: type})
            .exec()
}

//Filtrar por type e year
module.exports.filtrarTypeYear = (type,year) => {
    return Pub
        .aggregate([{$match: {type:type}}, {$match: {year: {$gt: year}}}])
        .exec()
}

//INCOMPLETA!!!!!
//Listar autores por ordem alfabetica
module.exports.listarAutores = () => {
    return Pub
        .aggregate([{$unwind: "$authors"}, {$project: {_id:0, authors:1}}, {$sort: {authors:1}}])
        .exec()
};

//Filtrar por autor
module.exports.filtrarAutor = autor => {
    return Pub
            .find({authors: autor})
            .exec()
}