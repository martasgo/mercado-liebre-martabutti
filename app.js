const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

// ruta a /
app.get('/', function(req, res){
    res.sendFile(path.resolve('./views/home.html'));
});

// ruta para registro
app.get('/register', function(req, res){
    res.sendFile(path.resolve('./views/register.html'));
});

// ruta para login
app.get('/login', function(req, res){
    res.sendFile(path.resolve('./views/login.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));