const sequelize =require("./db");
const sequelize = require("sequelize");
const Financial = require("./fanancial.models")


const db = {};
db.Sequelize = Sequelize; 
db.sequelize = sequelize; 
db.Financial = Financial;

module.exports = db