const db = require('../config/db');

const Jugador = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM jugadores');
    return rows;
  },
  create: async (jugador) => {
    const { nombre, posicion, numero, equipo_id } = jugador;
    const [result] = await db.query(
      'INSERT INTO jugadores (nombre, posicion, numero, equipo_id) VALUES (?, ?, ?, ?)',
      [nombre, posicion, numero, equipo_id]
    );
    return result.insertId;
  }
};

module.exports = Jugador;
