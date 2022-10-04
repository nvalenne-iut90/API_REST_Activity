import express from "express";
import {listCategories} from "../controllers/prizes_controller.js";

let router_prizes = express.Router();

router_prizes.get("/", listCategories);

//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_prizes;