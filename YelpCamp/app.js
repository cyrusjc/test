
// initializing Express
var express = require("express");
var app = express();
// bodyParser for requests since they come back in string file.
var bodyParser = require("body-parser");

// ===========initilizing mongoose for db accessing==============
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_app",{useNewUrlParser:true})

var campSchema = new mongoose.Schema({
   name: String,
   image: String
});

// THIS IS OUR MODEL SUCH THAT WE CAN USE .camps.
var Camp = mongoose.model("Camp", campSchema);

// ==================================================================
// ENABLES US TO USE STATIC 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// .ejs default

app.set("view engine", "ejs");

// ==================== ROUTING ===========================

//======HOME PAGE=======
app.get("/", function(req,res){
    res.render("landing")
});
//======CAMPGROUND FORM ====
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs") 
});


app.get("/campgrounds",function(req,res){
    Camp.find({}, function(err,campgrounds){
        if (err){
            console.log(err)
        } else {
       res.render("campgrounds", {campgrounds:campgrounds}) 
        }
    });
    
    
});

app.post("/campgrounds",function(req,res){

    var name = req.body.name;
    var image = req.body.image;
    var newCampground ={name: name, image:image};
    
   Camp.create(newCampground, function(err,Created){
       if(err){
            console.log(err)
       } else{
            res.redirect("/campgrounds");
       }
   })
});



//starting server
app.listen(8080,function(){
    console.log("YelpCamp has started!");
})