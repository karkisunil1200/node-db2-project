const db = require('../data/dbConfig');

module.exports = {
  findAll,
  findById,
  insert
};

function findAll() {
  return db.select('*').from('cars');
}

function findById(id) {
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
