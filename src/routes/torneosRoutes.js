const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/torneosController');

router.get('/', ctrl.getTorneos);
router.post('/', ctrl.crearTorneo);

module.exports = router;
