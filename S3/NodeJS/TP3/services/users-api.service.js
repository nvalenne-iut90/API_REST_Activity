import axios from "axios";
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
            const response = await axios.get("https://reqres.in/api/users?page=1");
            let dataJSON = response.data.data;
            const users = [];
            dataJSON.forEach((user) => {
                users.push(User.fromJSON(user));
            });
            return users;
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}