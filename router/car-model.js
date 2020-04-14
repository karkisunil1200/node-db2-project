const db = require('../dbConfig');

module.exports = {
  getCars,
  getCarsById,
  insert
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

function insert(data) {
  return db
    .select('*')
    .from('cars')
    .insert(data);
}
