// const fs = require('node:fs');

// fs.appendFile("hi.txt" , " I'm good ", function(err){
//     if( err )console.log(err);
//     else console.log("done");
// })

const http = require('http');
const server = http.createServer(function(req, res){
    res.end("hellow world");

})

server.listen(3000);
