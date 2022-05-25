const rateLimiter = require("express-rate-limit");
const { config } = require("../../../helpers/package/functions");

module.exports = rateLimiter({
    max: config("route.rateLimiting.maxAttempts"),
    windowMs: config("route.rateLimiting.decayMinutes") * 60 * 1000,
    standardHeaders: config("route.rateLimiting.standardHeaders"),
    legacyHeaders: config("route.rateLimiting.legacyHeaders"),
});
