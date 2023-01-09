const db = require('./db')

const modelPost = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

//modelPost.sync({force: true})

module.exports = modelPost