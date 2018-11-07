const fileSystem = require("fs");
const path = "./lorem.txt";

// ----------------- READ STREAM -----------------
// MACHINE CODE
const readStream = fileSystem.createReadStream(path);

// HUMAN READABLE
// 1st. way
// readStream.setEncoding('utf8');

// 2nd. way
// const readStream = fileSystem.createReadStream(path, 'utf8');

// DATA CHUNKS
readStream.on("data", dataChunk => {
  console.log(dataChunk);
  console.log(".......................");
});

// END OF FILE
readStream.on("end", () => {
  console.log("... END OF FILE ...");
});

// ---------------- WRITE STREAM ----------------
const writeStream = fileSystem.createWriteStream("lorem_copy.txt");

readStream.on("data", chunk => {
  writeStream.write(chunk);
});
