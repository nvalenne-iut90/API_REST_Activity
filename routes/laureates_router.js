import express from "express";
import {countLaureates, listPaginatedLaureates, showLaureateFromID, countLaureatesByCategories, sortLaureates, countLaureatesForEachYear, laureateFilter, deleteInFile, updateMotivation, newLaureate} from "../controllers/laureates_controller.js";

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
 *      description : Show the laureate depending on the id
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
 * /laureates/count:
 *  get:
 *      summary: F4
 *      description : Count number of laureates
 *      tags:
 *          - Laureates
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
 router_laureates.get("/count", countLaureates);    // F4

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

/**
 * @swagger
 * /laureates/sort-year:
 *  get:
 *      summary: F11
 *      description : Return a sorted list depending on number of laureates
 *      parameters:
 *          - in : query
 *            name: sorting
 *            schema:
 *              type : string
 *              enum : ['+laureates', '-laureates']
 *          
 *      tags:
 *          - Laureates
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
 router_laureates.get("/sort-year", sortLaureates)          //F11

 /**
 * @swagger
 * /laureates/filter:
 *  get:
 *      summary: F12
 *      description : Show the laureate depending of the filter
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: query
 *            name: firstname
 *            type: string
 *            description: Firstname of the laureate
 *            required: false
 *          - in: query
 *            name: surname
 *            type: string
 *            description: Surname of the laureate
 *            required: false
 *          - in: query
 *            name: category
 *            description: category of the laureate
 *            schema:
 *              type : string
 *              enum : ['chemistry', 'physics', 'peace', 'economics', 'medicine', 'literature']
 *            required: false
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
  router_laureates.get("/filter", laureateFilter);                                 // F12

 /**
 * @swagger
 * /laureates/delete:
 *  delete:
 *      summary: F13
 *      description : Delete the laureate depending of year, id, and category
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: query
 *            name: year
 *            type: integer
 *            description: Year of the prize
 *            required: true
 *          - in: query
 *            name: id
 *            type: integer
 *            description: ID of the laureate
 *            required: true
 *          - in: query
 *            name: category
 *            type: string
 *            description: category of the laureate
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
  router_laureates.delete("/delete", deleteInFile);                                 // F13

   /**
 * @swagger
 * /laureates/update-motivation:
 *  put:
 *      summary: F14
 *      description : Update the laureate's motivation depending of year, id, and category
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: query
 *            name: year
 *            type: integer
 *            description: Year of the prize
 *            required: true
 *          - in: query
 *            name: id
 *            type: integer
 *            description: ID of the laureate
 *            required: true
 *          - in: query
 *            name: category
 *            type: string
 *            description: category of the laureate
 *            required: true
 *          - in: query
 *            name: motivation
 *            type: string
 *            description: the new motivation
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
  router_laureates.put("/update-motivation", updateMotivation)        //F14

  /**
 * @swagger
 * /laureates/new:
 *  post:
 *      summary: F15
 *      description : Add a new laureate
 *      tags:
 *          - Laureates
 *      parameters:
 *          - in: query
 *            name: year
 *            type: integer
 *            description: Year of the prize
 *            required: true
 *          - in: query
 *            name: category
 *            schema:
 *              type : string
 *              enum : ['chemistry', 'physics', 'peace', 'economics', 'medicine', 'literature']
 *            description: category of the laureate
 *            required: true
 *          - in: query
 *            name: firstname
 *            type: string
 *            description: firstname of the laureate
 *            required: true
 *          - in: query
 *            name: surname
 *            type: string
 *            description: surname of the laureate
 *            required: true
 *          - in: query
 *            name: motivation
 *            type: string
 *            description: motivation of the laureate
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful result
 *          '400':
 *              description : Bad Request
 *
 */
router_laureates.post("/new", newLaureate)         //F15

export default router_laureates;