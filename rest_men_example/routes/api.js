const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// get a list of people from the db
router.get("/people", (req, res, next) => {
  res.send({ type: "GET" });
});

// add a new person to the db
router.post("/people", (req, res, next) => {
  Person.create(req.body)
    .then(person => {
      console.log(person);
      res.send(person);
    })
    .catch(next);
});

// update a person in the db
router.put("/people/:id", (req, res, next) => {
  Person.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Person.findOne({ _id: req.params.id }).then(person => {
      res.send(person);
    });
  });
  res.send({ type: "PUT" });
});

// delete a person from the db
router.delete("/people/:id", (req, res, next) => {
  Person.findByIdAndRemove({ _id: req.params.id }).then(person => {
    res.send(person);
  });
  res.send({ type: "DELETE" });
});

module.exports = router;
