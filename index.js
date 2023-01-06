

const { Console } = require('console');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
        res.send('seja Bem vindo no meu app');
    });


app.get('/sobre', (req, res) => {
    res.send('resposta da rota sobre')
});

app.get('/blog', (req, res) => {
    res.send('resposta do blog')
})


app.get('/ola/:nome', (req, res) => {
    res.send('hola ' + req.params.nome)
})



// esta deve ser a ultima linha obrigatoriamente

app.listen(8080, () => {
        console.log('Servidor rodando..');
    });


