const express = require('express')
const path = require('path');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')





//const contactUs = document.querySelector('.contactus');
///let name = document.getElimentById('name');
//let email = document.getElimentById('email');
//let message = document.getElimentById('message');

// View engine setup
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//app.get('/', (req, res) => {
 /// res.render('contactus');
//});

//app.post('/', (req, res) => {
  //const output = `
   // <p>You have a new contact request</p>
   // <h3>Contact Details</h3>
    ////<ul>  
      //<li>Name: ${req.body.name}</li>
    //  <li>Email: ${req.body.email}</li>
    //</ul>
    //<h3>Message</h3>
    //<p>${req.body.message}</p>
  //`;

  // create reusable transporter object using the default SMTP transport
  //let transporter = nodemailer.createTransport({
    //host: 'mail.YOURDOMAIN.com',
   // port: 587,
    //secure: false, // true for 465, false for other ports
    //auth: {
      //  user: 'YOUREMAIL', // generated ethereal user
      // pass: 'YOURPASSWORD'  // generated ethereal password
    //},
    //tls:{
//rejectUnauthorized:false
    //}
  //});

  
  // send mail with defined transport object
  //transporter.sendMail(mailOptions, (error, info) => {
      ///if (error) {
      //    return console.log(error);
      //}
     // console.log('Message sent: %s', info.messageId);   
     // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

     // res.render('contact', {msg:'Email has been sent'});
 // });
 // });

//app.listen(3000, () => console.log('Server started...'));








contactUs.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    
    //let xhr = new XMLHttpRequest();
   // xhr.open('POST', '/');
    //xhr.setRequestHeader('content-type', 'application/json')
   // xhr.onload = function(){
       // console.log(XMLHttpRequestif(xhr.responseText == 'success')){
           // alert('Email sent');
           // name.value = '';
           // email.value = '';
           // message.value = '';
       // } 
       // else {
        //    alert('something went wrong!')
       // }
   // }
   // xhr.send(JSON.stringify(formData))
})