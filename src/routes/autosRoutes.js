var express = require('express');
var router = express.Router();
var { autosController, autosApiController } = require('../controllers/autosController');
var methodOvedrride= require('method-override');
const multer = require('multer');


router.get('/', autosController.listado);

router.get('/autos', autosController.autos);

//envia infro para crear un auto
router.post('/crear', autosController.guardarAuto);

//muestra la vista para editar un auto
router.get('/detalle/:id', autosController.detalleAuto);

router.get('/detalle', autosController.detalle);

//envia la info para comprar un auto
router.post('/comprar', autosController.comprarAuto);

//muestra la vista para eliminar un auto
router.get('/eliminarAuto', autosController.eliminarAuto);

//envia infro para eliminar un auto
router.put('/eliminarAuto', autosController.eliminarAuto);

// elimina el auto elegido
router.delete('/eliminarAuto/:id', autosController.eliminarAuto);

//muestra la vista de editar el carro
router.get('/editarAuto', autosController.editarAuto);

//eniva la informacion del formulario de editar el carro
router.put('/editarAuto/id:', autosController.editarAuto);


router.put('/editarAuto/:id', autosController.actualizarAuto);


router.get('/listado', autosApiController.listado);


router.get('/comprados/:id', autosApiController.comprados);

module.exports = router;

