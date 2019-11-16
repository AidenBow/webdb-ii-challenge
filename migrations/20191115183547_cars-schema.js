
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("ID");
    table.string("make", 64).notNullable();
    table.string("model", 64).notNullable();
    table.integer("mileage").notNullable();
    table.integer("VIN").unique().notNullable();
    table.string("transmission", 64);
    table.string("titleStatus", 64);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
