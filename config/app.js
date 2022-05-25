const { env } = require("../helpers/package/functions");

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application.
    |
    */
    name: env("APP_NAME", "Boilerplate"),

    /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port of your application.
    |
    */
    port: +env("APP_PORT", 8000),

    /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in.
    |
    */
    env: env("APP_ENV", "local"),

    /*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
    */
    debug: env("APP_DEBUG", false),
};
