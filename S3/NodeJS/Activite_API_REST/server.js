// Template engine and express imports
import express from "express";
import {engine} from "express-handlebars";

// Routes
import {default as router_laureates} from "./routers/laureates_router.js";
import {default as router_prizes} from "./routers/prizes_router.js";

import {fileURLToPath} from "url";
import {dirname} from "path";
import dotenv from 'dotenv';
import emoji from 'node-emoji';
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

app.get("/", (req,res) => res.render('accueil.hbs'))

app.use("/laureates", router_laureates);
app.use("/prizes", router_prizes);

app.use("*", (req, res) => {
    let emojis = {
        "X" : emoji.get('x'),
        "question" : emoji.get('question')
    }
    res.render('error404.hbs', {emojis});
})

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}` );
});