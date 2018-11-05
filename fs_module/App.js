const fileSystem = require("fs");

// READ
const readLorem = () => {
  fileSystem.readFile("Lorem.txt", "utf8", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log(data);
    }
  });
};

readLorem();
