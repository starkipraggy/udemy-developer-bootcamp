var express = require("express"),
   app = express(),
   bodyParser = require("body-parser"),
   mongoose = require("mongoose"),
   port = 3000,
   Campground = require("./models/campground"),
   seedDB = require("./seeds");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", { useNewUrlParser:true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

seedDB();

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index",  { campgrounds });
    }
  });
});

app.post("/campgrounds", (req, res) => {
  var newCampground = req.body;
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
  Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      console.log(foundCampground);
      res.render("show", { campground: foundCampground });
    }
  })
});

app.listen(port, () => console.log("YelpCamp running on port " + port));