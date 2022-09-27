import express from "express";
import {list, add, insert} from "../controllers/users.controller.js";
import {validateUser} from "../middlewares/users.middleware.js";

var router = express.Router();
// localhost:3000/users/
router.get("/", list);
router.get("/add", add);
router.post("/add", validateUser,insert);
export default router;