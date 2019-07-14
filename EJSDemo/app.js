var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var friends = ["bob", "swag"];

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home.ejs", {friends: friends})
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