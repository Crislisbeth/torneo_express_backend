const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Torneo = sequelize.define('Torneo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  categoria: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  fecha_inicio: { type: DataTypes.DATE, allowNull: false },
  fecha_fin: { type: DataTypes.DATE, allowNull: false },
}, {
  timestamps: false,
  tableName: 'torneos',
});

module.exports = Torneo;
