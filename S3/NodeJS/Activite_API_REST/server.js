import express from "express";
import {engine} from "express-handlebars";
import {default as routes} from "./routers/main_router.js";
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

app.use("/", routes);

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