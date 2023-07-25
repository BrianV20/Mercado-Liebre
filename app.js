const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = 3001;

//const publicPath = path.resolve(__dirname, './public');
//app.use(express.static(publicPath));

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

// --------------------- LISTEN ---------------------
app.listen(puerto, () => {
    console.log('Aplicación esuchando en puerto 3001');
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
    res.send('post de register');
});

app.post('/views/login.html', (req,res) => {
    res.send("post de login"); 
});