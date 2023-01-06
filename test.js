const Sequelize = require ('sequelize')
const sequelize = new Sequelize('test','root', 'Siexpre$$',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(e){
    console.log('Falha ao se conectar' + e)
})


// Model para Postagens
// defino o nome da tabela postagens e depois os campos
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'novo titulo de postagem',
    conteudo: 'Aqui esta o conteudo da postagem '
})


const Usuario = sequelize.define('Usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})


Usuario.sync({force: true})