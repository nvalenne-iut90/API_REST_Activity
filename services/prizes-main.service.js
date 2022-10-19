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
                console.log(listPrizesPerYear.filter(i => i === undefined));
                if (listPrizesPerYear.filter(i => i === undefined).length === 5){ // If 
                    result.push(year);
                }
            }
        })

        return callback(null, result);
    }
}