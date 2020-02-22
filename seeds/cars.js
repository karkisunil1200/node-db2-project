exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      const cars = [
        {
          name: 'Mercedes',
          model: 'C250'
        },

        {
          name: 'Honda',
          model: 'Pilot'
        }
      ];

      // Inserts seed entries
      return knex('cars').insert(cars);
    });
};
