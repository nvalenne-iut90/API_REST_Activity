import fs from "fs"
import {User, AbstractUser} from "../models/users.model.js";

export default class FSUsers extends AbstractUser {
    async list(callback){
        const users = await this.readAllUsers();
        if (users.length === 0){
            return callback([]);
        }
        let results = [];
        users.forEach((user) => {
            results.push(JSON.parse(user.JSON));
        });
        return callback(null, results);
    }
    async readAllUsers(){
        try {
            const dataBuffer = fs.readFileSync("users.json");
            let dataJSON = dataBuffer.toString();
            dataJSON = JSON.parse(dataJSON);
            const users = []
            dataJSON.forEach((user) => {
                users.push(User.fromJSON(user))
            });
        } catch (e) {
            console.log(e);
            return [];
        }

    }
}