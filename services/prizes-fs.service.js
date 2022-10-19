import fs from "fs"
import {Prize} from "../models/main_models.js";

export default class FSPrizes{
    async listLaureates(callback){
        const prizes = await this.readAllPrizes();
        if (prizes.length === 0){
            return callback([]);
        }
        let results = [];
        prizes.forEach((prize) => {
            results.push(JSON.parse(prize.JSON));
        });
        return callback(null, results);
    }
    async readAllPrizes(){
        try {
            const dataBuffer = fs.readFileSync("prize.json");
            let dataJSON = dataBuffer.toString();
            dataJSON = JSON.parse(dataJSON);
            const prizes = []
            dataJSON.forEach((prize) => {
                prizes.push(Prize.fromJSON(prize))
            });
            return prizes;
        } catch (e) {
            console.log(e);
            return [];
        }

    }
    async deleteInFile(year, id, category, callback){
        return callback(null, []);
    }

    async addInFile(year, category, firstname, surname, callback){

    }

    async updateInFile(motivation, year, category, id, callback){

    }
}