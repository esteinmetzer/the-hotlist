    let express = require("express");
    let path = require("path");


    let app = express();
    var PORT = process.env.PORT || 7567;

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());


    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/reserve", function(req,res){
        res.sendFile(path.join(__dirname, "reserve.html"))
    });

    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "tables.html"))
    });

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });