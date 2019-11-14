var Compositor = require('../models/obras')

//Devolve a lista de compositores
module.exports.listarCompositores = () => {
    return Compositor
        .aggregate([ {$unwind: "$compositor" }, {$group: {_id: "$compositor" , numObras: {$sum: 1}}}, {$sort: {numObras :-1} }])  
        .exec()
}

//Devolve a info de um compositor
module.exports.verCompositor = id => {
    return Compositor
        .aggregate([{$match: {compositor: id}}, {$unwind: "$compositor"}  ] ) //,{$project: {nome :1 }} nao é necessario.. 
        .exec()
}

