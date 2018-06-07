const Sequelize = require("sequelize");

    
const sequelize = new Sequelize(process.env.MSSQLDB_URI);



module.exports = { sequelize };