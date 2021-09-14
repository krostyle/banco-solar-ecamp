const { Router } = require('express');
const { getUsuarios, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controllers');

const pathUsuario = '/usuario'
const pathUsuarios = '/usuarios'


const router = Router();

router.get(pathUsuarios, getUsuarios);
router.post(pathUsuario, createUsuario);
router.put(pathUsuario, updateUsuario);
router.delete(pathUsuario, deleteUsuario);






module.exports = router;