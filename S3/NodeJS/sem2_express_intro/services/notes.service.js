const fs = require('fs')
const chalk = require('chalk')

const ajouterNote = (title, body, callback) => {
    const notes = lireNotes()
    const duplicateNote = notes.find((note) => note.title === data.title)

    if (!duplicateNote) {
        notes.push({
            title: data.title,
            body: data.body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Nouvelle note ajoutée!'))
        return callback(null, "Nouvelle note ajoutée !")
    } else {
        console.log(chalk.red.inverse('Titre de la note pris!'))
        return callback("Titre de la note pris !")
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const lireNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listerNotes = (callback) => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        console.log(JSON.parse(dataJSON));
        return callback(null, JSON.parse(dataJSON));
    } catch (e) {
        console.log("error")
        return callback("Error");
    }
}

module.exports = {
    ajouterNote : ajouterNote,
    listerNotes : listerNotes
}