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


//form handling
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send('Hello Dost ')
})
app.get('/profile', (req, res, next) => {
    return next(new Error("Oops! It's on our end"))
//   res.send('Profile shortlisted')
})

app.use((err , req , res, next)=>{
    console.log(err.stack)
    res.status(500).send("Something went wrong we will fix it")
})

app.listen(3000);
