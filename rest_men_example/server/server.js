const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

// setup dbConnection
const dbRoute = "mongodb://localhost/mern-example";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("Connected to the db"));

// Check for errors
db.on("error", err => console.log(err));

app.use(bodyParser.urlencoded({ extented: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// GET METHOD
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// UPDATE METHOD
router.post("updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate((id, update, err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// DELETE METHOD
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneandDelete((id, err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// POST METHOD
router.post("/postData", (req, res) => {
  let data = new Data();
  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
