import PrizesLaureatesService from "../services/prizes-laureates.service.js"
import PrizesMainService from "../services/prizes-main.service.js"

let prizes = new PrizesMainService();
let laureates = new PrizesLaureatesService();

export const showContent = async (req, res) => {
    let content = {}
    let category = req.query.categorie;
    console.log(category);
    await prizes.listAllCategories((error, categories) => {
        //console.log(categories);
        if (error) 
            console.log(error);
        content["categories"] = categories;
    });
    await laureates.getLaureatesByCategory(category, (error, laureates) => {
        //console.log(laureates);
        if (error) 
            console.log(error);
        content["laureates"] = laureates;
    })
    console.log(content);

    res.render("view1.hbs", content);
}