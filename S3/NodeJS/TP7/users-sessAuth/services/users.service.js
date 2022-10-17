const fs = require('fs')
const bcrypt = require("bcrypt")
/*
    bcrypt.hash("elon123", 10, function(err, hash) {
        // stocker le hachage dans la base de données
        console.log(hash);
    });
 */

const authenticate = (data,callback) => {
    let users = loadUsers()
    users = users.users;
    const user = users.find((u) => u.username.toLowerCase() === data.username.toLowerCase())
    if (user) {
        //TODO COMPARE PASSWORDS
        bcrypt.compare(data.password,user.password, (err, results) => {
            if (results){
                console.log("valid login");
                return callback(null, user.username);
            }
            console.log("Wrong password");
            return callback("Votre mot de passe est incorrect !");
        })
    } else {
        console.log('User introuvable!')
        return callback('User introuvable!');
    }
}



const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    authenticate: authenticate,
}