import FSPrizes from "./prizes-fs.service.js"
export default class PrizesLaureatesService {
    async getLaureates() {
        // Gets the content of the json file
        let prizes = await new FSPrizes().readAllPrizes();
        let result = [];
        let liste = [];
        prizes.forEach((prize) => { // Parsing the content into a json object
            result.push(JSON.parse(prize.JSON));
        });

        // Extracts laureates from the json file and push them into an array
        for (let i = 0; i < result.length; i++) {
            if (result[i].laureates !== undefined) {
                for (let j = 0; j < result[i].laureates.length; j++) {
                    liste.push(result[i].laureates[j])
                }
            }
        }

        return liste;
    }
    async getPaginatedLaureates(page, limit, callback){

        const startIndex = (page - 1) * limit;  // first element to show in the page
        const endIndex = page * limit;          // last element to show in the page

        let result = await this.getLaureates();

        // Gets >limit< elements from the array to show them in the HTML table according to the page
        result = result.slice(startIndex, endIndex);
        //console.log(liste)    // test

        return callback(null, result);   // return no errors and the content of the HTML table

    }
    async showLaureate(id, callback){
        let result = await this.getLaureates();
        let isFound = false;
        if (result.length === 0)    // if no laureates => show nothing
            return callback([]);

        result.forEach((laureate) => {  // Gets the element which is matching with id
            if (laureate.id === id){
                isFound = true;     // the element is found
                return callback(null, [laureate]);
            }
        });
        if (isFound === false){ // in the case where the element is not found
            return callback(null, []);
        }

    }
}