var Obra = require('../models/obras')

//Devolve a lista de obras
module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}