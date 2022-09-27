const express = require('express');
const hbengine = require('express-handlebars');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.engine('hbs', hbengine.engine({
    defaultLayout : 'main',
    extname : '.hbs',
    helpers : {
        raccourcirCommentaire(comment) {
            if (comment.length < 20)
                return comment;
            return comment.substring(0,16) + '...';
        }
    }
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        posts:[
            {
                author : 'Elon Musk',
                image : 'https://picsum.photos/500/500',
                comments : [
                    "C'est mon premier commentaire",
                    "C'est mon deuxieme commentaire",
                    "C'est mon troisieme commentaire",
                ]
            },
            {
                author : 'Jeff Bezos',
                image : 'https://picsum.photos/500/500',
                comments : []
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port ${port}`);
})
