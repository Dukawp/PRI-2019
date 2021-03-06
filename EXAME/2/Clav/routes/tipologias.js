var express = require('express');
var router = express.Router();
var axios = require('axios')

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  axios.get(`http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}?apikey=${apiKey}`)
    .then(dados => {
      res.render('tipologia',{lista: dados.data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

/* GET users listing. */
router.get('/:id/elementos', function(req, res, next) {
  axios.get(`http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}/elementos?apikey=${apiKey}`)
    .then(dados => {
      res.render('lista-elems',{lista: dados.data, id: req.params.id})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

/* GET users listing. */
router.get('/:id/intervencao/dono', function(req, res, next) {
  axios.get(`http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}/intervencao/dono?apikey=${apiKey}`)
    .then(dados => {
      res.render('lista-elems',{lista: dados.data, id: req.params.id})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

module.exports = router;
