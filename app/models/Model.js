const Knex = require("knex");
const { Model: BaseModel } = require("objection");
const { config } = require("../../helpers/package/functions");

BaseModel.knex(Knex(config("database")));

class Model extends BaseModel {
    /**
     * Array of columns that should be selected by default.
     */
    static selectable = [];

    static query(...args) {
        const query = super.query(...args).select(...(this.selectable || []));

        return query;
    }
}

module.exports = Model;
