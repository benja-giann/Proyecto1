let db = require('../database/models');
const { param } = require('../routes/carros');

let carrosController = {
  listado: function (req, res) {
    db.Carros.findAll().then(function (carros) {
      res.render('productos', { carros: carros });
    });
  },
  detalleProducto: function (req, res) {
    db.Carros.findByPk(req.params.id).then(function (carro) {
      carro.fichaTecnica = carro['ficha-tecnica'];
      res.render('detalle', { carro: carro });
    });
  },
  crearProducto: (req, res) => {
    return res.render('crear');
  },
  guardarProducto: function (req, res) {
    console.log(req.body)
    db.Carros.create({
      name: req.body.name,
      descuento: req.body.descuento,
      precio: req.body.precio,
      'ficha-tecnica': req.body.ficha_tecnica,
      marca: req.body.marca,
    });
    res.redirect('/carros');
  },
  comprarProducto: function (req, res) {
    db.Carros.update({ comprador: res.locals.usuario.id }, { where: { id: req.params.carroId } });
    res.redirect('/users/perfilUsuario');
  },
  editarProducto: function (req, res) {
    db.Carros.findByPk(req.params.id)
      .then(function (carro) {
        res.render("/editarCarro",
          { carro: carro });
      })
  },
  actualizarProducto: function(req, res){
    db.Carros.update({
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
    res.redirect("/carros/edit/" + req.params.id)
  },
  eliminarProducto: function (req, res) {
    db.Carros.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/carros")
  }
};

let carrosApiController = {
  listado: function (req, res) {
    db.Carros.findAll().then(function (carros) {
      res.json(carros);
    });
  },
  comprados: function (req, res) {
    db.Carros.findAll({
      where: {
        comprador: req.params.usuario,
      },
    }).then((carros) => {
      res.json(carros);
    });
  },
};

module.exports = { carrosController, carrosApiController };
