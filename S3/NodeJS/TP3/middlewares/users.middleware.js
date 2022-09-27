import validator from "validator";
export const validateUser = (req, res, next) => {
    let firstname = req.body.first_name;
    let lastname = req.body.last_name;
    let email = req.body.email;
    let isValid = true;
    if (!validator.isEmail(email)){
        isValid = false;
    }
    if (isValid){
        next();
    } else {
        res.status(400).render("error404.handlebars");
    }

}