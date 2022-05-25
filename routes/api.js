const { Router } = require("express");
const router = Router();

router.use("*", (req, res) => res.status(404).json({
    message: 'API not found'
}));

module.exports = router;
