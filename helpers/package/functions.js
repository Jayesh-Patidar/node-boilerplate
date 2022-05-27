const dotenv = require("dotenv");
const { cwd } = require("process");
const logger = require("./logger");

exports.env = (key, defaultValue = null) => {
    dotenv.config();

    let value = process.env[key] || defaultValue;

    value = +value || value;

    switch (value) {
        case "true":
        case "(true)":
            return true;
        case "false":
        case "(false)":
            return false;
        case "empty":
        case "(empty)":
            return "";
        case "null":
        case "(null)":
            return null;
        case "undefined":
        case "(undefined)":
            return undefined;
        default:
            return value;
    }
};

exports.config = (key = "", defaultValue = null) => {
    const [fileName, ...keys] = key.split(".");
    let configFileContent;
    try {
        configFileContent = require(`${cwd()}/config/${fileName}`);
    } catch {
        return this.log.error(
            `No config file found ${fileName ? `with name ${fileName}.js` : ""}`
        );
    }
    let value = configFileContent;
    keys.forEach((key) => {
        value = value ? value[key] : configFileContent[key];
    });

    return value || defaultValue;
};

exports.configIs = (key, value) => this.config(key) === value;

exports.log = {
    info: function (...string) {
        logger.emit("info", ["INFO:", ...string]);
    },
    warn: function (...string) {
        logger.emit("warn", ["WARN:", ...string]);
    },
    error: function (...string) {
        logger.emit("error", ["ERROR:", ...string]);
    },
    debug: function (...string) {
        logger.emit("debug", ["DEBUG:", ...string]);
    },
};
