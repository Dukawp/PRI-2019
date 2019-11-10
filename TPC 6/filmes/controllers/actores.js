var Actor = require('../models/filmes')

//Devolve a lista de actores
module.exports.listarActores = () => {
    return Actor
        .aggregate([ {$unwind: "$cast" }, {$group: {_id: "$cast" , numFilmes: {$sum: 1}}}, {$sort: {numFilmes :-1} }])  
        .exec()
}


