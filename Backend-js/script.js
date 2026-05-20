const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

app.get("/propile", function(req, res,){
    res.send("propile is here");
})

app.get("/about", function(req, res) {
    res.send("about page chala");
});



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(3000);