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
      'steps.step_number',
      'steps.instructions',
    )
    .orderBy('steps.step_number');
}

function add(schemeData) {
  return db('schemes')
    .insert(schemeData)
    .then(newScheme => {
      console.log('Add scheme: ', Number(newScheme));
      return findById(Number(newScheme));
    })
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
    .then(updateScheme => {
      console.log('scheme updated: ', updateScheme);
      return findById(Number(id));
    })
    .catch(err => console.log('Update scheme err: ', err));
}

function remove(id) {
  return db('schemes')
    .where('id', Number(id))
    .del();
}
