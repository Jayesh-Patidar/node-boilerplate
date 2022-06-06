const SoftDeletedModel = require("./SoftDeletedModel");

class Role extends SoftDeletedModel {
    static tableName = "roles";
}

module.exports = Role;
