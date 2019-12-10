const models = require('../models')
const Data = require('../data')


module.exports = app =>{
    app.get('/cooks', (req, res) =>{
        models
            .Cook
            .findAll()
            .then(cooks => res.json(cooks))
    })

    app.post('/cooks' ,(req, res) =>{
        models
            .Cook
            .bulkCreate(Data)
            .then(cooks => res.json(cooks))
    })
}