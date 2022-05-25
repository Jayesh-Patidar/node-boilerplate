const functions = require("./functions");

const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

emitter.on("info", (...args) => console.log.apply(console, ...args));

emitter.on("warn", (...args) => console.log.apply(console, ...args));

emitter.on("error", (...args) => console.log.apply(console, ...args));

emitter.on("debug", (...args) =>
    functions.config("app.debug") ? console.log.apply(console, ...args) : null
);

module.exports = emitter;
