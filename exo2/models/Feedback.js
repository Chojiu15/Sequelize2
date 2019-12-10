'use-strict'

const models = require('../models')

module.exports = (sequelize, Datatypes) =>{
    const Feedback = sequelize.define('Feedback', {
        comments : {
            type : Datatypes.TEXT
        }
    }, {})

    return Feedback
    
}