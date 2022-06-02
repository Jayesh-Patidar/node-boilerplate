/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("roles", (table) => {
        table.bigIncrements("id").primary();
        table.bigInteger("parent_role_id").unsigned().nullable();
        table.string("name").notNullable();
        table.integer("level").notNullable();
        table.bigInteger("created_by").unsigned().nullable();
        table.bigInteger("updated_by").unsigned().nullable();
        table.timestamps(true, true);
        table.timestamp("deleted_at", { useTz: true }).nullable();

        // Foreign key constraints
        table.foreign("created_by").references("users.id");
        table.foreign("updated_by").references("users.id");
        table.foreign("parent_role_id").references("id").inTable("roles");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("roles");
};
