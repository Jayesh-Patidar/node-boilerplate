const Role = require("../../models/Role");

module.exports = async (req, res, next) => {
    const roles = (await Role.query().select("name")).map((role) =>
        role.name.toLowerCase()
    );
    const url = req.originalUrl.split("/");

    if (roles.includes(url[2].toLowerCase())) {
        return next();
    }

    return res.notFound({
        message: "API not found",
    });
};
