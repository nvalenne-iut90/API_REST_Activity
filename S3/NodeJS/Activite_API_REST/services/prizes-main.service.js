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
        prizes.forEach((prize) => {
            if (!(categories.includes(prize.category))){
                categories.push(prize.category);
            }
        });
        /*
        prizes.forEach((prize) => {

        });
        return callback(null, result);

         */
    }
}