const { Router } = require("express");
const trimStrings = require("../app/http/middleware/trimStrings");

const router = Router();

router.use(trimStrings);

router.use("*", (req, res) => res.notFound({ message: "API not found" }));

module.exports = router;
