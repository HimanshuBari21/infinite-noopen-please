const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
require('dotenv').config;
const { Schema } = mongoose;
const bodyParser = require("body-parser")

const app = express();
const open = require('open');

app.use(cors())

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Himanshu21:Qwaszx%40123@cluster0.66ymbkc.mongodb.net/test]");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose Database connected successfully");
})

// Users Sceme
const Users = mongoose.model('Users', {
    username: String,
    email: String,
    pnumber: Number,
    password: String
});

app.get('/', (req, res) => {
    open("https://www.google.com/search?q=Honey");
})

app.post('/create', (req, res) => {
    const userData = req.body
    Users({
        username: userData.username,
        email: userData.email,
        pnumber: userData.number,
        password: userData.password,
        time: Date()
    }).save().then(() => console.log('User Inserted - ' + userData.username));
    res.sendStatus(200)
});
app.get('/about', (req, res) => {
    res.send("this repo about here")
})
app.listen(PORT, (err) => {
    err ? console.log(err.message) : console.log("http://localhost:" + PORT);
})
