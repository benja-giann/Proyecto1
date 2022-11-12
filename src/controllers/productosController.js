const router = require('../routes/mainRoutes');
const { param } = require('../routes/productosRoutes');

/* const productos = require('../../data/productos.json'); */

let productosController = {
  listado: function (req, res) {
    res.send(productos);
  },
  crear: function (req, res) {
    // Aqui vas a manejar tu pedido del POST para la creacion de carros
    res.send('creacion de autos');
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


  listado: function (req, res) {
    db.Productos.findAll().then(function (productos) {
      res.render('productos', { productos: productos });
    });
  },

  detalleProducto: function (req, res) {
    db.Productos.findByPk(req.params.id).then(function (productos) {
      producto.fichaTecnica = carro['ficha-tecnica'];
      res.render('detalle', { producto: producto });
    });
  },

  guardarProducto: function (req, res) {
    console.log(req.body)
    db.Productos.create({/* corregir en base de datos(agregar y corregir) */
      name: req.body.name,
      descuento: req.body.descuento,
      precio: req.body.precio,
      'ficha-tecnica': req.body.ficha_tecnica,
      marca: req.body.marca,
    });
    res.redirect('/productos');
  },

  comprarProducto: function (req, res) {
    db.Productos.update({ comprador: res.locals.usuario.id }, { where: { id: req.params.carroId } });/*coregir en base de datos(agregar "comprador" y corregir) */
    res.redirect('/users/carritoDeCompras');/*atencion al comprabante de comprar tanto en base de datos como en el codigo(middelwer) */
  },

  editarProducto: function (req, res) {
    db.Productos.findByPk(req.params.id)
      .then(function (carro) {
        res.render("/editarProducto",
          { producto: producto });/*chequear las vistas en detalle */
      })
  },
  actualizarProducto: function(req, res){/* corregir en base de datos(agregar y corregir) *//* corregir en base de datos(agregar y corregir) */
    db.Productos.update({
      name: req.body.name,
      descuento: req.body.descuento,
      precio: req.body.precio,
      'ficha-tecnica': req.body.ficha_tecnica,
      marca: req.body.marca,
    },{
      where:{
        id: req.params.id
      }
    })
    res.redirect("/productos/edit/" + req.params.id)
  },
  eliminarProducto: function (req, res) {
    db.Productos.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/productos")
  }

};

module.exports = productosController;
