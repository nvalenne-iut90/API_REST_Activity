import FSPrizes from "./prizes-fs.service.js"
export default class PrizesLaureatesService {
    async paginatedLaureates(page, limit, callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let results = [];
        prizes.forEach((prize) => {
            results.push(JSON.parse(prize.JSON));
        });
        // middleware function

        // calculating the starting and ending index
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        results = results.slice(startIndex, endIndex);
        return callback(null, results);

    }
}