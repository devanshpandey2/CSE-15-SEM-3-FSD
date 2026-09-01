// (
// console.log("hello world")
// console.log("3+4 =" + (3 + 4));
// console.log("This is a simple javascript program");
// console.log("Goodbye");
// console.error("This is an error message");  
// console.warn("This is a warning message");
// console.info("This is an info message");
// console.debug("This is a debug message");
// console.log("process.platform");
// console.log(global.lnumber);
// global.lnumber = 51;
// console.log(global.lnumber);
// )

// process.on('exit',function(){
//     console.log("Good");
// }
// )

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('lunch', () => {
//     console.log('Welcome');
// }
// );
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

// node js build in modules

// import shyam from './file.js';
// const shyam =require("./file");
// console.log("hello", shyam);



const os = require("os");
console.log("Free Memory:", os.freemem());
console.log("Total Memory:" , os.totalmem());
console.log("Platform:" , os.platform());
console.log("Architecture:", os.arch());



