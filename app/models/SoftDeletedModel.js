const Model = require("./Model");

class SoftDeletedModel extends Model {
    /**
     * Include soft deleted rows in the query.
     */
    static includesSoftDeleted = false;

    /**
     * Soft delete column name.
     */
    static softDeleteColumn = "deleted_at";

    static query(...args) {
        const query = super.query(...args);

        if (this.includesSoftDeleted) {
            query.whereNotNull(this.softDeleteColumn);
        } else {
            query.whereNull(this.softDeleteColumn);
        }

        return query;
    }
}

module.exports = SoftDeletedModel;
