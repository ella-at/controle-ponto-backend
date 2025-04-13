const Sequelize = require('sequelize');
const config = require('../config/db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = config;

db.Funcionario = require('./Funcionario')(config, Sequelize.DataTypes);
db.Ponto = require('./Ponto')(config, Sequelize.DataTypes);

// Associações
db.Funcionario.associate(db);
db.Ponto.associate(db);

module.exports = db;
