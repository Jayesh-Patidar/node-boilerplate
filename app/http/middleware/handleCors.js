const cors = require("cors");
const { config } = require("../../../helpers/package/functions");

module.exports = cors({
    origin: config("cors.allowedOrigins"),
    methods: config("cors.allowedMethods"),
    allowedHeaders: config("cors.allowedHeaders"),
    credentials: config("cors.supportCredentials"),
    preflightContinue: config("cors.preflightContinue"),
    optionsSuccessStatus: config("cors.optionsSuccessStatus"),
});
