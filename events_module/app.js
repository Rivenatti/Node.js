const EventEmitter = require("events");
const emmiter = new EventEmitter();

// Register a listener
emiiter.on("clicked", () => {
  console.log("Element clicked.");
});

// Raise an event

emmiter.emit("clicked");
