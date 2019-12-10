'use-strict'

const models = require('../models')


module.exports = (sequelize, Datatypes) =>{
    const Car = sequelize.define('Car', {
        name : {
            type : Datatypes.STRING,
        },
        brand : {
            type : Datatypes.STRING
        },
        age : {
            type : Datatypes.INTEGER
        },
        color : {
            type : Datatypes.STRING
        },
        eco :{
            type : Datatypes.BOOLEAN
        }
    }, {})

    Car.associate = models =>{
        Car.belongsToMany(models.Owner, {through : 'car_owner', timestamps: false})
    }

    return Car

}