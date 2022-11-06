import fetch from "node-fetch";

export const showContentT1 = async (req, res) => {
    let content = {}
    let category = req.query.categorie;
    const categories = await fetch(`http://localhost:3000/prizes/list-categories`)
    content["categories"] = await categories.json()
    const laureates = await fetch(`http://localhost:3000/laureates/filter?category=${category}`)
    content["laureates"] = await laureates.json()
    //console.log(content);

    res.render("view1.hbs", content);
}

export const showContentT2 = async (req, res) => {
    let category = req.query.categorie;
    const content = await fetch(`http://localhost:3000/prizes/list-categories`)
    let categories = await content.json()
    res.render("view2.hbs", {categories});
    
}

export const addContentT2 = async (req, res) => {
    let category = req.body.categorie, year = req.body.year
        , firstname = req.body.firstname, surname = req.body.surname, motivation = req.body.motivation;
    await fetch(`http://localhost:3000/laureates/new?year=${year}&category=${category}&firstname=${firstname}&surname=${surname}&motivation=${motivation}`, {
        method : 'POST'
    })
    .then(res.redirect("/views/view2"))
    .then(console.log("The laureate has been added !"))
    
}