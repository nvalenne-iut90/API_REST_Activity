import FSPrizes from "./prizes-fs.service.js"
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
}