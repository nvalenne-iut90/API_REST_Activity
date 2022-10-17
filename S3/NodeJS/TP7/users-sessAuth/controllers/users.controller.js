const usersService = require("../services/users.service");

exports.home = (req,res) => {
    let session = req.session;
    if (session.username) {
        req.flash("success", `Welcome ${session.username}`);
        res.render("home");
    } else {
        res.redirect("/users/login");
    }
    
}

exports.login = (req, res) => {
    let session = req.session;
    console.log(session);
    if (session.username){
        res.locals.flashMesssages.success = `Welcome ${session.username} !`;
        res.redirect("/users");
    
    } else {
        res.render("login");
    }
}

exports.authentificateUser = (req,res,next) => {
    let data = {
        username: req.body.user,
        password: req.body.password
    }
    usersService.authenticate(data, (error, results) => {
        if (error){
            req.flash("Error", error);
            res.locals.redirect = "/users/login";
        }
        req.flash("success", `Welcome ${results}`);
        req.session.username = data.username;
        console.log(req.session)
        res.locals.redirect = "/users"
        next();
    })

}

exports.redirectView = (req, res) => {
    let redirectPath = res.locals.redirect;
    res.redirect(redirectPath);
}



