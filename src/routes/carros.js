var express = require('express');
var router = express.Router();
var { carrosController, carrosApiController } = require('../controllers/carrosController');
var methodOvedrride= require('method-override');


router.get('/', carrosController.listado);
router.get('/crear', carrosController.crearProducto);
router.post('/crear', carrosController.guardarProducto);

router.get('/detalle/:id', carrosController.detalleProducto);

router.post('/comprar', carrosController.comprarProducto);
router.delete('/eliminarCarro/:id', carrosController.eliminarProducto);

router.put('/:id/editarCarro', carrosController.editarProducto);
router.put('/edit/:id', carrosController.actualizarProducto);

router.get('/listado', carrosApiController.listado);

router.get('/comprados/:usuario', carrosApiController.comprados);

module.exports = router;
