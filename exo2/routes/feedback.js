const models = require('../models')

module.exports = app =>{
    app.get('/feedbacks', (req, res) =>{
        models
            .Feedback
            .findAll()
            .then(feedbacks => res.json(feedbacks))
    })

    app.post('/feedbacks', (req, res) =>{
        models
            .Feedback
            .create({
                comments : 'Its really good',
                RecipeId : 1
            })
            .then(feedbacks => res.json(feedbacks))
    })
}