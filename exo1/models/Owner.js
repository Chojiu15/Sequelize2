'use-strict'

const models = require('../models')


module.exports = (sequelize, Datatypes) =>{
    const Owner = sequelize.define('Owner', {
        first_name : {
            type : Datatypes.STRING,
        },
        last_name : {
            type : Datatypes.STRING
        },
        age : {
            type : Datatypes.INTEGER
        }
    }, {
        underscored : true,
        
    })

    return Owner

}