const express = require('express')
const path = require('path');
const nodemailer = require('nodemailer')


const contactUs = document.querySelector('.contactus');
let name = document.getElimentById('name');
let email = document.getElimentById('email');
let message = document.getElimentById('message');


contactUs.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(XMLHttpRequestif(xhr.responseText == 'success')){
            alert('Email sent');
            name.value = '';
            email.value = '';
            message.value = '';
        } 
        else {
            alert('something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))
})