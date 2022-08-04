//require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const mongoData = process.env.DATABASE_URL;
mongoose.connect("mongodb+srv://dulanjan:dulanjan@cluster0.vhrlmqg.mongodb.net/contactForm")
const database = mongoose.connection;
const port = 8080;

const app = express();


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}));



app.get('/Contact', function(req, res) {
    res.sendFile(__dirname + '/views/contactus.html')
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/Portfolio', function(req, res) {
    res.sendFile(__dirname + '/views/Portfolio.html')
})
app.get('/About', function(req, res) {
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/Services', function(req, res) {
    res.sendFile(__dirname + '/views/services.html')
})


database.on('error', (error) => {
   console.log(error)
})

database.once('connected', () => {
    console.log('database connected')
})

app.use(express.json())

const routes = require('./routes/routes')

app.use('/', routes)



app.listen(port, function() {
    console.log(`server started at ${port}`)
})

