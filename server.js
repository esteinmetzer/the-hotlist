    let express = require("express");
    let path = require("path");


    let app = express();
    var PORT = process.env.PORT || 7567;

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    let reservations = [];

    let waitlist = [];


    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/reserve", function(req,res){
        res.sendFile(path.join(__dirname, "reserve.html"))
    });

    app.get("/api/tables", function(req,res){
        res.sendFile(path.join(__dirname, "tables.html"))
    });

    app.post("/api/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newReservation = req.body;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
      
        if (reservations.length < 5){

        reservations.push(newReservation);
        }

        else {
            waitlist.push(newReservation)
        }
        
        res.json(newReservation);

        console.log(reservations.length);
        console.log("-------------");
        console.log(waitlist.length);
      });

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });