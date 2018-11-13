const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First middleware.");
  next(); // enables usage of the second middleware
});

app.use((req, res, next) => {
  console.log("Second middleware.");
  res.send("<h3>Example</h3>"); // automatically sets header content-type to 'text/html'
});

app.use((req, res, next) => {
  console.log("Third middleware.");
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000.");
});
