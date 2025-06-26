const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.getUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      usuario.password = await bcrypt.hash(password, salt);
    }
    await usuario.save();
    res.json({ msg: 'Usuario actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });
    await usuario.destroy();
    res.json({ msg: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
