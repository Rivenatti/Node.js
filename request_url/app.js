const fileSystem = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    console.log(`Requested url: ${req.url}.`);

    if (req.url === "/home" || req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fileSystem.createReadStream("home.html").pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      fileSystem.createReadStream("NotFound.html").pipe(res);
    }
  })
  .listen(3000);

console.log("Server is currently running on localhost:3000");
