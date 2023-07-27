const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = process.env.PORT || 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

// --------------------- LISTEN ---------------------
app.listen(puerto, () => {
    console.log('Aplicación escuchando en puerto 3001');
});


// --------------------- GETS ---------------------
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/views/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});


// --------------------- POSTS ---------------------
app.post('/views/register.html', (req, res) => {
    // res.send('post de register');
});

app.post('/views/login.html', (req,res) => {
    // res.send("post de login");
    // res.redirect('/');
});