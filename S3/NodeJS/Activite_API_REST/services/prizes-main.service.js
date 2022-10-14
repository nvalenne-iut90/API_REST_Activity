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
    async countLaureatesByCategories(callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let categories = [];
        let result = {};

        prizes.forEach( prize => {
            if (!(categories.includes(prize.category))){
                categories.push(prize.category);
            }
        });

        prizes.forEach( prize => {
            if (result[prize.category] !== undefined){
                if (prize.laureates !== undefined)
                    result[prize.category] += prize.laureates.length;
            } else {
                result[prize.category] = 0;
            }
        });
        //console.log(result);
        return callback(null, result);
    }

    async countPrizesForEachPerson(callback){ // ça marche mais k-uplons
        let prizes = await new PrizesLaureatesService().getLaureates();
        let prizesForEach = [];
        for (let i = 0; i < prizes.length; i++){
            let person = prizes[i];
            let incrPrizes = 0;
            prizes.forEach(prize => {
                if ((prize.firstname === person.firstname) && prize.surname === person.surname) {
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
        let years = []

        // TODO Faire F10
        /*
        let prizesForYear = []
        prizes.forEach(prize => {
            let prize_year = prize.year;
            if (!years.includes(prize_year)){
                prizesForYear.push(prize);
            }
        });
        console.log(prizesForYear);

         */

        return callback(null, years);
    }
}