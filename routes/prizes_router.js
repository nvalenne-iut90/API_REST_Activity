import { Router } from "express";
import {countPrizes, countPrizesForEachPerson, listAllCategories, listAllYearsWhereNotPrizes, ListPrizesFromLaureateID} from "../controllers/prizes_controller.js";

let router_prizes = Router();

/**
 * @swagger
 * /prizes/nb-prizes:
 *  get:
 *      summary: F3
 *      description : Count number of prizes gained
 *      tags:
 *          - Prizes
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
 router_prizes.get("/nb-prizes", countPrizes);       //F3

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
 * /prizes/prizes-from-id/{id}:
 *  get:
 *      summary: F9
 *      description : Returns prizes for a laureate given
 *      tags:
 *          - Prizes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: ID of the laureate
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_prizes.get("/prizes-from-id/:id", ListPrizesFromLaureateID);             //F9

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


export default router_prizes;