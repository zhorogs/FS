const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect('mongodb+srv://zgslavchev:dGJ5Ihk9EIi9sNdN@cluster0.2jj9g8e.mongodb.net/');

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.listen(3001, () => {
    console.log('Server runs!');
});

