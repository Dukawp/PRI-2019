const express = require('express');
const router = express.Router();
const axios = require('axios')
const lhost = require('../config/env').host

/* GET home page. */
router.get('/', function(req, res) {
  axios.get(lhost + '/api/ficheiros') //lhost = http://localhost:5018 
    .then(dados => {
      res.render('index', {lista: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;