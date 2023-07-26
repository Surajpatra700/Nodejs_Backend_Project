const EventEmitter = require('node:events');
// const { setTimeout } = require('node:timers/promises');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle remainder');
    }, 3000);
});

console.log("The Script is running");
console.log("The Script is still running");

myEmitter.emit('WaterFull');