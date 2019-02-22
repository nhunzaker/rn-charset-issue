var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

// POST /login gets urlencoded bodies
app.post("/", function(request, response) {
  console.log("POST - %s", new Date().toLocaleTimeString());

  for (let key in request.headers) {
    console.log("  %s: %s", key, request.headers[key]);
  }

  console.log("\nBody:");
  console.log("  ", request.body);

  response.json({ message: "You did it!" });
});

app.listen(3000, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening at http://localhost:3000`);
});
