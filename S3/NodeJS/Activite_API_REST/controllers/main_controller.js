import dotenv from "dotenv";
dotenv.config();
const dataSource = process.env.DATASOURCE;
import {default as FSUsers} from "../services/users-fs.service.js"
import {default as APIUsers} from "../services/users-api.service.js"

export const list = (req, res) => {
    let service =
        dataSource == 1 ? new FSUsers() : new APIUsers();
    service.list((error, results) => {
        if (error){
            res.status(400).send({success:0,data:error});
        }
        return res.status(200).send(results);
    })
}

export const add = (req, res) => {
    res.status(200);
    res.render("user/add.handlebars");
}

export const insert = (req, res) => {
    res.render("user/users.handlebars");
}