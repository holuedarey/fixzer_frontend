
const express = require('express');
const path = require('path');
// require('dotenv').config();

// Constants
const PORT =  4300;

// App
const app = express();

// app.use(express.static('dist/dist'));
app.use(express.static('dist/Vien-Angular'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist/Vien-Angular/index.html'));
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);




