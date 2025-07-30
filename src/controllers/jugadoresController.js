const Jugador = require('../models/jugadores');

exports.getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.getAll();
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crearJugador = async (req, res) => {
  try {
    const id = await Jugador.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
