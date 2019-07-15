var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var request = require('request');



var friends = ["bob", "swag"];

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set("view engine", "ejs");

//HOME PAGE
app.get("/", function(req,res){
    res.render("home.ejs", {friends: friends})
})

//APIS REQUESTING STUFF
app.get("/req", function(req,res){
    // THIS IS THE INPUT FROM THE FORM TAKEN FROM HOMEPAGE NAMED SEARCH
    var querySearch = req.query.search;
    // CAN CONCATENATE URL FOR SEARCHING
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + querySearch;
    request(url, function(error, response, body){
        if(error){
            console.log("Something went wrong!");
            console.log(error);
        } else {
            if(response.statusCode ==200){
                var results =JSON.parse(body)
                console.log(typeof body);
                res.render("results.ejs",{results:results})
            }
        }
    });
})

app.post("/addfriend", function(req,res){
//PUSHING THE POST REQUEST INTO THE ARRAY!
   friends.push(req.body.newfriend);
   res.redirect("/");
});

app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing
    res.render("love.ejs",{thingVar: thing});
})

app.listen(8080,function(){
    console.log("ITS ON BABY");
})