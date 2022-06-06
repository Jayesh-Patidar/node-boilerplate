const StatusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

module.exports = (req, res, next) => {
    res.success = (data) => {
        res.status(StatusCodes.OK).json(data);
    };
    res.created = (data) => {
        res.status(StatusCodes.CREATED).json(data);
    };
    res.noContent = () => {
        res.status(StatusCodes.NO_CONTENT);
    };
    res.badRequest = (data) => {
        res.status(StatusCodes.BAD_REQUEST).json(data);
    };
    res.unauthorized = (data) => {
        res.status(StatusCodes.UNAUTHORIZED).json(data);
    };
    res.forbidden = (data) => {
        res.status(StatusCodes.FORBIDDEN).json(data);
    };
    res.notFound = (data) => {
        res.status(StatusCodes.NOT_FOUND).json(data);
    };
    res.error = (data) => {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(data);
    };
    res.custom = (data, statusCode = StatusCodes.OK) => {
        res.status(statusCode).json(data);
    };
    res.text = (data) => {
        res.status(StatusCodes.OK).send(data);
    };
    next();
};
