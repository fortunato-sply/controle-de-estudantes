const Sequelize = require('sequelize');
const db = require('../config/db');

const classroom = db.define('Classroom', {
    IDClassroom: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MinAge: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MaxAge: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = classroom;