import { Router } from "express";
import {addContentT2, showContentT1, showContentT2} from "../controllers/views_controller.js";

let router_views = Router();

router_views.get("/view1", showContentT1);
router_views.post("/view1",(req,res)=>{
    res.redirect("/views/view1?categorie="+req.body.categorie)
})
router_views.get("/view2", showContentT2);
router_views.post("/view2", addContentT2)
export default router_views;