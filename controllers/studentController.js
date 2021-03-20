const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const router = express.Router();

// body-parser
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// GET STUDENTS LIST
router.get('/students', async (req, res) => {


    let result = await fetch(
        "http://localhost:3000/students", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0])
            return res.render('./layouts/students/students.hbs', {
                student: data,
            })
        })
        .catch((err) => {
            console.log(err)
        });
});

// GET : Single Student 
router.get('/students/edit/:id', async (req, res) => {
    await fetch('http://localhost:3000/students/' + req.params.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return res.render('./layouts/students/edit.hbs', {
                student: data,
            })

        })
        .catch((err) => console.log(err));
})

// POST : Create Student
router.post('/students', async (req, res) => {
    console.log(req.body);
    await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return res.redirect('students');



        })
        .catch((err) => console.log(err));

})

//PUT : Update Student
router.post('/students/:id', async (req, res) => {
    console.log(req.params.id);

    await fetch('http://localhost:3000/students/' + req.params.id, {
        method: 'PUT',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

        })
        .catch((err) => console.log(err));
    return res.redirect('http://localhost:8000/api/students');
});

// DELETE : Delete particular Student 
router.get('/students/delete/:id', (req, res) => {

    fetch('http://localhost:3000/students/' + req.params.id, {
        method: 'DELETE',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => console.log(json));

    return res.redirect('http://localhost:8000/api/students');

});

module.exports = router;


