const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('Server runs!');
});

mongoose.connect('mongodb+srv://zgslavchev:dGJ5Ihk9EIi9sNdN@cluster0.2jj9g8e.mongodb.net/');

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/getUsers', (req, res) => {
    UserModel.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error("Error while fetching users:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})



