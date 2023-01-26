const classroom = require('../model/classroom');

module.exports = {
    async classroom(req, res){
        const id = req.params.id;

        const room = await classroom.findByPk(id, {
            raw: true,
            attributes: ['IDClassroom', 'Name', 'Capacity']
        });

        res.render('../views/editclassroom', {room});
    },

    async update(req, res){
        const data = req.body;
        const id = req.params.id;

        await classroom.update({
            Name: data.cname,
            Capacity: data.capacity,
        },
        {
            where: { IDClassroom: id }
        });
        
        res.redirect('/');
    },

    async delete(req, res){
        const id = req.params.id;
        if(Number.isNaN(id)) return res.status(400).end();

        await classroom.destroy({ where: {IDClassroom: id} });
        res.redirect('/');
    }
}