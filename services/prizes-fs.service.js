import fs from "fs"
//import {Prize} from "../models/main_models.js";

export default class FSPrizes{
    readAllPrizes(){
        try {
            const dataBuffer = fs.readFileSync("prize.json");
            //let dataJSON = dataBuffer.toString();
            let dataJSON = JSON.parse(dataBuffer);
            //console.log(dataJSON);
            const prizes = []
            /*
            dataJSON.forEach((prize) => {
                prizes.push(Prize.fromJSON(prize))
            });
            */
            //return prizes;
            return dataJSON;    //TEST
        } catch (e) {
            console.log(e);
            return [];
        }

    }
    async deleteInFile(year, id, category, callback){
        let prizes = this.readAllPrizes();
        let isFound = false;
        prizes.forEach(prize => {
            if (prize.category == category && prize.year == year){
                prize.laureates.forEach(laureate => {
                    if (laureate.id == id){
                        isFound = true;
                        let indexLaureate = prize.laureates.indexOf(laureate);
                        prize.laureates.splice(indexLaureate, 1);
                    
                        return callback(null, prizes);
                    }
                })
            }
        })
        if (!isFound){
            return callback("Laureat non trouvé...",[]);
        }
        
    }

    async addInFile(year, category, firstname, surname, callback){

    }

    async updateInFile(motivation, year, category, id, callback){

    }
}