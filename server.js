// content of index.js
const http = require("http");

const requestHandler = (request, response) => {
  console.log("\n%s - %s:", request.method, new Date().toLocaleTimeString());

  for (let key in request.headers) {
    console.log("  %s: %s", key, request.headers[key]);
  }

  response.end(JSON.stringify({ message: "You did it!" }));
};

const server = http.createServer(requestHandler);

server.listen(3000, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening at http://localhost:3000`);
});
