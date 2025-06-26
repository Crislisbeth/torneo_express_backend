const Torneo = require('../models/torneo');
const Equipo = require('../models/equipo');
const Partido = require('../models/partido');

exports.crearTorneo = async (req, res) => {
  try {
    const torneo = await Torneo.create(req.body);
    res.status(201).json(torneo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarTorneos = async (req, res) => {
  try {
    const torneos = await Torneo.findAll();
    res.json(torneos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.agregarEquipos = async (req, res) => {
  const torneoId = req.params.id;
  const { equipos } = req.body; // espera array [{nombre, logo_url}, ...]

  try {
    const torneo = await Torneo.findByPk(torneoId);
    if (!torneo) return res.status(404).json({ msg: 'Torneo no encontrado' });

    const equiposCreados = await Promise.all(
      equipos.map(e => Equipo.create({ ...e, torneo_id: torneoId }))
    );

    res.json({ msg: 'Equipos agregados', equipos: equiposCreados });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerTablaPosiciones = async (req, res) => {
  // Aquí iría la lógica para calcular la tabla (no implementada en este ejemplo)
  res.json({ msg: 'Funcionalidad pendiente de implementación' });
};
