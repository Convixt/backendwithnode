const fs = require('node:fs');

fs.appendFile("hi.txt" , " I'm good ", function(err){
    if( err )console.log(err);
    else console.log("done");
})
