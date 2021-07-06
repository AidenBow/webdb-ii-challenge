
exports.up = function(knex) {
  return knex.schema.createTable("sales", table => {
    table.increments("saleID").primary();
    table.integer("carID", 128).notNullable();
    table.integer("salePrice").notNullable();
    table.string("customerName", 64).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
