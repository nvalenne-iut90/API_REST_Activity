import FSPrizes from "./prizes-fs.service.js"
import PrizesLaureatesService from "./prizes-laureates.service.js";
export default class PrizesMainService {

    async listAllCategories(callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let categories = [];
        prizes.forEach((prize) => {     // add a category if not in categories array
            if (!(categories.includes(prize.category))){
                categories.push(prize.category);
            }
        });
        return callback(null, categories);
    }

    async countPrizes(callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let nbPrizes = 0;
        prizes.forEach(prize => {
            if (!(prize.laureates === undefined)){
                nbPrizes++;
            }
        })
        return callback(null,nbPrizes.toString());
    }

    async countPrizesForEachPerson(callback){ // ça marche mais k-uplons
        let laureates = await new PrizesLaureatesService().getLaureates();
        let prizesForEach = [];
        for (let i = 0; i < laureates.length; i++){
            let person = laureates[i];
            let incrPrizes = 0;
            laureates.forEach(laureate => {
                if ((laureate.firstname === person.firstname) && laureate.surname === person.surname) {
                    incrPrizes++;
                }
            });
            prizesForEach.push({
                firstname: person.firstname,
                surname: person.surname,
                nbPrizes: incrPrizes
            });

            //console.log(person);
            //console.log(prizesForEach[i]);
        }
        return callback(null, prizesForEach);
    }

    async listAllYearsWhereNotPrizes(callback) {
        let prizes = await new FSPrizes().readAllPrizes();
        let result = []; // Years result
        let years_loop = [];

        prizes.forEach(prize => {
            let year = prize.year;
            if (!years_loop.includes(year)){
                years_loop.push(year);
                let listPrizesPerYear = [];
                prizes.forEach(prize2 => {
                    if (prize2.year === prize.year){
                        listPrizesPerYear.push(prize2.laureates);
                    }
                });
                if (listPrizesPerYear.filter(i => i === undefined).length === 5){ // If 
                    result.push(year);
                }
            }
        })

        return callback(null, result);
    }

    async ListPrizesFromLaureateID(idLaureate, callback){

        let result = [], laureatePrizes = [];
        let prizes = await new FSPrizes().readAllPrizes(), laureates = await new PrizesLaureatesService().getLaureates();
        let laureateFirstName, laureateSurName, isFound = false;
        
        for(let i = 0; i < laureates.length; i++) {
            if (laureates[i].id == idLaureate){
                isFound = true;
                laureateFirstName = laureates[i].firstname, laureateSurName = laureates[i].surname;
                break
            }
        };
        if (isFound == false){
            return callback("Laureat non trouvé...", [])
        }
        prizes.forEach(prize => {
            if (prize.laureates !== undefined){
                prize.laureates.forEach(laureate => {
                    if (laureateFirstName == laureate.firstname && laureateSurName == laureate.surname){
                        laureatePrizes.push({
                            "category" : prize.category,
                            "year" : prize.year,
                            "motivation" : laureate.motivation
                        });
                    }
                })
            }
        });
        //console.log(laureatePrizes);
        result.push({
            "name" : laureateFirstName + " " + laureateSurName,
            "prizes" : laureatePrizes
        })

        return callback(null, result);
    }
}