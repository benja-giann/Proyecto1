let { validationResult } = require('express-validator');
let db = require('../database/models');


const usuarioController = {
  renderRegister: (req, res) => {
    return res.render('register', { errors: [] });
  },
  registrarUsuario: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Usuarios.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then((usuarioData) => {
       const user = usuarioData.toJSON();
       req.session.usuario = user.id;
       res.cookie('usuario', user['id']);
       res.redirect('/users/perfil')})
        } else {
      res.render('register', { errors: errors.array(), old: req.body });
    }
  },
  renderLogin: (req, res) => {
    return res.render('login', {errors:[{msg:''}]});
  },
  login: (req, res) => {
    db.Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    }).then(function (usuario) {
      if (usuario) {
        const user = usuario.toJSON();
        console.log('userrr', user.id)
        req.session.usuario = user.id;
        res.cookie('usuario', user);
        res.redirect('/perfilUsuario');
      } else {
        res.render('login', {errors: [{msg:'Error, no se encontro usuario con ese correo'}]})
      }
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('usuario');
    res.locals.usuario = null;
    res.redirect('/');
  },
  perfilUsuario:(req, res)=>{
    db.Usuarios.findByPk(req.params.id).then(function (usuario) {
      res.render("perfilUsuario",
        { usuario: usuario});
    })
  },
  editarUsuario: function (req, res) {
    db.Usuario.findByPk(req.session.users)
      .then(function (usuario) {
        res.render("editarUsuario",
          { usuario: usuario});
      })
  },
  actualizarUsuario: function(req, res){
    db.Usuario.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },{
      where:{
        id: req.params.id
      }
    })
    res.redirect("/perfilUsuario" + req.params.id)
  },
  eliminarUsuario: function (req, res) {
    db.Carros.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/")
  },

  historial: (req, res) => {
    db.Carros.findAll({
      where: {
        comprador: req.session.usuario.id,
      },
    }).then((carros) => {
      return res.render('historial', { carros: carros });
    });
  },
};

let apiController = {
  listado: function (req, res) {
    db.Usuarios.findAll().then(function (usuarios) {
      res.json(usuarios);
    });
  },
};

module.exports = { usuarioController, apiController };
