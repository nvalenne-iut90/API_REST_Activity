import express from "express";
import {listPaginatedLaureates, showLaureateFromID} from "../controllers/main_controller.js";

let router = express.Router();
//localhost:3000/users/
router.get("/", (req, res) => {
    res.render("accueil.hbs");
})
router.get("/laureates", listPaginatedLaureates);
router.get("/laureates/:id", showLaureateFromID);
//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router;