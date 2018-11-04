const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");

  // INFORMATION SHOWN ON THE PAGE
  res.end("Server works");
});

server.listen(port, host, () => {
  // INFORMATION SHOWN IN TERMINAL
  console.log(`Server works on ${host}:${port}`);
});
