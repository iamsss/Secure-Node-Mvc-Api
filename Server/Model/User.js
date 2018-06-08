const {sequelize} = require('../db/sequelize');
const Sequelize = require("sequelize");

const User = sequelize.define('user', {
	username: { type: Sequelize.STRING, allowNull: false },
	email: {type: Sequelize.STRING, allowNull: true , validate: {  isEmail: true }},
	password: {type: Sequelize.STRING, allowNull: false },
	role: Sequelize.STRING
});

module.exports = { User };