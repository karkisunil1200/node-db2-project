exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          model: 'Gallardo',
          vin: 'lksjdfljs34234',
          mileage: 5,
          type: 'v12',
          status: 'clean',
          make: 'Lambo'
        },
        {
          id: 2,
          model: 'Civic',
          vin: 'q0usdf09sfd',
          mileage: 5,
          type: 'v6',
          status: 'salvage',
          make: 'Honda'
        },
        {
          id: 3,
          model: '911',
          vin: 'sdf83r983rb',
          mileage: 5,
          type: 'v10',
          status: 'super clean',
          make: 'Porsche'
        }
      ]);
    });
};
