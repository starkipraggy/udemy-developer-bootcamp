var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3001;
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
  res.render("love", { thing: req.params.thing });
});

app.get("/posts", (req, res) => {
  var posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My adorable pet bunny", author: "Charlie" },
    { title: "Can you believe this pomsky?", author: "Colt" }
  ];

  res.render("posts", {posts});
})

app.get("/friends", (req, res) => {
  res.render("friends", {friends});
});

app.post("/addfriend", (req, res) => {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
})

app.listen(port, () => console.log("Now listening on port " + port));