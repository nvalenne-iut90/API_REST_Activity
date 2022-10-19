const _prize_year = Symbol('year');
const _prize_category = Symbol('category');
const _prize_laureates = Symbol('laureates');

export class Prize{
    constructor(year, category, laureates) {
        this[_prize_year] = year;
        this[_prize_category] = category;
        this[_prize_laureates] = laureates;
    }
    // GETTERS AND SETTERS
    get year(){return this[_prize_year];}
    set year(year){return this[this[_prize_year]] = year;}
    get category(){return this[_prize_category];}
    set category(category){return this[_prize_category] = category;}
    get laureates(){ return this[_prize_laureates]; }
    set laureates(laureates){ this[_prize_laureates] = laureates; }

    get JSON(){
        return JSON.stringify({
            year:this.year, category:this.category,
            laureates:this.laureates
        })
    }
    static fromJSON(json){
        const data = JSON.parse(JSON.stringify(json));

        if (typeof data !== 'object'
            || !data.hasOwnProperty("year")
            || (typeof data.year !== 'string' && typeof data.year !== 'number')
            || !data.hasOwnProperty("category")
            || typeof data.category !== 'string'){
            throw new Error(`Not a Prize: ${json}`);
        }
        if (typeof data.laureates === undefined){
            return new Prize(data.year, data.category, []);
        }
        return new Prize(data.year, data.category, data.laureates);
    }
}



