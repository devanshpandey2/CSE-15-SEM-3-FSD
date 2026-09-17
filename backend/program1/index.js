// using node.js built-in events module
// create an event emitter, register multiple listeners
// for the same event, then emit the event with name and id

const { EventEmitter } = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("response", () => {
    console.log("data received");
});

myEmitter.on("response", () => {
    console.log("Some other logic here");
});

myEmitter.on("response", (name, id) => {
    console.log(`data received ${name} with id: ${id}`);
});

myEmitter.emit("response", "harry", 101);

