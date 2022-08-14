const express = require('express');
const form = require('../models/ContactFormResponse.js')
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')

router.post('/Contact', async (req, res) => {
    const data = new form({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
       // return res.redirect( '/Contact');
        
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

    //newform.save();
       
})
//router.get("/contact", (req, res) => {
    //res.send("getting all")
//})

//get by api
router.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactus.html' ));
});

//post api
//router.post('/post', (req, res) => {
    //res.send('Getting all the data')
//})

//put api
router.put('/put', (req, res) => {
    res.send('put method')
})

//delete api
router.delete('/delete', (req, res) => {
    res.send('delete method')
})

//router.post('/contact', function(req, res) {
//    console.log(req.body.name, req.body.email, req.body.message);
//    let newform = new form({
//        name: req.body.name,
 //       email: req.body.email,
//        message: req.body.message
 //   })
 //   newform.save();
 //   return res.redirect('contactus.html');
//});

module.exports = router;
