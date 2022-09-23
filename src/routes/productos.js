let express = require('express');
let productosController = require('../controllers/productosController.js');

let router = express.Router();

router.get('/', productosController.listado);
router.get('/:idProducto', productosController.detalle);
router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

router.post('/', function (req, res) {
  // Aqui vas a handle tu POST request para la creacion de carros
  res.send('creacion de productos');
});

module.exports = router;
