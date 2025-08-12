// const fs = require('node:fs');

// fs.appendFile("hi.txt" , " I'm good ", function(err){
//     if( err )console.log(err);
//     else console.log("done");
// })


 // http and server

// const http = require('http');
// const server = http.createServer(function(req, res){
//     res.end("hellow world");

// })

// server.listen(3000);




//express js concepts 

import express from 'express'

const app = express();

app.use((req, res , next) => {
    console.log("middleware 1");
    next();

})


app.get('/', (req, res) => {
  res.send('Hello Dost ')
})

app.listen(3000);
