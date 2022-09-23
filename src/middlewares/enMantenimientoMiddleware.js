


function enMantenimiento(req, res, next){
    if (enMantenimientoMiddleware == true){ 
    res.render("en-mantenimiento");
    }else {
  next();
    }
    
};

module.exports=enMantenimiento;