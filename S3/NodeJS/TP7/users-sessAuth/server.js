const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");
const port = 3000;

//Session & cookies
const expressSession = require('express-session')
,connectFlash = require('connect-flash');
const cookieParser = require("cookie-parser");
const serverRouter = express.Router();


// Static Files
app.use(express.static('public'))
app.use('/img', express.static(__dirname + 'public/img'))
// Templating Engine
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

serverRouter.use(cookieParser("secret-passcode"));
const unJour = 86400000;
serverRouter.use(
    expressSession({
        secret: "secret-password",
        cookie:{
            maxAge: unJour,
        },
        resave: false,
        saveUninitialized: false
    })
);
serverRouter.use(connectFlash())
serverRouter.use( (req,res,next) => {
    res.locals.flashMessages = req.flash();
    next();
});
app.use("/", serverRouter);

app.use("/users",usersRouter);


app.listen(port,()=>{
    console.log(`Le serveur ecoute sur le port ${port}`);
});
