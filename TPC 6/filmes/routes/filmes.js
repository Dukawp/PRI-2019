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

/* GET filmes de X genero*/
router.post('/genero', function(req, res, next){
  var gen = req.body.genres
  console.log("Genero ::::: " + gen)
  axios.get(`http://localhost:3006/api/filmes/genero/${gen}`)
      .then( dados=> {
        res.render('lista-filmes', {lista: dados.data})
      })
      .catch( erro=> {
        res.render('error', {error: erro})
      })
})

/*GET informaçao do filme X */
router.get('/:idFilme', function(req, res,next) {
  var id = req.params.idFilme
  console.log("ID ::::: " + id)
  axios.get(`http://localhost:3006/api/filmes/${id}`)
      .then(dados => {
          res.render('info-filme', {filme: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})


router.post('/', function(req, res,next){
  axios.post('http://localhost:3006/api/filmes', req.body)
      .then( dados => {
          res.redirect('/')
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

/* PUT adicionar novo actor  */
router.post("/actor/:idFilme", function(req, res, next){
  var idFilme = req.params.idFilme
  console.log(req.body)
  axios.post(`http://localhost:3006/api/filmes/actor/${req.params.idFilme}`, req.body)
    .then(dados => {
      res.redirect(`/filmes/${idFilme}`)
    })
    .catch(erro =>{
      res.render('error', {error: erro})
    })
})

/* PUT adicionar genero */
router.post("/genero/:idFilme", function(req, res, next){
  var idFilme = req.params.idFilme
  console.log(req.body)
  axios.post(`http://localhost:3006/api/filmes/genero/${req.params.idFilme}`, req.body)
    .then(dados => {
      res.redirect(`/filmes/${idFilme}`)
    })
    .catch(erro =>{
      res.render('error', {error: erro})
    })
})

/*DELETE de um Filme */
router.delete("/:idFilme", function(req, res, next) {
  axios.delete(`http://localhost:3006/api/filmes/${req.params.idFilme}`)
      .then(dados => {
          res.render('lista-filmes', {lista: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

/*DELETE de um actor do filme X */
router.delete("/actor/:idFilme", function(req, res, next) {
  axios.delete(`http://localhost:3006/api/filmes/actor/${req.params.idFilme}`, {data: {"cast": req.body.cast}})
      .then(dados => {
        res.redirect(`/filmes/${idFilme}`)
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

/*DELETE de um genero do filme X */
router.delete("/genero/:idFilme", function(req, res, next) {
  axios.delete(`http://localhost:3006/api/filmes/genero/${req.params.idFilme}`, {data: {"genres": req.body.genres}})
      .then(dados => {
        res.redirect(`/filmes/${idFilme}`)
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

module.exports = router;