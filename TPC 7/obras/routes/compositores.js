var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET todos os compositores */
router.get('/', function(req, res, next){
    axios.get('http://localhost:3011/api/compositores')
        .then( dados=> {
          res.render('lista-compositores', {lista: dados.data})
        })
        .catch( erro=> {
          res.render('error', {error: erro})
        })
})

/* GET de um compositor */
router.get('/:id', function(req, res, next){
  axios.get(`http://localhost:3011/api/compositores/${req.params.id}`)
      .then( dados=> {
        res.render('info-comp', {comp: dados.data})
      })
      .catch( erro=> {
        res.render('error', {error: erro})
      })
})


module.exports = router;