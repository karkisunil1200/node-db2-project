const db = require('../dbConfig');

module.exports = {
  getCars,
  getCarsById
};

function getCars() {
  return db.select('*').from('cars');
}

function getCarsById(id) {
  return db
    .select('*')
    .from('cars')
    .where({id})
    .first();
}
