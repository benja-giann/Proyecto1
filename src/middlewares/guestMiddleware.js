function guestMiddleware(req, res, next){
if (req.session.userLogged){
    return res.redire('user/profile')
}
next();
}

module.exports = guestMiddleware;