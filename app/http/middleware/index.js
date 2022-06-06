const response = require("./response");
const handleCors = require("./handleCors");
const rolePrefix = require("./rolePrefix");
const throttleRequests = require("./throttleRequests");

module.exports = [handleCors, throttleRequests, response, rolePrefix];
