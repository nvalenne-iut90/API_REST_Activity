const notesService = require('../services/notes.service');

// Requete POST
exports.add = (req, res) => {
    const data = {
        title : req.body.title,
        body : req.body.body
    };
    console.log(data);
    notesService.ajouterNote(data, (error, result) => {
        if (error) return res.status(400).send({sucess:0,data:error});
        console.log("sucess");
        return res.status(200).send({sucess:1,data:result})
    });
};
// GET
exports.liste = (req, res) => {
    notesService.listerNote( (error, result) => {
        if (error)
            return res.status(400).send({sucess:0,data:error});
        return res.status(200).send({sucess:1,data:result})
    })
};
// DELETE
/*
exports.delete = (req, res) => {
    const data = {
        title: req.params.title
    };
};
 */
