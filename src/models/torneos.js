const db = require('../config/db');

const Torneo = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM torneos');
    return rows;
  },
  create: async (torneo) => {
    const { nombre, fecha_inicio, fecha_fin } = torneo;
    const [result] = await db.query(
      'INSERT INTO torneos (nombre, fecha_inicio, fecha_fin) VALUES (?, ?, ?)',
      [nombre, fecha_inicio, fecha_fin]
    );
    return result.insertId;
  }
};

module.exports = Torneo;
