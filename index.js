// const http = require('http');
// // let a =()=>{

// // }

// //http.createServer(function(req,res){
// http.createServer((req,res)=>{
//     res.write('<h1> Welcome to my class </h1>');
//     res.end();
// }).listen(8080);

//Imports
const express = require('express');
const morgan = require('morgan');

//APP Initialization
const app = express();

//First Route

app.get('/', (req,res)=>{
    res.json({message: "Welcome to the World!"})
});

app.listen('8080');