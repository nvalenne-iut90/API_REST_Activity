require("dotenv").config()
const port = process.env.PORT;
console.log(port);
const express = require("express")
const app = express();
const notesRoutes = require("./routes/notes.router");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.get("/",(req,res)=>{
    console.log("Requete recue!!")
    console.log(req.query);
    let response = "";
    Object.keys(req.query).forEach((key,index)=>{
        console.log(`${key} : ${req.query[key]}`);
        response += `<br/> ${key} : ${req.query[key]}`
    })
    res.status(200).send(`<h1>Bonjour</h1>
                        <br/><h2>la reponse:</h2>
                        ${response}`);
});
app.use("/notes", notesRoutes);


app.listen(port,()=>{
    console.log(`Le serveur ecoute sur port ${port}`)
});
