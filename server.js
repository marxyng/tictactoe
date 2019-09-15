const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

//set port
var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));





app.listen(port, () =>{
    console.log("app running")
});

