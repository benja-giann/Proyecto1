const express = require('express');
const router = express.Router();
const multer =require('multer')



const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/carrito', mainController.carrito);

router.get('/productos', mainController.productos);

router.get('/detalle2', mainController.detalle2);


//muestra la vista de editar el carro
router.get('/editarCarro', mainController.editarCarro);

//eniva la informacion del formulario de editar el carro
router.put('/editarCarro/id:', mainController.editarCarro);



//muestra la vista para eliminar un producto
router.get('/eliminarCarro', mainController.eliminarCarro);

//envia infro para eliminar un producto
router.put('/eliminarCarro', mainController.eliminarCarro);



//muestra la vista del perfil 
router.get('/perfilUsuario',mainController.perfilUsuario);

//muestra la vista de editar el perfil del usuario
router.get('/editarUsuario',mainController.editarUsuario);

//muestra la vista del perfil administrador
router.get('/perfilAdmin', mainController.perfilAdmin);


//envia la edicion del perfil del usuario
//router.put('/editarUsuario/id:',usuarioController.actualizarUsuario);

router.get('/servicios', mainController.servicios);

router.get('/pago', mainController.pago);

router.get('/ayuda', mainController.ayuda);

module.exports = router;
