import PrizesLaureatesService from "../services/prizes-laureates.service.js"
import PrizesMainService from "../services/prizes-main.service.js"
import FSPrizes from "../services/prizes-fs.service.js";
import fetch from "node-fetch";

let serviceFile = new FSPrizes();
let prizes = new PrizesMainService();
let laureates = new PrizesLaureatesService();

export const showContentT1 = async (req, res) => {
    /*
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
    */
    let content = {}
    let category = req.query.categorie;
    const categories = await fetch(`http://localhost:3000/prizes/list-categories`)
    content["categories"] = await categories.json()
    const laureates = await fetch(`http://localhost:3000/laureates/filter?category=${category}`)
    content["laureates"] = await laureates.json()
    //console.log(content);

    res.render("view1.hbs", content);
}

export const showContentT2 = (req, res) => {
    let category = req.query.categorie;
    console.log(category);
    prizes.listAllCategories((error, categories) => {
        //console.log(categories);
        if (error) 
            console.log(error);
        res.render("view2.hbs", {categories});
    });
    
}

export const addContentT2 = (req, res) => {
    let category = req.body.categorie;
    let year = req.body.year;
    let firstname = req.body.firstname;
    let surname = req.body.surname;
    let motivation = req.body.motivation;
    /*
    FSPrizes.addContentT2(year, categorie, firstname, surname, motivation, (error ,result) => {
        if (error) {
            console.log(error);
            res.render("view2.hbs", {error});
        }else{
            message = "success"
            res.render("view2.hbs", {message});
        }
    })
    */
    
}