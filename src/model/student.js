const Sequelize = require('sequelize');
const db = require('../config/db');

const student = db.define('Student', {
    IDStudent: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Age: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Sex: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Picture: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

const classroom = require('../model/classroom');
student.belongsTo(classroom, {
    constraint: true,
    foreignKey: 'IDClassroom'
})

module.exports = student;

