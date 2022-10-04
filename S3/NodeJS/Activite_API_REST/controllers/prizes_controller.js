import PrizesMainService from "../services/prizes-main.service.js"
export const listCategories = (req, res) => {
    let service = new PrizesMainService();
    service.listAllCategories((error, categories) => {
        if (error){
            res.status(400).send({success:0,data:error})
        }
        res.status(200).render('prizes.hbs', {categories});
    });
}