import PrizesMainService from "../services/prizes-main.service.js"
let service = new PrizesMainService();
//let objectsPage = {};
export const listAllCategories = async (req, res) => {
    await service.listAllCategories((error, categories) => {
        if (error) {
            res.status(400).send({success: 0, data: error})
        }
        //objectsPage['listAllCategories'] = categories;
        res.status(200).send(categories)
    });
}

export const countLaureatesByCategories = async (req, res) => {
    await service.countLaureatesByCategories((error, result) => {
        if (error) {
            res.status(400).send({success: 0, data: error})
        }
        //objectsPage['countLaureatesByCategories'] = result;
        res.status(200).send(result)
    });
}


//TODO Gérer les doublons
export const countPrizesForEachPerson = async (req, res) => {
    await service.countPrizesForEachPerson((error, result) => {
        if (error) {
            res.status(400).send({success: 0, data: error});
        }
        //objectsPage['countPrizesForEachPerson'] = result;
        //console.log(objectsPage)
        //res.status(200).render('prizes.hbs', {objectsPage});
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