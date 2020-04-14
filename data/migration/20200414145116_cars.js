exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl
      .string('vin')
      .notNullable()
      .unique();
    tbl.integer('mileage').notNullable();
    tbl.string('type');
    tbl.string('title status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
