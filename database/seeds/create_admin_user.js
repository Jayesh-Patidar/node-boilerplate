/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    const [adminUserId] = await knex("users").insert({
        first_name: "Admin",
        last_name: "User",
    });

    const [adminRoleId] = await knex("roles").insert({
        name: "Admin",
        level: 1,
        created_by: adminUserId,
        updated_by: adminUserId,
    });

    await knex("user_roles").insert({
        user_id: adminUserId,
        role_id: adminRoleId,
        created_by: adminUserId,
        updated_by: adminUserId,
    });
};
