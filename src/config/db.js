const sequelize = require('sequelize');

// db configuration
const db = new sequelize('StudentControlETS', 'testedb2', 'teste123@321',
{
    dialect: 'mssql', host: 'localhost', port: 49701
})

db.sync();

module.exports = db;