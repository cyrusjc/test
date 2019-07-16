 var campgrounds =[
            {name: "Swag1", image: "https://www.photosforclass.com/download/pixabay-4285605?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e2dd464c52a914f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=Mrexentric"},
            {name: "Swag2", image: "https://www.photosforclass.com/download/pixabay-4303359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=chanwity"},
            {name: "Swag3", image: "https://www.photosforclass.com/download/pixabay-4285605?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e2dd464c52a914f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=Mrexentric"},
            {name: "Swag4", image: "https://www.photosforclass.com/download/pixabay-4303359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=chanwity"},
            {name: "Swag5", image: "https://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=Free-Photos"},
            {name: "Swag6", image: "https://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732c79d5944cc158_960.jpg&user=Free-Photos"}
    ]

// initializing Express

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

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
   
    
    res.render("campgrounds", {campgrounds:campgrounds})
});

app.post("/campgrounds",function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground ={name: name, image:image};
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
    
});



//starting server
app.listen(8080,function(){
    console.log("YelpCamp has started!");
})