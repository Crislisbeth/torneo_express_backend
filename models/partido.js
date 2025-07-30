const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Partido = sequelize.define('Partido', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  equipo1_id: { type: DataTypes.INTEGER, allowNull: false },
  equipo2_id: { type: DataTypes.INTEGER, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  resultado: { type: DataTypes.STRING, allowNull: true },
  torneo_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: false,
  tableName: 'partidos',
});

module.exports = Partido;
