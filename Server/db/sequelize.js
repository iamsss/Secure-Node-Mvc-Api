const Sequelize = require("sequelize");

    
const sequelize = new Sequelize(process.env.MSSQLDB_URI,{
    logging:false
});



module.exports = { sequelize };