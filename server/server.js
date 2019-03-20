var app=require("express")();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

var service=require("./service");


app.use(service);

app.listen(3000,function(){
    console.log("listening to 3000!");
    
});