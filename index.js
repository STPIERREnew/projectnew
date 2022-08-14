//require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const nodemailer = require('nodemailer')

//const mongoData = process.env.DATABASE_URL;
mongoose.connect("mongodb+srv://dulanjan:dulanjan@cluster0.vhrlmqg.mongodb.net/contactForm")
const database = mongoose.connection;
const port = process.env.PORT || 8080;

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
app.post('/', (req, res)=> {
    cosole.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'itservicenew100@gmail.com',
            pass: 'itservice1994'
        }
    })
    
    const mailOptions = {
        from: req.body.email,
        to: 'itservicenew100@gmail.com',
        subject:`message from ${req.body.email}: ${req.body.name}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptios, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
    
        }
    })
    
})

const routes = require('./routes/routes')

app.use('/api', routes)



database.on('error', (error) => {
   console.log(error)
})

database.once('connected', () => {
    console.log('database connected')
})

app.use(express.json())




app.listen(port, function() {
    console.log(`server started at ${port}`)
})

