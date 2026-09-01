const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", (message) => {
  console.log(`Button clicked: ${message}`);
});

button.on("mouseover", () => {
  console.log("Mouse is over the button.");
});

//changes

button.emit("mouseover");
button.emit("click", "Welcome!");