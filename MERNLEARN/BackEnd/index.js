const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb + srv://zgslavchev:dGJ5Ihk9EIi9sNdN@cluster0.2jj9g8e.mongodb.net/');

app.listen(3001, () => {
    console.log('Server runs!');
});

