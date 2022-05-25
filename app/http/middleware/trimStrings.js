const trimString = (json) => {
    const response = {};

    Object.keys(json).forEach((key) => {
        const value = json[key];

        if (typeof value === "string") {
            response[key] = value.trim();
        } else if (typeof value === "number" || typeof value === "boolean") {
            response[key] = value;
        } else if (Array.isArray(value)) {
            response[key] = Object.values(trimString(value));
        } else {
            response[key] = trimString(value);
        }
    });

    return response;
};

module.exports = (req, res, next) => {
    let inputs = { ...req.query, ...req.body };

    inputs = trimString(inputs);
    req.inputs = inputs;

    next();
};
