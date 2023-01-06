

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