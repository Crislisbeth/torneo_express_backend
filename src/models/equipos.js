const db = require('../config/db');

const Equipo = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM equipos');
    return rows;
  },
  create: async (equipo) => {
    const { nombre, ciudad, logo } = equipo;
    const [result] = await db.query(
      'INSERT INTO equipos (nombre, ciudad, logo) VALUES (?, ?, ?)',
      [nombre, ciudad, logo]
    );
    return result.insertId;
  }
};

module.exports = Equipo;
