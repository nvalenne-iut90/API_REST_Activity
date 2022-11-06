import validator from "validator"
import FSPrizes from "../services/prizes-fs.service.js"
export const validateLaureate = (req, res, next) => {
    let category = req.body.categorie, year = req.body.year
        , firstname = req.body.firstname, surname = req.body.surname, motivation = req.body.motivation;
    console.log(year, category, firstname, surname, motivation);
    
    let isValid = true;

    /**
     * VALIDATOR'S CONDITIONS
     *      NOT ELIGIBLE FOR PROCESSING :
     *          - IF NONE OF THESE PARAMETERS ARE DEFINED
     *          - IF YEAR IS NOT AN INTEGER
     *          - IF YEAR IS NOT IN JSON FILE
     *          - IF THE JSON FILE DOESN'T CONTAINS THIS YEAR
     *          - IF FIRSTNAME OR SURNAME DOESN'T COUNT MORE THAN 3 LETTERS 
     * 
     *      ELSE ELIGIBLE FOR PROCESSING
     */
    if (!category || !year || !firstname || !surname || !motivation){
        console.log("Error : One of these parameters is not defined");
        isValid = false;
    }
    if (firstname.length < 3 || surname.length < 3){
        console.log("Error : Firstname or surname is inferior to 3 caracters");
        isValid = false;
    }
    if (!validator.isInt(year)){
        console.log("Error : Year is not an integer");
        isValid = false;
    }
    
    let file = new FSPrizes().readAllPrizes();
    let yearsInFile = []
    file.forEach(prize => {
        if (!yearsInFile.includes(prize.year))
            yearsInFile.push(prize.year);
    });
    //console.log(yearsInFile);
    if (!yearsInFile.includes(year)){
        console.log("Error : Year is not existing in file");
        isValid = false;
    }

    if (isValid){
        console.log("Laureate validated and eligible for processing");
        next();
    } else {
        console.log("Laureate not validated and not eligible for processing");
        res.redirect("/views/view2");
    }
}