import express from "express";
import {listPaginatedLaureates, showLaureateFromID, countLaureatesByCategories, countLaureatesForEachYear} from "../controllers/laureates_controller.js";

let router_laureates = express.Router();

/**
 * @swagger
 * /laureates:
 *  get:
 *      summary: F1
 *      description : Show Paginated Laureates (the first ten laureates)
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: query
 *            name: page
 *            type: integer
 *            description: page
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_laureates.get("/", listPaginatedLaureates);    // F1
/**
 * @swagger
 * /laureates/l/{id}:
 *  get:
 *      summary: F2
 *      description : Show the laureate depending on the id  (the first ten laureates)
 *      tags:
 *          - Laureates
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
router_laureates.get("/l/:id", showLaureateFromID);   // F2

/**
 * @swagger
 * /laureates/nb-laureates-per-category:
 *  get:
 *      summary: F7
 *      description : Returns number of laureates depending on each category
 *      tags:
 *          - Laureates
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
 router_laureates.get("/nb-laureates-per-category", countLaureatesByCategories);     //F7

/**
 * @swagger
 * /laureates/nb-laureates-per-year:
 *  get:
 *      summary: F8
 *      description : Returns number of laureates depending on each year
 *      tags:
 *          - Laureates
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
 router_laureates.get("/nb-laureates-per-year", countLaureatesForEachYear)          //F8

//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_laureates;