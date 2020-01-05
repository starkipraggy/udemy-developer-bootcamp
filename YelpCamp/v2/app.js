var express = require("express"),
   app = express(),
   bodyParser = require("body-parser"),
   mongoose = require("mongoose"),
   port = 3000;

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser:true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({ 
//   name: "Granite Hill", 
//   image: "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c72277bdd954bc55b_340.jpg",
//   description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!" 
// }, (err, newCamp) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newCamp);
//   }
// });

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
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      res.render("show", { campground: foundCampground });
    }
  })
});

app.listen(port, () => console.log("YelpCamp running on port " + port));