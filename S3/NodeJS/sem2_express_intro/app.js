const yargs = require("yargs");
const axios = require("axios");
const chalk = require("chalk");



// Personnaliser la version de yargs
yargs.version('1.1.0')

// utilisation de YARGS
// CrÃ©er une commande d'ajout
yargs.command({
    command: 'ajouter',
    describe: 'Ajouter une nouvelle note',
    builder: {
        title: {
            describe: 'Titre de la note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Corps de la note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // TODO
    }
});

// CrÃ©er une commande de suppression
yargs.command({
    command: 'supprimer',
    describe: 'Supprimer une note',
    builder: {
        title: {
            describe: 'Titre de la note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // TO DO
    }
})

// CrÃ©er une commande pour lister toutes les notes
yargs.command({
    command: 'lister',
    describe: 'Listez vos notes',
    handler() {
        // TO DO
    }
})

// CrÃ©er une commande pour lire une note en utilisant son titre
yargs.command({
    command: 'lire',
    describe: 'Lire une note',
    builder: {
        title: {
            describe: 'Titre de la note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const data = {
            title : argv.title,
            body : argv.body
        };
        axios.post("http://localhost:3000/notes/", {
            headers: {
                Accept:"application/json"
            },
        }).then(({data}) => {
            console.log(chalk.blue(JSON.stringify(data)));
        }).catch((err) => {
            console.log(chalk.red(err.response.data));
        })
    }
});


yargs.parse();