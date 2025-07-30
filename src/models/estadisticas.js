const db = require('../config/db');

const Estadistica = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM estadisticas');
    return rows;
  },
  create: async (data) => {
    const { jugador_id, goles, tarjetas_amarillas, tarjetas_rojas } = data;
    const [result] = await db.query(
      'INSERT INTO estadisticas (jugador_id, goles, tarjetas_amarillas, tarjetas_rojas) VALUES (?, ?, ?, ?)',
      [jugador_id, goles, tarjetas_amarillas, tarjetas_rojas]
    );
    return result.insertId;
  }
};

module.exports = Estadistica;
