// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express app to handle data parsing
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// var PORT=

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

var tables = [
    {
      name: "yoda",
      phone: 1252421,
      email: "yoda@none.com",
      id: "somestuff"
    },
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/404", function(req, res) {
    res.sendFile(path.join(__dirname, "404.html"));
});

app.get("/api/clear", function(req, res) {
    tables=[];
    return res.json(tables);
});

app.post("/api/tables", function(req, res) {
    var newres = req.body;
    console.log(newres);
    tables.push(newres);
    res.json(newres);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});