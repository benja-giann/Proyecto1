const { check } = require("express-validator");

const validaRegistracion =[
     check("name")
    .notEmpty().withMessage("Debes completar el nombre").bail()
    .isLength({min:5}).withMessage("El nombre debe ser mas largo").bail(),

    check("email")
    .notEmpty().withMessage("debes completar el email").bail()
    .isEmail().withMessage("Debes completar un email valido").bail(),
    check("password")
    .notEmpty().withMessage("Debes completar la contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe ser mas larga")

]