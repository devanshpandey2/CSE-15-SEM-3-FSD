const { EventEmitter } = require('events');

console.log('=== 1. Custom EventEmitter ===');

class GreetingEmitter extends EventEmitter {
  greet(name) {
    console.log(`Greeting ${name}...`);
    this.emit('greet', name);
  }

  exit() {
    console.log('Preparing to exit...');
    this.emit('exit');
  }
}

const emitter = new GreetingEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to the event system.`);
});

emitter.on('exit', () => {
  console.log('Goodbye! Event loop is shutting down.');
});

emitter.greet('Alice');
emitter.exit();

console.log('\n=== 2. DOM-like event handling in Node.js ===');

const button = new EventEmitter();

button.on('click', (event) => {
  console.log(`Button clicked: ${event.target}`);
  console.log(`X position: ${event.x}, Y position: ${event.y}`);
});

button.on('hover', (event) => {
  console.log(`Hover detected on: ${event.target}`);
});

button.emit('click', { target: 'Submit', x: 120, y: 45 });
button.emit('hover', { target: 'Submit' });

console.log('\n=== 3. Event loop visualization ===');

console.log('Synchronous log: start');

process.nextTick(() => {
  console.log('process.nextTick runs before the timer phase');
});

setTimeout(() => {
  console.log('setTimeout callback runs in the timer phase');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback runs in the check phase');
});

console.log('Synchronous log: end');

console.log('\nExplanation:');
console.log('- process.nextTick is executed before the event loop continues.');
console.log('- setTimeout(0) waits for the timer phase.');
console.log('- setImmediate is queued for the check phase.');
console.log('- In Node.js, the exact order can vary in some cases, but nextTick is usually first.');
