const router = require('../routes/mainRoutes');
/* const productos = require('../../data/productos.json'); */

let productosController = {
  listado: function (req, res) {
    res.send(productos);
  },
  crear: function (req, res) {
    // Aqui vas a manejar tu pedido del POST para la creacion de carros
    res.send('creacion de productos');
  },

  // revisar la clase de rutas parametrizadas - como enviar un parametro por la ruta, revisar clase en vivo 2 CRUD episodio uno
  detalle: function (req, res) {
    res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
  },
  detalleComentarios: function (req, res) {
    if (req.params.idComentario == undefined) {
      res.send('Bienvenidos a los comentarios del producto' + req.params.idProducto);
    } else {
      res.send(
        'Bienvenidos a los comentarios del producto' +
          req.params.idProducto +
          'y estas enfoncado en el comentario' +
          req.params.idComentario
      );
    }
  },
};

module.exports = productosController;
