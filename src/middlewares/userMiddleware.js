const funcionesMDW={
 validacionUsuario:(req, res, next)=>{
 
    if (req.session.usuario!=undefined) { 
      console.log("estoy adentro")
      next() 
      }
      res.redirect('/users/login')
},
pasandoinfoVistas:function (req, res, next) {
  res.locals.usuario = req.session.usuario;
  next();
},

}

module.exports= funcionesMDW;