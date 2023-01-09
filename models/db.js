const Sequelize = require('sequelize')


// Connections with database
const sequelize = new Sequelize('postapp','root', 'Siexpre$$',{
    host: '127.0.0.1',
    dialect: 'mysql',
    query:{raw:true}
})
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso ao banco de dados')
}).catch(function(e){
    console.log('Falha ao se conectar' + e)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}