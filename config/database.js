const { knexSnakeCaseMappers } = require("objection");
const { env } = require("../helpers/package/functions");

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work.
    |
    */

    client: env("DATABASE_CLIENT", "mysql2"),

    connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env("DATABASE_PORT", "3306"),
        database: env("DATABASE_NAME", "boilerplate"),
        user: env("DATABASE_USER", "root"),
        password: env("DATABASE_PASSWORD", ""),
        charset: "utf8",
    },

    pool: {
        min: 2,
        max: 10,
    },

    migrations: {
        tableName: "migrations",
        directory: "./database/migrations",
        extension: "js",
        disableMigrationsListValidation: true,
    },
    seeds: {
        directory: "./database/seeds",
        extension: "js",
        recursive: true,
    },

    ...knexSnakeCaseMappers(),
};
