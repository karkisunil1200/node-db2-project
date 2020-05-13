const db = require('../data/dbConfig');

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
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
    .insert(data, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
function update(id, changes) {
  return db
    .select('*')
    .from('cars')
    .where({id})
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db
    .select('*')
    .from('cars')
    .where({id})
    .del();
}
