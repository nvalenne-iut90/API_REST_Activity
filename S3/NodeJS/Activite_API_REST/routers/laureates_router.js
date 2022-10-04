import express from "express";
import {listPaginatedLaureates, showLaureateFromID} from "../controllers/laureates_controller.js";

let router_laureates = express.Router();

router_laureates.get("/", listPaginatedLaureates);
router_laureates.get("/:id", showLaureateFromID);

//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_laureates;