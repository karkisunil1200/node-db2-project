const db = require('../data/dbConfig');

module.exports = {
  findAll
};

function findAll() {
  return db.select('*').from('cars');
}
