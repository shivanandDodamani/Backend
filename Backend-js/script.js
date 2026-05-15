const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.send("champion boy shiva");
})

app.get("/propile", function(req, res){
    res.send("is he");
})

app.listen(3000);