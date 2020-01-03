var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req, res) {
  res.send("Hi there!");
});

app.get("/dog", function(req, res) {
  res.send("meow!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!!"); 
});

app.get("/r/:subredditName", function(req, res){
  res.send("WELCOME TO " + req.params.subredditName.toUpperCase()); 
});

var animalData = {
  pig: "Oink!",
  cow: "Moo!",
  dog: "Woof Woof!"
}

app.get("/speak/:animalName", (req, res) => {
  var sound = animalData[req.params.animalName.toLowerCase];
  res.send(`The ${req.params.animalName} says '${animalData[req.params.animalName]}'`);
});

app.get("/repeat/:repeatString/:times", (req, res) => {
  var output = [];
  for (var i = 0; i < req.params.times; i++) {
    output.push(req.params.repeatString);
  }
  res.send(output.join(" "));
});

app.get("/*", function(req, res){
  res.send("Sorry, page not found... what are you doing with your life?"); 
});

app.listen(port, () => { console.log("Now serving on port " + port) });