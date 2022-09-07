const{title,add,sub} = require("./myModule");
const chalk = require('chalk');
const yargs = require('yargs')

console.log(chalk.red(title));
console.log(add(1,1));
console.log(sub(4,2));

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
        // TO DO
    }
});


yargs.parse();

