const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Partner.findAll(req.query)
    .then(dbPartner => res.json(dbPartner))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  findById(req, res) {
    db.Partner.findById(req.params.id)
    .then(dbPartner => res.json(dbPartner))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  createPartner(req, res) {
    db.Partner.create(req.body)
      .then(dbPartner => res.json(dbPartner))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  deletePartner(req, res) {
    db.Partner.findById(req.params.id)
      .then(dbPartner => dbPartner.remove())
      .then(dbPartner => res.json(dbPartner))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
}