var request = require("request");
var express = require("express");
var app = express();
var port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  var query = req.query.search;
  var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      var results = JSON.parse(body);
      console.log(results)
      res.render("results", { results });
    }
  })
});

app.listen(port, () => {
  console.log("Movie App started at port " + port);
});