import express from "express";
import {countLaureatesByCategories, countPrizesForEachPerson, listAllCategories, listAllYearsWhereNotPrizes} from "../controllers/prizes_controller.js";

let router_prizes = express.Router();

/**
 * @swagger
 * /prizes/nb-prizes-per-person:
 *  get:
 *      summary: F5
 *      description : Returns laureates and their number of prizes gained
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_prizes.get("/nb-prizes-per-person", countPrizesForEachPerson);       //F5

/**
 * @swagger
 * /prizes/list-categories:
 *  get:
 *      summary: F6
 *      description : Returns all categories of Nobel prizes
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_prizes.get("/list-categories", listAllCategories);              //F6

/**
 * @swagger
 * /prizes/nb-laureates-per-category:
 *  get:
 *      summary: F7
 *      description : Returns number of laureates depending on each category
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_prizes.get("/nb-laureates-per-category", countLaureatesByCategories);     //F7

/**
 * @swagger
 * /prizes/year-where-not-prizes:
 *  get:
 *      summary: F10
 *      description : Returns years which none prizes has been delivered
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_prizes.get("/year-where-not-prizes", listAllYearsWhereNotPrizes);        //F10

//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_prizes;