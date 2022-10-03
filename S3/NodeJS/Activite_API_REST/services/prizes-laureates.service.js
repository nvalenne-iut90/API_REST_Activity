import FSPrizes from "./prizes-fs.service.js"
export default class PrizesLaureatesService {
    async paginatedLaureates(page, limit, callback){
        if (page === undefined || page === ""){
            page = 1;
        }
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        let prizes = await new FSPrizes().readAllPrizes();
        let result = [];
        let liste = [];
        prizes.forEach((prize) => {
            result.push(JSON.parse(prize.JSON));
        });
        for (let i = 0; i < result.length; i++){
            if (result[i].laureates !== undefined){
                for (let j = 0; j < result[i].laureates.length; j++){
                    liste.push(result[i].laureates[j])
                }
            }
        }

        //result = result.slice(startIndex, endIndex);
        liste = liste.slice(startIndex, endIndex);
        console.log(liste)

        //return callback(null, result);
        return callback(null, liste);

    }
}