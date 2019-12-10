'use-strict'

const models = require('../models')

module.exports = (sequelize, Datatypes) =>{
    const Cook = sequelize.define('Cook', {
        name : {
            type : Datatypes.STRING
        },
        email : {
            type : Datatypes.STRING
        },
        type : {
            type : Datatypes.STRING
        }
    }, {})

    return Cook
    
}