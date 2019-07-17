const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  // add,
  // addStep,
  // update,
  // remove,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

function findSteps(id) {
  return db('schemes')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where({ scheme_id: id })
    .select(
      'schemes.id',
      'schemes.scheme_name',
      'steps.scheme_id',
      'steps.step_number',
      'steps.instructions',
    );
}

// function add(data) {

// }
