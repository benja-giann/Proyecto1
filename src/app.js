const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5500;
const methodOverride= require('method-override');
const multer= require('multer');



app.use(session({
    secret: 'Nuestro mensaje secreto',
    resave:false,
    saveUninitialized:false
    }));

//Middleware
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(methodOverride("_method"));

//app.use(userMiddleware.pasandoinfoVistas);
//app.use(logMiddleware);//
//app.use(enMantenimientoMiddleware);//
//app.use(userMiddleware.validacionUsuario)//



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


const indexRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/usersRoutes');
const productosRouter = require('./routes/productosRoutes');
const autosRouter = require('./routes/autosRoutes');

app.use('/', indexRouter);
app.use('/api/productos', productosRouter);
app.use('/productos', productosRouter);
app.use('/users', userRouter);
app.use('/autos', autosRouter);

app.listen(port, () => console.log('estoy funcionando en el puerto ' + port));
