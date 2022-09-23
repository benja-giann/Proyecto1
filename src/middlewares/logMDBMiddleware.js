let enMantenimiento = false;

function logDBMMiddleware(req, res, next){
    fs.appendFileSync("logDB.txt", "se creo un registro en la pagina" + req.url);
    next();
}

module.exports=elogDBMMiddleware;