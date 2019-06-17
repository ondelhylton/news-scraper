var express = require("express");
var exphbs  = require('express-handlebars');
var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

var PORT = process.env.PORT || 3000;
var app = express();

 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var routes = require("./routes");
app.use(routes);

// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


const url = process.env.MONGODB_URI || "mongodb://localhost/TRDScraper50";
mongoose.connect(url, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
