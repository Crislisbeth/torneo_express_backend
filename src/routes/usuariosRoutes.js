const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuariosController');

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.crearUsuario);

module.exports = router;
