const db = require('../config/db');

const Usuario = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  },
  create: async (usuario) => {
    const { nombre, email, password, rol } = usuario;
    const [result] = await db.query(
      'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)',
      [nombre, email, password, rol || 'usuario']
    );
    return result.insertId;
  }
};

module.exports = Usuario;
