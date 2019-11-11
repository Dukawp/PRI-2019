var Compositor = require('../models/obras')

//Devolve a lista de compositores
module.exports.listarCompositores = () => {
    return Compositor
        .aggregate([ {$unwind: "$compositor" }, {$group: {_id: "$compositor" , numObras: {$sum: 1}}}, {$sort: {numObras :-1} }])  
        .exec()
}


