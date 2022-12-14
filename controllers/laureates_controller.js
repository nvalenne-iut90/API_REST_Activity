import PrizesLaureatesService from "../services/prizes-laureates.service.js";
import FSPrizes from "../services/prizes-fs.service.js";
import fs from "fs"
import { gzipSync } from "zlib";
let service = new PrizesLaureatesService();
let serviceFile = new FSPrizes();

export const listPaginatedLaureates = (req, res) => {
    let page = req.query.page;
    const limit = 10;
    if (page === undefined || page === "" || page <= 0){
        page = 1;
    }  // if page is not defined OR page < 1 => display the content of page 1

    service.getPaginatedLaureates(page, limit, (error, laureates) => {
        if (error)
            res.status(400).send({success:0,data:error});
        res.status(200).send(laureates);
    });
}

export const showLaureateFromID = (req, res) => {
    const id = req.params.id;
    service.showLaureate(id, (error, laureate) => {
        if (error)
            res.status(400).send({success: 0, data: error});
        res.status(200).send([laureate]);
    });
}

export const countLaureates = (req, res) => {
    service.countLaureates((error, result) => {
        //console.log(result);
        res.status(200).send(result.toString())
    });
}

export const countLaureatesByCategories = (req, res) => {
    service.countLaureatesByCategories((error, result) => {
        if (error)
            res.status(400).send({success: 0, data: error});
        else res.status(200).send(result);
    });
}

export const countLaureatesForEachYear = (req, res) => {
    service.countLaureatesForEachYear((error, result) => {
        if (error)
            res.status(400).send({success:0,data:error});
        else
            res.status(200).send(result);
    })
}

export const sortLaureates = (req, res) => {
    let sorting = req.query.sorting;
    service.sortLaureates(sorting, (error, result) => {
        if (error)
            res.status(400).send({success:0, data:error})
        else res.status(200).send(result)
    })
}

export const laureateFilter = (req, res) => {
    let firstname = req.query.firstname;
    let surname = req.query.surname;
    let category = req.query.category;
    service.laureateFilter(firstname, surname, category, (error, result) => {
        if (error)
            res.status(400).send({success:0,data:error});
        res.status(200).send(result);
    })
}

export const updateMotivation = (req, res) => {
    let annee = req.query.year;
    let id = req.query.id;
    let category = req.query.category;
    let motivation = req.query.motivation
    if (annee === undefined || id === undefined || category === undefined || motivation === undefined)
        res.status(400).send({success:0, data:"Missing parameter"});
    serviceFile.updateMotivation(motivation, annee, id, category, (error, content) => {
        if (error){
            res.status(400).send(error);
        } else {
            fs.writeFile("prize.json", JSON.stringify(content), (err) => {
                if (err) throw err;
            });
            res.status(200).send("Laureate updated successfully !");
        }
    });
    
}

export const newLaureate = (req, res) => {
    let year = req.query.year, category = req.query.category, firstname = req.query.firstname, surname = req.query.surname, motivation = req.query.motivation
    serviceFile.addInFile(year, category, firstname, surname, motivation, (error, laureate) => {
        if (error){
            res.status(400).send(error)
        } else {
            fs.writeFile("prize.json", JSON.stringify(laureate), (err) => {
                if (err) throw err;
            });
            res.status(200).send("The laureate has been added successfully!");
        }
    })
}

export const deleteInFile = (req, res) => {
    let annee = req.query.year;
    let id = req.query.id;
    let category = req.query.category;
    if (annee === undefined || id === undefined || category === undefined)
        res.status(400).send({success:0, data:"Missing parameter"});
    //console.log(annee, id, category);
    serviceFile.deleteInFile(annee, id, category, (error, content) => {
        if (error){
            res.status(400).send(error)
        } else {
            //console.log(content);
            fs.writeFile("prize.json", JSON.stringify(content), (err) => {
                if (err) throw err;
                console.log("Laureate has been deleted successfully");
            });
            res.status(200).send("Laureate has been deleted successfully");
        }
    });
}