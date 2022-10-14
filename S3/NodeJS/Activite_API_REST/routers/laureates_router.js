import express from "express";
import {listPaginatedLaureates, showLaureateFromID} from "../controllers/laureates_controller.js";

let router_laureates = express.Router();

/**
 * @swagger
 * /laureates?page={page}:
 *  get:
 *      summary: F1
 *      description : Show Paginated Laureates (the first ten laureates)
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: path
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
router_laureates.get("/", listPaginatedLaureates);      // F1

/**
 * @swagger
 * /laureates/{id}:
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
router_laureates.get("/:id", showLaureateFromID);   // F2


//router.get("/add", add);
//router.post("/add", validatePrize,insert);
export default router_laureates;