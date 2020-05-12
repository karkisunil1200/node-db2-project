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

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.),
// but this information is not always immediately known.
