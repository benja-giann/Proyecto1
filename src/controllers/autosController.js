let db = require('../database/models');
const { param } = require('../routes/autosRoutes');

let autosController = {
  listado: function (req, res) {
    db.Autos.findAll().then(function (autos) {  
      res.render('productos', { autos: autos });
    });
  },
  autos: (req, res) => {
    return res.render("autos", {autos});
},
detalle: (req, res) => {
  return res.render("detalle", {autos});
},
  detalleAuto: function (req, res) {
    db.Autos.findByPk(req.params.id).then(function (auto) {
      auto.fichaTecnica = auto['descripcion'];
      res.render('detalle', { auto: auto });
    });
  },
  guardarAuto: function (req, res) {
    console.log(req.body)
    db.Autos.create({
      categoria_id: req.body.categoria_id,
      modelo: req.body.modelo,
      marca: req.body.marca,
      cilindrada:req.body.cilindrada,
      potencia:req.body.potencia,
      color_id:req.body.color_id,
      imagen_id:req.body.imagen_id,
      precio:req.body.precio,
      descripcion:req.body.descripcion,
      stock:req.body.stock,
      garantia:req.body.garantia,
      origen: req.body.origen,
      peso:req.body.peso,
      oferta:req.body.oferta,
      usuario_id:req.body.usuario_id,
    });
    res.redirect('/autos');
  },
  comprarAuto: function (req, res) {
    db.Autos.update({ comprador: res.locals.usuario.id }, { where: { id: req.params.autoId/*controlar*/ } });
    res.redirect('/users/perfilUsuario');
  },
  editarAuto: function (req, res) {
    db.Autos.findByPk(req.params.id)
      .then(function (auto) {
        res.render("/editarAuto",
          { auto: auto });
      })
  },
  actualizarAuto: function(req, res){
    db.Autos.update({
      categoria_id: req.body.categoria_id,
      modelo: req.body.modelo,
      marca: req.body.marca,
      cilindrada:req.body.cilindrada,
      potencia:req.body.potencia,
      color_id:req.body.color_id,
      imagen_id:req.body.imagen_id,
      precio:req.body.precio,
      descripcion:req.body.descripcion,
      stock:req.body.stock,
      garantia:req.body.garantia,
      origen: req.body.origen,
      peso:req.body.peso,
      oferta:req.body.oferta,
      usuario_id:req.body.usuario_id,
    },{
      where:{
        id: req.params.id
      }
    })
    res.redirect("/autos/edit/" + req.params.id)
  },
  eliminarAuto: function (req, res) {
    db.Autos.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/autos")
  }
};

let autosApiController = {
  listado: function (req, res) {
    db.Autos.findAll().then(function (autos) {
      res.json(autos);
    });
  },
  comprados: function (req, res) {
    db.Autos.findAll({
      where: {
        comprador: req.params.usuario,
      },
    }).then((autos) => {
      res.json(autos);
    });
  },
  
};

module.exports = { autosController, autosApiController };
