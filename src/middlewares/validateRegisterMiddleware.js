const path = require('path');
const {body} = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Nombre requerido'),
    body('apellido').notEmpty().withMessage('Apellido requerido'),
    body('dni').notEmpty().withMessage('DNI requerido'),
    body('fecha_nacim').notEmpty().withMessage('Fecha de nacimiento requerida'),
    body('provincia').notEmpty().withMessage('Provincia requerida'),
    body('cod_postal').notEmpty().withMessage('Codigo postal requerido'),
    body('email')
    .notEmpty().withMessage('Correo electronico requerido').bail()
    .isEmail().withMessage('Debes escribir un formato de correo electronico valido'),
    body('password').notEmpty().withMessage('Contraseña requerido'),
    body('confirm_password').notEmpty().withMessage('Confirmar contraseña'),
    body('imagenUsuario').custom((value, {req})=>{
      let file = req.file;
      let acceptedExtensions=['.jpg', '.png']; 
  
      if (!file) {
        throw new Error('Tienes que subir una imagen');
      } else { 
        let fileExtension = path.extname(file.originalname);
      if  (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('Las extenciones de archivo permitidas son ${acceptedExtensions.join(", ")}');
      }
    } 
      return true;
    }),
   
  ]
  