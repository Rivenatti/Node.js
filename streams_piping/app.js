const fileSystem = require("fs");

// ----------- LOCAL MACHINE -----------

const readStream = fileSystem.createReadStream("lorem.txt", "utf8");

const writeStream = fileSystem.createWriteStream("lorem_copy.txt");

readStream.pipe(writeStream);

// ----------- LOCAL SERVER -----------

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    readStream.pipe(res);
  })
  .listen(3000);

console.log("Server is currently running on localhost...");
