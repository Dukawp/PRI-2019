var http = require('http')
var pug = require('pug')
var fs = require('fs')

    var myServer = http.createServer(function (req,res) {

        


        
        console.log(req.method + ' ' + req.url)

        if(req.method == 'GET'){
            
            //Dividir o url pela / 
            var auxUrl = req.url.split('/');
            
            var nPagina = (auxUrl[auxUrl.length -1]);
            
            // var nPagina = req.url.slice(-1); esta maneira nao funciona pois so vai buscar o ultimo digito


            switch(req.url){

                case '/musica/arq2html.xsl' :

                    fs.readFile('arq2html.xsl', (erro,dados) => {
                        if(!erro){
                            res.writeHead(200, {'Content-Type' : 'text/xsl'});
                            res.write(dados);
                        }
                        else{
                            res.writeHead(404, {'Content-Type' : 'text/plain; charset=utf-8'});
                            res.write('Erro na leitura do ficheiro xsl');
                        }
                        res.end()
                    })
                
                    break;

                case '/musica/'+ nPagina : 

                    fs.readFile('data/arq' + nPagina +'.xml', (erro,dados) => {
                        console.log('data/arq' + nPagina );
                        if(!erro){
                            res.writeHead(200);
                            res.write(dados);
                        }
                        else{
                            console.log('Ficheiro procurado nao existe! arq'+ nPagina);
                            fs.readFile('paginaErro.html', (erroHTML, dadosHTML) => {
                                
                                if(erroHTML) throw erroHTML;

                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(dadosHTML);  
                                res.end();
                                       
                            });
                            return;
                        }
                        res.end();
                    })
                    break;

                default:

                    res.writeHead(404);
                    res.write('Erro : metodo na suportado [ ' + req.method + ' ]');
                    res.end();

                    break;
            }
        }
        else{

            res.writeHead(404);
            res.write('Metodo na suportado!');
            res.end();
        }
    
    }).listen(3021)
    
    console.log('Servidor à escuta na porta 3021...')
