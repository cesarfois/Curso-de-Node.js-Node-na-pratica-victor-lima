var http = require('http')

http.createServer(function(req, res){
    res.end("hola mundo")
}).listen(9111)

console.log("O Servidor esta rodando!")