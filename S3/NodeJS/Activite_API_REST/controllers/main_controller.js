import dotenv from "dotenv";
dotenv.config();
import FSPrizes from "../services/prizes-fs.service.js"

export const list = (req, res) => {
    let service = new FSPrizes();
    service.list((error, laureates) => {
        if (error){
            res.status(400).send({success:0,data:error});
        }
        res.status(200);
        res.render('prizes.hbs', {laureates});
    })
}

export const add = (req, res) => {
    res.status(200);
    res.render("user/add.handlebars");
}

export const insert = (req, res) => {
    res.render("user/users.handlebars");
}