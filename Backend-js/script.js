const express = require('express')
const app = express();


app.use(function(req, res,next){
    console.log("middleware is running ");
    next();
});

app.use(function(req, res,next){
    console.log("middleware is running again one time ");
    next();
});


app.get("/", function(req, res){
    res.send("champions boy shivanand");
});

app.get("/about", function(req, res) {
    res.send("about page chala");
});

app.get("/propile", function(req, res, next ){console
    return next(new Error("not found"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(3000);