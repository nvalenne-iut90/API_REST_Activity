import PrizesMainService from "../services/prizes-main.service.js"
let service = new PrizesMainService();

export const countPrizes = (req, res) => {
    service.countPrizes((error, result) => {
        if (error)
            res.status(400).send({success: 0, data: error})
        res.status(200).send(result.toString())
    });
}

export const listAllCategories =  (req, res) => {
    service.listAllCategories((error, categories) => {
        if (error)
            res.status(400).send({success: 0, data: error})
        res.status(200).send(categories)
    });
}

//TODO Gérer les doublons
export const countPrizesForEachPerson =  (req, res) => {
    service.countPrizesForEachPerson((error, result) => {
        if (error)
            res.status(400).send({success: 0, data: error});
        //console.log(objectsPage)
        res.status(200).send(result)
    });
}

export const listAllYearsWhereNotPrizes = (req, res) => {
    service.listAllYearsWhereNotPrizes((error, result) => {
        if (error)
            res.status(400).send({success: 0, data:error});
        //console.log(result);
        res.status(200).send(result);
    })
}

export const ListPrizesFromLaureateID = (req, res) => {
    const idLaureate = req.params.id;
    service.ListPrizesFromLaureateID(idLaureate, (error, result) => {
        if (error)
            res.status(400).send({success: 0, data:error});
        //console.log(result);
        res.status(200).send(result);
    })
}