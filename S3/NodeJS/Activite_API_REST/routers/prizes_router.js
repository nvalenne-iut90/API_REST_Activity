import express from "express";
import {showContent} from "../controllers/prizes_controller.js";

let router_prizes = express.Router();

//router_prizes.get("/", listCategories);
router_prizes.get("/", showContent);

//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_prizes;