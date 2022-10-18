// Modules npm
import express from "express";
import {engine} from "express-handlebars";
import {dirname} from "path";
import dotenv from 'dotenv';
import emoji from 'node-emoji';
import bodyParser from "body-parser";
import swagger_ui from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import {fileURLToPath} from "url";

// Router files
import {default as router_laureates} from "./routes/laureates_router.js";
import {default as router_prizes} from "./routes/prizes_router.js";

dotenv.config();

const port = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', engine({
    defaultLayout : 'main',
    extname : 'hbs'
}));

const swagger_options = {
    swaggerDefinition: {
        openapi : "3.0.0",
        info: {
            title: "API REST Documentation",
            description: "Realised By VALENNE Nathan X TOILLON Samuel",
            servers: [`http://localhost:${port}`],
            version: "0.5"
        }
    },
    apis: ["server.js", "./routes/*.js"]
};

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + "/public"));

/**
 * @swagger
 * /:
 *  get:
 *      description : Show the main page
 *      tags:
 *          - Others
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
app.get("/", (req,res) => {
    let emoji_welcome = emoji.get('wave');
    res.render('accueil.hbs', {emoji_welcome});
});

app.use("/laureates", router_laureates);
app.use("/prizes", router_prizes);

app.use("/api-docs", swagger_ui.serve, swagger_ui.setup(swaggerJsDoc(swagger_options)));

app.all("*", (req, res) => {
    let emojis = {
        "X" : emoji.get('x'),
        "question" : emoji.get('question')
    }
    res.render('error404.hbs', {emojis});
});

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}` );
});