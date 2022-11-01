import fs from "fs"
//import {Prize} from "../models/main_models.js";

export default class FSPrizes{
    readAllPrizes(){
        try {
            const dataBuffer = fs.readFileSync("prize.json");
            let dataJSON = JSON.parse(dataBuffer);
            const prizes = []
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

    async addInFile(year, category, firstname, surname, motivation, callback){
        let prizes = this.readAllPrizes();
        let maxId = 0;
        prizes.forEach(prize => {
            if (prize.laureates !== undefined){
                prize.laureates.forEach(laureate => {
                    if (parseInt(laureate.id) > parseInt(maxId)) maxId = laureate.id;
                })
            }
        })
        let idNewLaureate = parseInt(maxId)+1;
        prizes.forEach(prize => {
            if (prize.category == category && prize.year == year){
                if (prize.laureates === undefined) {
                    prize.laureates.push({
                        "id" : idNewLaureate.toString(),
                        "firstname": firstname,
                        "surname": surname,
                        "motivation": motivation,
                        "share":0
                    });
                    return callback(null, prizes);
                }
                else {
                    prizes.forEach(prize2 => {
                        if (prize2.laureates !== undefined){
                            prize2.laureates.forEach(laureate2 => {
                                if (laureate2.firstname == firstname && laureate2.surname == surname){
                                    idNewLaureate = laureate2.id;
                                }
                            })
                        }
                    })
                    let isHere = false;
                    prize.laureates.forEach(laureate => {
                        if (laureate.firstname == firstname && laureate.surname == surname){
                            isHere = true;
                        }
                    })
                    if (!isHere){
                        prize.laureates.push({
                            "id" : idNewLaureate.toString(),
                            "firstname": firstname,
                            "surname": surname,
                            "motivation": motivation,
                            "share":"0"
                        });
                        return callback(null, prizes);
                    }
                    else {
                        return callback(null, prizes);
                    }
                }
            }
        })

        return callback(null, prizes);
    }

    async updateMotivation(newMotivation, year, id, category, callback){
        let prizes = this.readAllPrizes();
        let isFound = false;
        prizes.forEach(prize => {
            if (prize.category == category && prize.year == year){
                prize.laureates.forEach(laureate => {
                    if (laureate.id == id){
                        isFound = true;
                        laureate.motivation = newMotivation;
                    
                        return callback(null, prizes);
                    }
                })
            }
        })
        if (!isFound){
            return callback("Laureat non trouvé...",[]);
        }
    }
}
/*
prize.laureates.push({
    "id" : idNewLaureate,
    "firstname": firstname,
    "surname": surname,
    "motivation": motivation,
    "share":0
})
*/