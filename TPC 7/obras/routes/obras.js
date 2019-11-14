var express = require('express');
var router = express.Router();
const axios = require('axios')


/* GET todos os filmes */
router.get('/', function(req, res, next){
    axios.get('http://localhost:3011/api/obras')
        .then( dados=> {
          res.render('lista-obras', {lista: dados.data})
        })
        .catch( erro=> {
          res.render('error', {error: erro})
        })
})


module.exports = router;