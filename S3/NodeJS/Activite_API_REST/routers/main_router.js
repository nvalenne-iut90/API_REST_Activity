import express from "express";
import {list, add, insert, listPaginatedLaureates} from "../controllers/main_controller.js";

let router = express.Router();
//localhost:3000/users/
router.get("/", (req, res) => {
    res.render("partials/header.hbs");
})
router.get("/laureates", listPaginatedLaureates);
//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router;