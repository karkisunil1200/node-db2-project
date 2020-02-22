exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments(); //gets the primary key

    tbl
      .string('name', 256)
      .notNullable() // It is required
      .index(); // makes searching name faster

    tbl
      .string('model', 256)
      .notNullable()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
