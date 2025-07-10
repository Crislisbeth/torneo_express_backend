const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const usuarioController = require('../controllers/usuarioController');

router.get('/:id', authMiddleware, usuarioController.getUsuario);
router.put('/:id', authMiddleware, usuarioController.updateUsuario);
router.delete('/:id', authMiddleware, usuarioController.deleteUsuario);

module.exports = router;
//