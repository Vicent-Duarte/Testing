const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('cities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = City;