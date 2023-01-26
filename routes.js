// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const edit = require('./src/controllers/edit')
const editClassroom = require('./src/controllers/editClassroom');

// Multer
const multer = require("multer");
const config = require('./src/config/multer');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.post('/insertStudent/', multer(config).single('foto'), cadastro.insertStudent);

route.get('/editStudent/:id', edit.students);
route.post('/editStudent/:id', multer(config).single('attfoto'), edit.update);

route.get('/editClassroom/:id', editClassroom.classroom);
route.post('/editClassroom/:id', editClassroom.update);

route.post('/insertClassroom/', cadastro.insertClassroom);
route.get('/editClassroom/', home.pagInicialGet);

route.post('/deleteStudent/:id', edit.delete);
route.post('/deleteClassroom/:id', editClassroom.delete);

module.exports = route;