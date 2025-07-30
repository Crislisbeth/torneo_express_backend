const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/jugadoresController');

router.get('/', ctrl.getJugadores);
router.post('/', ctrl.crearJugador);

module.exports = router;
