import PrizesLaureatesService from "../services/prizes-laureates.service.js";

export const listPaginatedLaureates = (req, res) => {
    let service = new PrizesLaureatesService();
    let page = req.query.page;
    const limit = 10;
    if (page === undefined || page === ""){
        page = 1;
    }  // if page is not defined => display the content of page 1

    service.getPaginatedLaureates(page, limit, (error, laureates) => {
        if (error){
            res.status(400).send({success:0,data:error});
        }
        res.status(200);
        res.render('listLaureates.hbs',{laureates});
    });
}

export const showLaureateFromID = (req, res) => {
    let service = new PrizesLaureatesService();
    const id = req.params.id;
    service.showLaureate(id, (error, laureates) => {
        if (error) {
            res.status(400).send({success: 0, data: error});
        }
        //console.log(laureates);
        res.status(200).render('listLaureates.hbs', {laureates});
    });
}

export const add = (req, res) => {
    res.status(200);
    res.render("user/add.handlebars");
}

export const insert = (req, res) => {
    res.render("user/users.handlebars");
}