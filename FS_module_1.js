// Synchronous Approach

const { readFileSync, writeFileSync } = require("fs");
// read file
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
console.log(first);
// create and writing to a file
// flag is used to avoid overwrite
writeFileSync("./content/third.txt", "Third text file!", { flag: "a" });
console.log("done with this task");
console.log("starting the new task");
