const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req,res) => {
    res.render("index");
});


//dynamic routing 
app.get("/profile/:username", (req,res) => {
    res.send(req.params.username);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
