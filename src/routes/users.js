const express = require('express');
let { body } = require('express-validator');
const router = express.Router();
const multer = require('multer');

//const middelwares = require("../middlewares/userMiddleware.js")//


const { usuarioController, apiController } = require('../controllers/usuarioController');

const validateRegister = [
  body('name').notEmpty().withMessage('Nombre requerido'),
  body('email').isEmail().withMessage('Correo electronico requerido'),
  body('password').notEmpty().withMessage('Contraseña requerido'),
];

router.get('/register', usuarioController.renderRegister);

//envia el registro del usuario
router.post('/register', validateRegister, usuarioController.registrarUsuario);

//muestra la vista de login
router.get('/login', usuarioController.renderLogin);

//envia el login
router.post('/login', usuarioController.login);

//muestra el logout
router.get('/logout', usuarioController.logout);

//muestra la vista de edicion
router.get('/editarUsuario/:id',usuarioController.editarUsuario);

//envia la edicion del usuario
router.put('/editarUsuario/:id', usuarioController.actualizarUsuario) 

//envia la edicion del perfil del usuario
router.put('/perfilUsuario/id:/edit',usuarioController.actualizarUsuario);

//elimina el perfil del usuario
router.delete('/perfilUsuario/id:',usuarioController.eliminarUsuario);

//muestra la vista del historial
router.get('/historial', usuarioController.historial);

// API
router.get('/listado', apiController.listado);

module.exports = router;
