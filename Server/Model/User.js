const {sequelize} = require('../db/sequelize');
const Sequelize = require("sequelize");

const User = sequelize.define('user', {
	username: Sequelize.STRING,
	birthday: Sequelize.DATE
});

module.exports = { User };