var Obra = require('../models/obras')

//Devolve a lista de obras
module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}

module.exports.filtrarPeriodo = per => {
    return Obra 
            .find({periodo: per})
            .exec()
}

module.exports.filtrarAno = ano => {
    return Obra 
            .find({anoCriacao: ano})
            .exec()
}

module.exports.filtrarCompositor = comp => {
    return Obra 
            .find({compositor: comp})
            .exec()
}

