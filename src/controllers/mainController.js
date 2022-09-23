
/*const productos = require('../database/Carros.json');*/
const db=require('../database/models');



const controller = {
home: (req, res) => {        
        return res.render("home");        
    },
    perfilAdmin: (req, res) => {
        return res.render("perfilAdmin");
    },
    perfilUsuario: (req, res) => {
        return res.render("perfilUsuario");
    },
    editarUsuario: (req, res) => {
        return res.render("editarUsuario");
    },
    pago: (req, res)=> {
        return res.render("pago");
    },
    carrito: (req, res) => {
        return res.render("carrito");
    },
    productos: (req, res) => {
        return res.render("productos", {productos});
    },
    crearProductos: (req, res) => {
        return res.render('crear');
    },
    editarCarro: (req, res) => {
        return res.render("editarCarro");
    },
    eliminarCarro: (req, res) => {
        return res.render("eliminarCarro");
    },
    detalle2: (req, res) => {
        return res.render("detalle2", {productos});
    },
    servicios: (req, res) => {
        return res.render("servicios");
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    }, 
}

module.exports = controller;