const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CoffeeShop extends Model { }

CoffeeShop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        price_range: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['$', '$$', '$$$', '$$$$']] // only allow these values
            }
        },
        drinks: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        food: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false
        },
        longitude: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'coffeeshop'
    }

);

module.exports = CoffeeShop;