const models = require('../models')

module.exports = app =>{
    app.get('/recipes', (req, res) =>{
        models
            .Recipe
            .findAll({
                include : [models.Cook, models.Feedback]
            })
            .then(recipes => res.json(recipes))
    })

    app.post('/recipes', (req, res) => {
        models
            .Recipe
            .create({
                name : 'Ratatouille',
                description : 'simmered vegetables',
                CookId : 1
            })
            .then(recipes => res.json(recipes))
    })

}