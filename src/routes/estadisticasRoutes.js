const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/estadisticasController');

router.get('/', ctrl.getEstadisticas);
router.post('/', ctrl.crearEstadistica);

module.exports = router;
