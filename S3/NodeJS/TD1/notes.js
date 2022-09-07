const fs = require('fs');
const chalk = require('chalk');

const ajouterNote = (title, body) => {
    // vérifier si la note existe
    // lire toutes les notes
    const notes = lireNotes();
    const duplicate = notes.find(
        (note) => note.title === title
    );
    if (!duplicate){
        notes.push({
            title : title,
            body : body
        });
        // sauvegarder avec le fichier notes.json
        saveNote(notes);
        console.log(chark.green(
            "Sauvegarde effectué !"
        ))
    } else {
        console.log(chark.red(
            "Erreur de sauvegarde"
        ))
    }

}

const saveNote = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync("notes.json", data)
}

const lireNotes = () => {
    try {
        const dataJSON = fs.readFileSync("notes.json").toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}