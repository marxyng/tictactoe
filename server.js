
const express = require("express");
const bodyParser = require("body-parser");



const app = express();

//set port
var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));



//routes
app.get("/", function(req, res){
    res.send("index.html");
});

app.post("/", function(req, res){
    console.log(req.body.num1);
    res.send("Thanks for sending");
    
});

app.listen(port, () =>{
    console.log("app running")
    
});