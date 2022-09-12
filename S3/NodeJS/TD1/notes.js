const fs = require("fs");
const chalk = require("chalk");

const ajouterNote = (title, body) => {
    //verifier si la note existe
    //lire toutes les notes
    const notes = lireNotes();
    const duplicate = notes.find((note) => note.title === title)
    if (!duplicate){
        notes.push({title:title, body:body});
        //sauvegarder dans le fichier notes.json
        saveNote(notes);
        console.log(chalk.green("Opération réussi !!"))
    }else {
        console.log(chalk.red("Duplicate !"))
    }
    
}

const lireNotes = () => {
    try{
        const data = fs.readFileSync("notes.json");
        const dataJSON = data.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const saveNote = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync("notes.json", data);
}

module.exports = {
    ajouterNote: ajouterNote
}