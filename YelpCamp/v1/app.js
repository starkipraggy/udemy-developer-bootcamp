var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  { name: "Salmon Creek", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c72277bdd954bc55b_340.jpg" },
  { name: "Granite Hill", image: "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c72277bdd954bc55b_340.jpg" },
  { name: "Mountain Goat's Rest", image: "https://pixabay.com/get/52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c72277bdd954bc55b_340.png" },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds",  {campgrounds});
});

app.post("/campgrounds", (req, res) => {
  var newCampground = req.body;
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => console.log("YelpCamp running on port " + port));