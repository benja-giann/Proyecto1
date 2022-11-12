
/*const productos = require('../database/Carros.json');*/
const db=require('../database/models');



const controller = {
home: (req, res) => {        
        return res.render("home");        
    },
    pago: (req, res)=> {
        return res.render("pago");
    },
    carrito: (req, res) => {
        return res.render("carrito");
      },
    crear: (req, res) => {
        return res.render('crear');
      },
    servicios: (req, res) => {
        return res.render("servicios");
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    }, 
}

module.exports = controller;