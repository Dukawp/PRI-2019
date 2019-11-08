var express = require('express');
var router = express.Router();
const axios = require('axios')


/* GET todos os filmes */
router.get('/', function(req, res, next){
    axios.get('http://localhost:3006/api/filmes')
        .then( dados=> {
          res.render('lista-filmes', {lista: dados.data})
        })
        .catch( erro=> {
          res.render('error', {error: erro})
        })
})

router.get('/inserir', function(req, res){
  res.render('form-filme')
})

/* GET filmes de X ano */
router.post('/ano', function(req, res, next){
  var ano = req.body.year
  console.log("ANO ::::: " + ano)
  axios.get(`http://localhost:3006/api/filmes/ano/${ano}`)
      .then( dados=> {
        res.render('lista-filmes', {lista: dados.data})
      })
      .catch( erro=> {
        res.render('error', {error: erro})
      })
})

/*GET informaçao do filme X */
router.get('/:idFilme', function(req, res) {
  var id = req.params.idFilme
  console.log("ID ::::: " + id)
  axios.get(`http://localhost:3006/api/filmes/${id}`)
      .then(dados => {
          res.render('info-filme', {filme :dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})



router.post('/', function(req, res){
  axios.post('http://localhost:3006/api/filmes', req.body)
      .then( dados => {
          res.redirect('/')
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

module.exports = router;