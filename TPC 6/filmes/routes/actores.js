var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET todos os actores */
router.get('/', function(req, res, next){
    axios.get('http://localhost:3006/api/actores')
        .then( dados=> {
          res.render('lista-actores', {lista: dados.data})
        })
        .catch( erro=> {
          res.render('error', {error: erro})
        })
})









module.exports = router;