var classModal = document.getElementById('class-modal');
var stdModal = document.getElementById('std-modal');
var main = document.getElementById('main');
var editModal = document.getElementById('edit-modal');

function openClassModal() {
    if(classModal.classList.contains('show')) {
        classModal.classList.remove('show');
        classModal.classList.add('hidden');
        main.classList.remove('blur');
    }
    else {
        classModal.classList.add('show');
        classModal.classList.remove('hidden');
        main.classList.add('blur');
    }

    if(stdModal.classList.contains('show')) {
        stdModal.classList.add('hidden');
        stdModal.classList.remove('show');
    }
}

function openStdModal() {
    if(stdModal.classList.contains('show')) {
        stdModal.classList.remove('show');
        stdModal.classList.add('hidden');
        main.classList.remove('blur');
    }
    else {
        stdModal.classList.add('show');
        stdModal.classList.remove('hidden');
        main.classList.add('blur');
    }

    if(classModal.classList.contains('show')) {
        classModal.classList.add('hidden');
        classModal.classList.remove('show');
    }
}

main.addEventListener("click", () => {
    if (classModal.classList.contains('show') || stdModal.classList.contains('show') || editModal.classList.contains('show')) {
        classModal.classList.remove('show')
        classModal.classList.add('hidden')
        stdModal.classList.remove('show')
        stdModal.classList.add('hidden')
        main.classList.remove('blur');
    }
});

let age = document.getElementById('age');
let btn = document.getElementById('submitbtn');

// let croom = document.getElementById('classroom');
// let croomId = 0;
// croom.addEventListener("change", () => {
//     ageValue = age.innerText;
//     croomId = croom.options[croom.selectedIndex].value;
//     const croom = classroom.findByPk(croomId, {
//         raw: true,
//         attributes: ['IDClassroom', 'MinAge', 'MaxAge']
//     })

//     console.log(ageValue);

// })

// const classroom = require('../model/classroom');
