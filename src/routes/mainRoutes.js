const express = require('express');
const router = express.Router();
const multer =require('multer');



const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/crear', mainController.crear);

router.get('/servicios', mainController.servicios);

router.get('/pago', mainController.pago);

router.get('/carrito', mainController.carrito);

router.get('/ayuda', mainController.ayuda);


module.exports = router;
