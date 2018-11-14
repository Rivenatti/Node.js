// install cookie-parser with npm

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.cookie("First cookie", "This is a cookie.", { maxAge: 60000 });
  res.end("Cookie has been set for one minute.");
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000.");
});
