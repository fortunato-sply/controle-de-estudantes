const classroom = require('../model/classroom');
const student = require('../model/student');
const fs = require('fs');

module.exports = {
    async students(req, res){
        const id = req.params.id;

        const students = await student.findByPk(id, {
            raw: true,
            attributes: ['IDStudent', 'Name', 'Age', 'Sex', 'Picture', 'IDClassroom']
        });

        const idclassroom = students.IDClassroom;

        const rooms = await classroom.findAll({ raw: true, attributes: ['IDClassroom', 'Name'] });

        res.render('../views/edit', {rooms, students, idclassroom})
    },

    async update(req, res){
        const data = req.body;
        const id = req.params.id;

        await student.update({
            Name: data.attname,
            Age: data.attage,
            Sex: data.attsex,
            IDClassroom: data.attclassroom
        },
        {
            where: { IDStudent: id }
        });
        
        if(req.file) {
            const oldImg = await student.findAll({
                raw: true,
                attributes: ['Picture'],
                where: { IDStudent: id }
            });

            if (oldImg[0].Picture != 'user.png')
                fs.unlink(`public/img/${oldImg[0].Picture}`, 
                    ( err => { if(err) console.log(err); } )
                );

            await student.update(
                { Picture: req.file.filename },
                { where: { IDStudent: id } }
            );
        }

        res.redirect('/');
    },

    async delete(req, res){
        const id = req.params.id;
        if(Number.isNaN(id)) return res.status(400).end();

        await student.destroy({ where: {IDStudent: id} });
        res.redirect('/');
    }
}