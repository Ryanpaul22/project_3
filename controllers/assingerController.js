const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Assinger.findAll(req.query)
    .then(dbAssinger => res.json(dbAssinger))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  findById(req, res) {
    db.Assinger.findById(req.params.id)
    .then(dbAssinger => res.json(dbAssinger))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  createAssinger(req, res) {
    db.Assinger.create(req.body)
      .then(dbAssinger => res.json(dbAssinger))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  deleteAssinger(req, res) {
    db.Assinger.findById(req.params.id)
      .then(dbAssinger => dbAssinger.remove())
      .then(dbAssinger => res.json(dbAssinger))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
}