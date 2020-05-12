exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'Toyota', model: 'camery', vin: '292839efhe92323n', mileage: 20000},
        {id: 2, make: 'Honda', model: 'civic', vin: '239289efhe92323n', mileage: 82323},
        {id: 3, make: 'Nissan', model: 'altima', vin: '239283efhe92323n', mileage: 233233}
      ]);
    });
};
