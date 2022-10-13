import PrizesMainService from "../services/prizes-main.service.js"
let service = new PrizesMainService();
let objectsPage = {};
export const showContent = async (req, res) => {
    await service.listAllCategories((error, categories) => {
        if (error) {
            res.status(400).send({success: 0, data: error})
        }
        objectsPage['listAllCategories'] = categories;

    });
    await service.countLaureatesByCategories((error, result) => {
        if (error) {
            res.status(400).send({success: 0, data: error})
        }
        objectsPage['countLaureatesByCategories'] = result;
    });
    await service.countPrizesForEachPerson((error, result) => {
        if (error) {
            res.status(400).send({success: 0, data: error});
        }
        objectsPage['countPrizesForEachPerson'] = result;
        //console.log(objectsPage)
        res.status(200).render('prizes.hbs', {objectsPage});
    })
}