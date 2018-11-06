const fileSystem = require("fs");
const path = "Lorem.txt";

// ----------------- SYNCHRONOUSLY -----------------

// READ SYNCHRONOUSLY
const readed = fileSystem.readFileSync(path, "utf8");
console.log(readed);

// WRITE SYNCHRONOUSLY
writeToFile = () => {
  fileSystem.writeFileSync("Lorem_copy.txt", readed);
};

writeToFile();

// CREATE DIRECTORY
fileSystem.mkdirSync("new_folder");

// REMOVE DIRECTORY
setTimeout(() => {
  fileSystem.rmdirSync("new_folder");
  console.log("new_folder has been deleted");
}, 3000);

// ---------------- ASYNCHRONOUSLY ----------------

// READ ASYNCHRONOUSLY
fileSystem.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log("data: ", data);
  }
});

// WRITE ASYNCHRONOUSLY
fileSystem.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.log("error: ", err);
  } else {
    fileSystem.writeFile("Lorem_copy2.txt", data);
  }
});

// CREATE DIRECTORY
fileSystem.mkdir("new_folder2", () => {
  fileSystem.writeFile("./new_folder2/new_file.txt", "abc");
});

// DELETE DIRECTORY
setTimeout(() => {
  fileSystem.unlink("./new_folder2/new_file.txt");
  console.log("new_file has been deleted");
  fileSystem.rmdir("new_folder2");
  console.log("new_folder2 has been deleted");
}, 3000);

// --------------------------------

// DELETE FILE
setTimeout(() => {
  fileSystem.unlink("Lorem_copy.txt");
  fileSystem.unlink("Lorem_copy2.txt");
  console.log("Lorem_copy has been deleted");
}, 3000);
