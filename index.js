

const { Console } = require('console');
const express = require('express');

const handlebars = require('express-handlebars')

const app = express();
const Sequelize = require ('sequelize')


// Conecction for DB





// config 
 // Template Engine
    const { engine } = require('express-handlebars');
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    const sequelize = new Sequelize('test','root', 'Siexpre$$',{
        host: '127.0.0.1',
        dialect: 'mysql'
    })
    sequelize.authenticate().then(function(){
        console.log('Conectado com sucesso ao banco de dados')
    }).catch(function(e){
        console.log('Falha ao se conectar' + e)
    })


// rotas 

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        res.send('Formulario recebido com sucesso')
    })







// esta deve ser a ultima linha obrigatoriamente

app.listen(8080, () => {
        console.log('Servidor rodando..');
    });


