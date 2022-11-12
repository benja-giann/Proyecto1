let { validationResult } = require('express-validator');
const User = require('../database/models/User')

const userController = {

	register: (req, res) => {
		return res.render('userRegisterForm');
	},
  Profile: (req, res) => {
		return res.render('userProfile');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('userRegisterForm', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

    let userInDB = User.findByField('email',req.boy.email);

    if(userInDB){
      return res.render('userRegisterForm', {
				errors:{
          email:{
            msg:'Este email ya esta registrado'
          }
        },
				oldData: req.body
			});
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body,password,  10),
      imagenUsuario:req.file.filename
    }

    let userCreated = User.create(userToCreate);
     
		return res.redirect('/user/login');
	},
  login: (req, res) => {
   return res.redirect('userLoginForm');
  },
  loginProcess:(req, res)=>{
    let userToLogin = User.findByField('email', req.body.email);  

    if(userToLogin){
     let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (isOkThePassword){
        req.session.userLogged = userToLogin;
        return res.redirect('/user/profile'); 
      }
      return res.render ('userLoginForm', {
        errors:{
          email:{
            msg:'Las credenciales son invalidas'
          }
        }
      });
    }

  },
	profile:(req, res)=>{
   return res.redirect('userProfile',{ 
   user: req.session.userLogged
   });
	},
  profileAdmin: (req, res) => {
    return res.render("userProfileAdmin");
  },
logout:(req, res)=>{
  req.session.destroy();
  return res.redirect('/')
}
}

let apiController = {
  listado: function (req, res) {
    db.Usuarios.findAll().then(function (usuarios) {
      res.json(usuarios);
    });
  },
};

module.exports = { userController, apiController }; 