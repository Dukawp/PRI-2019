var express = require('express');
var router = express.Router();
const axios = require('axios')

var Filmes = require('../controllers/filmes')
var Actores = require('../controllers/actores')

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



/* POST inserir um filme */
router.post('/filmes', function(req,res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* POST inserir novo actor num filme */
router.post('/filmes/actor/:idFilme', function(req, res, next){
    Filmes.insereActor(req.params.idFilme,req.body.cast)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).json(erro))
})

/* POST inserir novo genero num filme */
router.post('/filmes/genero/:idFilme', function(req, res, next){
    Filmes.insereGenero(req.params.idFilme,req.body.genres)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).json(erro))
})


/* DELETE apagar um filme */
router.delete('/filmes/:idFilme', function(req,res,next){
    Filmes.removeFilme(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE apagar actor de um filme */
router.delete('/filmes/actor/:idFilme', function(req,res,next){
    Filmes.removeActor(req.params.idFilme, req.body.cast)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE apagar genero de um filme */
router.delete('/filmes/genero/:idFilme', function(req,res,next){
    Filmes.removeGenero(req.params.idFilme, req.body.genres)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})


//------------------------Gestão da pagina dos actores------------------------//


/* GET lista de actores */
router.get('/actores', function(req, res, next) {
    Actores.listarActores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;