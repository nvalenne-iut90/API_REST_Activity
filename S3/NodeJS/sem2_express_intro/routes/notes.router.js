const notesController = require('../controllers/notes.controller')
const express = require('express')
let router = express.Router();

//localhost://3000/notes/add
router.post("/add", notesController.add);
//localhost://3000/notes/
router.get("/", notesController.liste);
//localhost://3000/notes/delete/:tite
//router.delete("/delete/:title", notesController.delete)
//localhost://3000/notes/:tite
//router.get("/notes/:title", notesController.note);

module.exports = router;