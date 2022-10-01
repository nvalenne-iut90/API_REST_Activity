import express from "express";
import {engine} from "express-handlebars";
import {default as routes} from "./routers/main_router.js";
import dotenv from 'dotenv';
import {fileURLToPath} from "url";
import {dirname} from "path";
dotenv.config();
const port = process.env.PORT;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('hbs', engine({
    defaultLayout : 'main',
    extname : 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + "/public"));

app.use("/", routes);

app.get("/laureates", (req, res) => {
    res.render('prizes.hbs');
})

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}` );
});