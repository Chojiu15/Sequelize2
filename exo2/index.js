const express = require('express')
const app = express()
const models = require('./models')


require('./routes/cook')(app)
require('./routes/recipe')(app)
require('./routes/feedback')(app)



models
    .sequelize
    .sync({force : true})
    .then(() => {
        app.listen(3000, console.log('Server running'))
    })