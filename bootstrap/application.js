const express = require("express");
const router = require("../routes/api");
const middleware = require("../app/http/middleware/index");
const { config, log } = require("../helpers/package/functions");

const app = express();

app.use(middleware).use(express.json()).use(config("route.prefix"), router);

const listener = app.listen(config("app.port"), () => {
    log.info(`Server is listening on PORT: ${listener.address().port}`);
});
