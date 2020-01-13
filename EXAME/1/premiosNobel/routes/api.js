var express = require('express');
var router = express.Router();

var Pubs = require('../controllers/pubs')


/* GET pubs filter. */
router.get('/pubs', function(req, res, next) {
  if(req.query.type){
    if(req.query.year){
    Pubs.filtrarTypeYear(req.query.type, req.query.year)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Pubs.filtrarType(req.query.type)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
        
    }
  } 
  else if(req.query.autor){
    Pubs.filtrarAutor(req.query.autor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else{  
    Pubs.listarFields()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
});

/* GET pub id listing. */
router.get('/pubs/:id', function(req, res, next) {
  Pubs.listarPub(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});


/* GET types listing. */
router.get('/types', function(req, res, next) {
  Pubs.listarType()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});


/* GET autors listing. */
router.get('/autores', function(req, res, next) {
  Pubs.listarAutores()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
