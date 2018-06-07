const Sequelize = require("sequelize");

const sequelize = new Sequelize('difpedi1_nodedb1', 'difpedi1_nodedb', '8Vf$q7l0', 
	{
		host: 'sg1-wsq1.a2hosting.com',
		dialect: 'mssql'
	});



module.exports = { sequelize };