var express = require('express');
var router = express.Router();
const axios = require('axios')

var Obras = require('../controllers/obras')
var Compositores = require('../controllers/compositores')

/* GET lista de obras */
router.get('/obras', function(req, res, next) {
    if(req.query.periodo){
        console.log(req.query.periodo)
        Obras.filtrarPeriodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.anoCriacao){
        console.log(req.query.anoCriacao)
        Obras.filtrarAno(req.query.anoCriacao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.compositor){
        console.log(req.query.compositor)
        Obras.filtrarCompositor(req.query.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Obras.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
});

/* GET lista de compositores */
router.get('/compositores', function(req, res) {
    Compositores.listarCompositores()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
  });

/* GET recupera a infomação de um compositor */
router.get('/compositores/:id', function(req, res) {
    Compositores.consultar(req.params.id)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;