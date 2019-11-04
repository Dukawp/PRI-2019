var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var nanoid = require('nanoid');

var myBD = __dirname + "/../data/galunos.json";


/* GET home page. */
router.get('/alunos', function(req, res, next) {
  jsonfile.readFile(myBD, (erro,dados) => {
    if(!erro){
      res.render('index', {lista: dados});
    }
    else{
      res.render('error', {error: erro});
    }
  })
});

router.get('/alunos/:idAluno/notas', function(req, res, next) {
  var nAluno = req.params.idAluno

  jsonfile.readFile(myBD, (erro,dados) => {
    if(!erro){
      
      var ntsAluno = dados.find(a => a.numero == nAluno)

      if(ntsAluno)
        res.render('notas', {aluno: ntsAluno})
      else
        res.render('index', {lista: dados})

    }
    else{
      res.render('error', {error: erro});
    }
  })
});

router.post('/alunos', function(req, res, next) {
  var registo = req.body
  registo = {...registo, notas:[]}
  //registo['id'] = nanoid()
  jsonfile.readFile(myBD, (erro,alunos) => {
      if(!erro){
          alunos.push(registo)
          console.dir(alunos) 
          jsonfile.writeFile(myBD, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Registo gravado com sucesso.')
          })
      }
      res.render('index', {lista: alunos});
  })
});

router.post('/alunos/:idAluno/notas', function(req, res, next) {
  var nAluno = req.params.idAluno
  var registo = req.body
  //registo['id'] = nanoid()
  jsonfile.readFile(myBD, (erro,alunos) => {
      if(!erro){
        var aluno = alunos.find(a => a.numero = nAluno)
          aluno['notas'].push(registo)
          console.dir(alunos) 
          jsonfile.writeFile(myBD, alunos, erro => {
              if(erro) console.log(erro)
              else console.log('Nota gravada com sucesso.')
          })
      }
      res.render('index', {lista: alunos});
  })
});

router.delete('/alunos/:idAluno', function(req, res, next) {
var id = req.params.idAluno
jsonfile.readFile(myBD, (erro,alunos) => {
    if(!erro){
        var index = alunos.findIndex(c=> c.numero == id)
        if(index > -1){
            alunos.splice(index,1) // apagar a partir do index 1 elemento do array alunos
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo removido com sucesso')
            })
        }
    }
    res.render('index', {lista: alunos})
})
});

router.delete('/alunos/:idAluno/notas/:id', function(req, res, next) {
  var nAluno = req.params.idAluno
  var id = req.params.id
  jsonfile.readFile(myBD, (erro,alunos) => {
      if(!erro){
        var aluno = alunos.find(a => a.numero ==  nAluno)  
          var index = aluno['notas'].findIndex(n=> n.id == id)
          if(aluno && (index > -1)){
              aluno['notas'].splice(index,1) // apagar a partir do index 1 elemento do array notas
              jsonfile.writeFile(myBD, alunos, erro => {
                  if(erro) console.log(erro)
                  else console.log('Nota removida com sucesso')
              })
          }
      }
      res.render('notas', {aluno: aluno})
  })
  });

module.exports = router;
