const classroom = require('../model/classroom');
const student = require('../model/student');
const { getAge } = require('../../public/getAge');

module.exports = {
    async classroom(req, res) {
        res.render('../views/index');
    },

    async insertClassroom(req, res) {
        const data = req.body;

        await classroom.create({
            Name: data.cname,
            Capacity: data.capacity,
            MinAge: data.minage,
            MaxAge: data.maxage
        });

        res.redirect('/');
    },

    async student(req, res) {
        const rooms = await classroom.findAll({
            raw: true,
            attributes: ['IDClassroom', 'Name', 'Capacity']
        });

        isAble = [];
        for (var room of rooms) {
            const studentCount = await student.count({
                where: { IDClassroom: room.IDClassroom }
            });

            if (studentCount >= room.Capacity)
                isAble.push('disabled');
            else
                isAble.push('');
        }

        res.render('../views/index', { rooms, isAble });
    },

    async insertStudent(req, res) {
        const data = req.body;

        let img = 'user.png';
        if (req.file)
            img = req.file.filename;

        const croom = await classroom.findByPk(data.classroom, {
            raw: true,
            attributes: ['IDClassroom', 'Name', 'MinAge', 'MaxAge']
        })

        const age = getAge(data.age);
        const minAge = croom.MinAge; const maxAge = croom.MaxAge;
        if(age >= minAge && age <= maxAge){
            await student.create({
                Name: data.name,
                Age: data.age,
                Sex: data.sex,
                Picture: img,
                IDClassroom: data.classroom
            });

            res.redirect('/');
        } 
        else {
            res.redirect('/');
            //res.render('../views/index', { error: true })
        }
    }
}