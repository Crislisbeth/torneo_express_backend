const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Equipo = sequelize.define('Equipo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  logo_url: { type: DataTypes.STRING, allowNull: true },
  torneo_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: false,
  tableName: 'equipos',
});

module.exports = Equipo;
