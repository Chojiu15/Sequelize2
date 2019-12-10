const models = require('../models')

module.exports = app =>{
    app.get('/owners', (req,res) =>{
        models
            .Owner
            .findAll()
            .then(owners => res.json(owners))
    })

    app.post('/owners', (req, res) =>{
        models
            .Owner
            .create(req.body)
            .then(owners => res.json(owners))
    })
}