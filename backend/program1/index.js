// using node.js build-int events module create an event-emitter register multiple event-emitteer .register multiple listeners for a resonable event , then emit the event bypassing name and id as arguments and display them int the  console

import http from "http";
import EventEmitter from "event";
const myEmitter = new EventEmitter();
myEmitter.on("response", ()=>{
    console.log('data received');
});  
myEmitter.on("response", ()=>{
    console.log('Some other logic here');
}); 
myEmitter.on("response", ()=>{
    console.log('data received ${name} with id:${id}');
}); 
myEmitter.emit("response","harry",code);

