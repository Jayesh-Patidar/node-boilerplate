const handleCors = require("./handleCors");
const throttleRequests = require("./throttleRequests");

module.exports = [handleCors, throttleRequests];
