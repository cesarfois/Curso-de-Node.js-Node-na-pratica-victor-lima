

const { Console } = require('console')
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-Parser')
const app = express();
const modelPost = require('./models/model-Post')

// Conecction for DB





// config 
 // Template Engine
    const { engine } = require('express-handlebars');
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

 // Body Parser
    app.use(express.urlencoded({extends: true}))   
    app.use(express.json())

 


// rotas 

    app.get('/', (req, res) =>{
        // then recebe todos os post e then
        modelPost.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home',{posts: posts})
        })
    })

    app.get('/cad', (req, res) => {
            res.render('formulario');
        })



    app.post('/add', (req, res) => {
            // Pega os dados dos campos dos formularios e envia para a base de dados
            modelPost.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then( () => {
                //res.send('Conteudo cadastrado com sucesso')
                res.redirect('/')
                
            }).catch((error) => {
                res.send('Falha ao cadastrar conteudo' + error)
            })
        })

        app.get('/deletar/:id', function(req, res){
            modelPost.destroy({where: {'id': req.params.id}}).then(function(){
                res.send('Postagem deletada com sucesso!')    
            }).catch(function(erro){
                res.send('Esta postagem não existe')
            })
        })







// esta deve ser a ultima linha obrigatoriamente

app.listen(8080, () => {
        console.log('Servidor rodando..');
    });


