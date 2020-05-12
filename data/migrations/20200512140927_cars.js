exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl
      .string('make')
      .notNullable()
      .unique();

    tbl
      .string('model')
      .notNullable()
      .unique();

    tbl.integer('mileage').notNullable();
    tbl.string('vin').notNullable();
    tbl.string('status');
    tbl.string('type');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
