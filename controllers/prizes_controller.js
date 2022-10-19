import PrizesMainService from "../services/prizes-main.service.js"
let service = new PrizesMainService();
export const listAllCategories = async (req, res) => {
    await service.listAllCategories((error, categories) => {
        if (error) {
            res.status(400).send({success: 0, data: error})
        }
        res.status(200).send(categories)
    });
}


//TODO Gérer les doublons
export const countPrizesForEachPerson = async (req, res) => {
    await service.countPrizesForEachPerson((error, result) => {
        if (error) {
            res.status(400).send({success: 0, data: error});
        }
        //console.log(objectsPage)
        res.status(200).send(result)
    });
}

export const listAllYearsWhereNotPrizes = async (req, res) => {
    await service.listAllYearsWhereNotPrizes((error, result) => {
        if (error)
            res.status(400).send({success: 0, data:error});
        //console.log(result);
        res.status(200).send(result);
    })
}

export const ListPrizesFromLaureateID = (req, res) => {
    service.ListPrizesFromLaureateID((error, result) => {
        if (error)
            res.status(400).send({success: 0, data:error});
        //console.log(result);
        res.status(200).send(result);
    })
}