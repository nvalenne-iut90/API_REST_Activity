import FSPrizes from "./prizes-fs.service.js"
export default class PrizesLaureatesService {
    async getLaureates() {
        // Gets the content of the json file
        let prizes = new FSPrizes().readAllPrizes();
        let result = [];
        let liste = [];
        /*
        prizes.forEach((prize) => { // Parsing the content into a json object
            result.push(JSON.parse(prize.JSON));
        });
        */      //TEST

        // Extracts laureates from the json file and push them into an array
        prizes.forEach(prize => {
            if (prize.laureates !== undefined) {
                prize.laureates.forEach(laureate => {
                    liste.push(laureate)
                })
            }
        });

        return liste;
    }

    getLaureatesByCategory(category, callback) {
        let prizes = new FSPrizes().readAllPrizes();
        let liste = [];
        prizes.forEach(prize => {
            if (prize.laureates !== undefined && prize.category === category) {
                prize.laureates.forEach(laureate => {
                    liste.push({
                        'firstname' : laureate.firstname,
                        'surname' : laureate.surname,
                        'year' : prize.year,
                    })
                })
            }
        });
        //console.log(liste);
        return callback(null, liste)
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
                return callback(null, {
                    "id" : id,
                    "firstname" : laureate.firstname,
                    "surname" : laureate.surname
                });
            }
        });
        if (isFound === false){ // in the case where the element is not found
            return callback("Lauréat non trouvé...", []);
        }

    }

    async countLaureates(callback){
        let laureates = await this.getLaureates();
        let numberOfLaureates = 0;
        let laureatesNamesTab = [];
        laureates.forEach(laureate => {
            let laureateName = laureate.firstname + " " + laureate.surname;
            if (!laureatesNamesTab.includes(laureateName)){
                laureatesNamesTab.push(laureateName);
                numberOfLaureates += 1;
            }
        })
        return callback(null, numberOfLaureates);
    }

    async countLaureatesByCategories(callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let categories = [];
        let result = {};

        prizes.forEach( prize => {
            if (!(categories.includes(prize.category))){
                categories.push(prize.category);
            }
            if (result[prize.category] !== undefined){
                if (prize.laureates !== undefined)
                    result[prize.category] += prize.laureates.length;
            } else {
                result[prize.category] = 0;
            }
        });
        let mostLaureates = 0;
        for (const key in result) {
            if (result[key] > mostLaureates){
                mostLaureates = result[key];
                result["hasTheMostLaureates"] = key;
            }
        }
        console.log(result);
        return callback(null, result);
    }

    async countLaureatesForEachYear(callback){
        let prizes = await new FSPrizes().readAllPrizes();
        let result = [];
        let years_loop = [];

        prizes.forEach(prize => {
            let year = prize.year;
            if (!years_loop.includes(year)){
                years_loop.push(year);
                let nbLaureats = 0;
                prizes.forEach(prize2 => {
                    if (prize2.year === prize.year && prize2.laureates !== undefined){
                        nbLaureats += prize2.laureates.length;
                    }
                });
                result.push({
                    "année" : year,
                    "nbLaureats": nbLaureats
                });
            }
        })


        return callback(null, result);
    }

    sortLaureates(sorting, callback) {
        let prizes = new FSPrizes().readAllPrizes()
        let result = [];
        let years_loop = [];

        prizes.forEach(prize => {
            let year = prize.year;
            if (!years_loop.includes(year) && prize.laureates !== undefined){
                years_loop.push(year);
                let nbLaureats = 0;
                prizes.forEach(prize2 => {
                    if (prize2.year === prize.year && prize2.laureates !== undefined){
                        nbLaureats += prize2.laureates.length;
                    }
                });
                result.push({
                    "annee" : year,
                    "nbLaureats": nbLaureats
                });
            }
        })

        if (sorting == "+laureates"){
            result.sort(function compare(a, b) {
                if (a.nbLaureats < b.nbLaureats)
                   return -1;
                if (a.nbLaureats > b.nbLaureats )
                    return 1;
                return 0;
            });
        } else if (sorting == "-laureates"){
            result.sort(function compare(a, b) {
                if (a.nbLaureats > b.nbLaureats)
                   return -1;
                if (a.nbLaureats < b.nbLaureats)
                   return 1;
                return 0;
            });
            
        } else {
            return callback("Choisissez entre +laureates et -laureates, réessayez...", null)
        }
        return callback(null, result)
    }
    
    async laureateFilter (firstname, surname, category, callback) {
        let prizes = new FSPrizes().readAllPrizes();
        let cate = [];
        let first = [];
        let sur = [];
        if (category !== undefined){
            prizes.forEach(prize =>{
                if (prize.category == category){
                    if (prize.laureates !== undefined){
                        //cate.push(...prize.laureates)
                        prize.laureates.forEach(l => cate.push({
                            "id" : l.id,
                            "year" : prize.year,
                            "firstname" : l.firstname,
                            "surname" : l.surname,
                            "motivation" : l.motivation,
                            "share" : l.share
                        }))
                    }
                }
            })
        }
        else {
            prizes.forEach(prize => {
                if (prize.laureates !== undefined){
                    prize.laureates.forEach(l => cate.push({
                        "id" : l.id,
                        "year" : prize.year,
                        "firstname" : l.firstname,
                        "surname" : l.surname,
                        "motivation" : l.motivation,
                        "share" : l.share
                    }))
                }
            })
        }
        if (firstname !== undefined){
                cate.forEach(cat => {
                    if (cat.firstname == firstname){
                        first.push(cat)
                    }
                })
        }
        else {
            first.push(...cate)
        }

        if (surname !== undefined){
            first.forEach(first1 => {
                if (first1.surname == surname){
                    sur.push(first1)
                }
            })
        }
        else {
            sur.push(...first)
        }

        return callback(null, sur)
        
    }
}