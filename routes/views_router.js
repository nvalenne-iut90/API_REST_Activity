import { Router } from "express";
import {showContent} from "../controllers/views_controller.js";

let router_views = Router();

router_views.get("/view1", showContent);
router_views.post("/view1",(req,res)=>{
    res.redirect("/views/view1?categorie="+req.body.categorie)
})
router_views.get("/view2");

export default router_views;