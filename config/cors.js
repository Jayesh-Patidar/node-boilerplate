const { configIs, env } = require("../helpers/package/functions");

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | This value sets the allowed origins for CORS. Depending upon Application
	| Environment, it can be wildcard or specific.
    |
    */
    allowedOrigins: configIs("app.env", "local")
        ? "*"
        : env("ALLOWED_ORIGINS", "*")
              .split(",")
              .map((url) => url.trim()),

    /*
    |--------------------------------------------------------------------------
    | Allowed Methods
    |--------------------------------------------------------------------------
    |
    | This value sets the allowed methods for CORS.
    |
    */
    allowedMethods: ["*"],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | This value sets the allowed headers for CORS.
    |
    */
    allowedHeaders: ["*"],

    supportCredentials: true,

    preflightContinue: false,

    optionsSuccessStatus: 204,
};
