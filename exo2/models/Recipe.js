'use-strict'

const models = require('../models')

module.exports = (sequelize, Datatypes) =>{
    const Recipe = sequelize.define('Recipe', {
        name : {
            type : Datatypes.STRING
        },
        description : {
            type : Datatypes.TEXT
        }
    }, {})

    Recipe.associate = models =>{
        Recipe.belongsTo(models.Cook)
        Recipe.hasMany(models.Feedback)

    }

    return Recipe
    
}