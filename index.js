

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




// esta deve ser a ultima linha obrigatoriamente

app.listen(8080, () => {
        console.log('Servidor rodando..');
    });


