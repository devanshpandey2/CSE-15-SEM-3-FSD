const fs = require("fs");

const fileName = "sample.txt";

//create
fs.writeFileSync(fileName, "Hello, this is the original content.");
console.log("File created successfully.");

let data = fs.readFileSync(fileName, "utf8");
console.log("File content:", data);

// UPDATE
fs.appendFileSync(fileName, "\nThis content has been updated.");
console.log("File updated successfully.");

data = fs.readFileSync(fileName, "utf8");
console.log("Updated content:", data);

// DELETE
fs.unlinkSync(fileName);
console.log("File deleted successfully.");a