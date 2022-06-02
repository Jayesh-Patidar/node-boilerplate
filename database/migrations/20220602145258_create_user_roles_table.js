/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("user_roles", (table) => {
        table.bigIncrements("id").primary();
        table.bigInteger("user_id").unsigned().notNullable();
        table.bigInteger("role_id").unsigned().notNullable();
        table.bigInteger("created_by").unsigned().nullable();
        table.bigInteger("updated_by").unsigned().nullable();
        table.timestamps(true, true);
        table.timestamp("deleted_at", { useTz: true }).nullable();

        // Foreign key constraints
        table.foreign("user_id").references("users.id");
        table.foreign("role_id").references("roles.id");
        table.foreign("created_by").references("users.id");
        table.foreign("updated_by").references("users.id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("user_roles");
};
