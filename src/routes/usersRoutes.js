const express = require('express');
let { body } = require('express-validator');
const router = express.Router();

// Controller
const { userController, apiController } = require('../controllers/userController');

// Middleware
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, userController.register);

// Procesar el registro
router.post('/register',uploadFile.single("imagenUsuario") ,validations, userController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

// Procesar el login
router.get('/login', userController.loginProcess);

// envia la info
router.post('/userLoginForm', userController.login);

//muestra el logout
router.get('/logout', userController.logout);


//muestra la vista del perfil administrador
router.get('/UserProfileAdmin', userController.profileAdmin);
//muestra el perfil del id solicitado
router.get('/userProfile/:id', authMiddleware, userController.profile)
//envia la edicion del usuario
router.put('/userProfile/:id/edit', userController.Update)
//elimina el perfil del usuario
router.delete('/userProfile/id:', userController.Delete);




//muestra la vista del historial
router.get('/historial', userController.historial);

// API
router.get('/listado', apiController.listado);

module.exports = router;
