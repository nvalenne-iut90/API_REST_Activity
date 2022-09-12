require('dotenv').config()
const port = process.env.PORT;

const express = require('express');
const {response} = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Requete reçue");
    console.log(req.query);
    let response = "";
    Object.keys(req.query).forEach((key, index) => {
        console.log(`${key} : ${req.query[key]}`);
        response += `<br>${key} : ${req.query[key]}`
    })
    res.status(200).send(`<h1>Bonjour !</h1><br>
                                    <h2>Voici la reponse</h2>
                                      ${response}`)
})

app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port ${port}`)
})