import validator from "validator";
export const validatePrize = (req, res, next) => {
    let year = req.body.year;
    let category = req.body.category;
    let laureates = req.body.laureates;
    let isValid = true;
    if (isValid){
        next();
    } else {
        res.status(400).render("error404.handlebars");
    }

}