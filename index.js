

const { Console } = require('console');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/html/index.html')
    });


app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html')
});

app.get('/blog', (req, res) => {
    res.send('resposta do blog')
})


app.get('/ola/:nome', (req, res) => {
    res.send('<h1>hola ' + req.params.nome + '</h1>')
})



// esta deve ser a ultima linha obrigatoriamente

app.listen(8080, () => {
        console.log('Servidor rodando..');
    });


