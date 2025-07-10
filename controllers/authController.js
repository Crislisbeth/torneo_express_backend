const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  try {
    const userExists = await Usuario.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ msg: 'Email ya registrado' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
      rol: rol || 'jugador',
    });

    res.status(201).json({ msg: 'Usuario creado', userId: newUser.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usuario.findOne({ where: { email } });
    if (!user) return res.status(400).json({ msg: 'Email no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, {
      expiresIn: '12h',
    });

    res.json({
      token,
      user: { id: user.id, nombre: user.nombre, email: user.email, rol: user.rol },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//