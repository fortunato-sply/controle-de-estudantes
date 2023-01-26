const { getAge } = require('../../public/getAge');
const classroom = require('../model/classroom');
const student = require('../model/student');

module.exports = {
    async pagInicialGet (req, res) {
        const rooms = await classroom.findAll({
            raw: true,
            attributes: ['IDClassroom', 'Name', 'Capacity']
        });

        isAble = [];
        for(var room of rooms){
            const studentCount = await student.count({
                where: { IDClassroom: room.IDClassroom }
            });

            if(studentCount >= room.Capacity)
                isAble.push('disabled');
            else
                isAble.push('');
        }

        res.render('../views/index', {rooms, isAble, students: '', idclassroom: '', room: { Name: 'Select a Classroom', Capacity: 0 }, count: 0, error: false});
    },

    async pagInicialPost (req, res) {
        const idclassroom = req.body.IDClassroom;
        
        const rooms = await classroom.findAll({ raw: true, attributes: ['IDClassroom', 'Name', 'Capacity'] });

        if(idclassroom == '')
            res.render('../views/index', {rooms, students: '', idclassroom: '', room: { Name: 'Select a Classroom', Capacity: 0 }, count: 0, error: false});

        const room = await classroom.findByPk(idclassroom, {
            raw: true,
            attributes: ['Name', 'Capacity']
        });

        const students = await student.findAll({
            raw: true,
            attributes: ['IDStudent', 'Name', 'Age', 'Picture'],
            where: { IDClassroom: idclassroom }
        });

        students.map(s => {
            s.Age = getAge(s.Age);
        })

        const count = await student.count({
            where: { IDClassroom: idclassroom }
        });

        res.render('../views/index', {rooms, students, idclassroom, room, count, error: false})
    }
}