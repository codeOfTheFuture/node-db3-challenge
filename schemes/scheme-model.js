const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
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
      'steps.id',
      'schemes.scheme_name',
      'steps.scheme_id',
      'steps.step_number',
      'steps.instructions',
    );
}

function add(schemeData) {
  return db('schemes')
    .insert(schemeData)
    .then(scheme => console.log(scheme))
    .catch(err => console.log('Add helper error', err));
}

function addStep(stepData, id) {
  return db('steps')
    .insert(stepData)
    .then(step => console.log(step))
    .catch(err => console.log('Add Step error', err));
}

function update(changes, id) {
  return db('schemes')
    .where('id', Number(id))
    .update(changes)
    .then(updateScheme => console.log(updateScheme))
    .catch(err => console.log('Update scheme err: ', err));
}

function remove(id) {
  return db('schemes')
    .where('id', Number(id))
    .del();
}
