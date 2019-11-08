var express = require('express');
var router = express.Router();
const axios = require('axios')

var Filmes = require('../controllers/filmes')

/* GET lista de filmes */
router.get('/filmes', function(req, res, next) {
    Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* GET search filmes por ano*/
router.get('/filmes/ano/:ano', function(req, res, next) {
    Filmes.listarAno(req.params.ano)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* GET search filmes por genero*/
router.get('/filmes/genero/:genero', function(req, res, next) {
    Filmes.listarGenero(req.params.genero)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* GET recupera a informação de um filme */
router.get('/filmes/:idFilme', function(req, res, next) {
    Filmes.consultar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});



/*POST: inserir um filme */
router.post('/filmes', function(req,res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router;
