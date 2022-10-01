import fs from "fs"
import {AbstractPrizes, Prize} from "../models/main_models.js";

export default class FSPrizes extends AbstractPrizes{
    async list(callback){
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
}