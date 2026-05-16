const express = require('express')
const app = express();


app.use(function(req, res,next){
    console.log("middleware is running ");
    next();
})

app.use(function(req, res,next){
    console.log("middleware is running again one time ");
    next();
})


app.get("/", function(req, res){
    res.send("champions boy shivanand");
})

app.get("/about", function(req, res) {
    res.send("about page chala");
})

app.listen(3000);