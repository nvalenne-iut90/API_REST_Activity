import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import {default as usersRoutes} from "./routes/users.router.js";
import {engine} from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();
const port  = process.env.PORT;
app.use(express.static(__dirname + "/public"));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) =>{
    console.log("IP: " + JSON.stringify(req.ip));
    console.log("Browser : " + req.headers["user-agent"]);
    console.log("Langage : " + req.headers["accept-language"]);
    next();
})
app.get("/home", (req, res) => {
    res.render('home.handlebars', ({
        var1: "Bonjour HOME",
        var2 : ["user1", "user2", "user3"]
    }));
});

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    res.render('user/users.handlebars');
})

app.use("*", (req, res, next) => {
    const err = new Error("Not Found");
    err.status(404);
    next(err);
})
app.use((err, req, res, next) => {
    // console.error(err.stack);
    res.render("error404.handlebars")
})

app.listen(port, () => {
    console.log("Le serveur ecoute sur port " + port);
})