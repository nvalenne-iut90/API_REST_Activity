import FSPrizes from "../services/prizes-fs.service.js"
import PrizesLaureatesService from "../services/prizes-laureates.service.js";

/*
export const list = (req, res) => {
    let service = new FSPrizes();
    service.listLaureates((error, laureates) => {
        if (error){
            res.status(400).send({success:0,data:error});
        }
        res.status(200);
        console.log(laureates);
        res.render('listLaureates.hbs', {laureates} );
    });
}

 */

export const listPaginatedLaureates = (req, res) => {
    let service = new PrizesLaureatesService();
    const page = req.query.page;
    const limit = 10;
    service.paginatedLaureates(page, limit, (error, laureates) => {
        if (error){
            res.status(400).send({success:0,data:error});
        }
        res.status(200);
        res.render('listLaureates.hbs',{laureates});
    });
}

export const add = (req, res) => {
    res.status(200);
    res.render("user/add.handlebars");
}

export const insert = (req, res) => {
    res.render("user/users.handlebars");
}