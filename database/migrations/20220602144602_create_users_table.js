/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.bigIncrements("id").primary();
        table.string("first_name").notNullable();
        table.string("middle_name").nullable();
        table.string("last_name").nullable();
        table.string("user_name").nullable();
        table.string("email").nullable();
        table.string("calling_code").nullable();
        table.string("phone").nullable();
        table.string("password").nullable();
        table.bigInteger("created_by").unsigned().nullable();
        table.bigInteger("updated_by").unsigned().nullable();
        table.timestamps(true, true);
        table.timestamp("deleted_at", { useTz: true }).nullable();

        // Foreign key constraints
        table.foreign("created_by").references("users.id");
        table.foreign("updated_by").references("users.id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
