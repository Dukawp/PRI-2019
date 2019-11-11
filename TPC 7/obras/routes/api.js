var express = require('express');
var router = express.Router();
const axios = require('axios')

var Obras = require('../controllers/obras')

//var Compositores = require('../controllers/compositores')

/* GET lista de obras */
router.get('/obras', function(req, res, next) {
    Obras.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;