const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.Game.findAll(req.query)
    .then(dbGame => res.json(dbGame))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  findById(req, res) {
    db.Game.findById(req.params.id)
    .then(dbGame => res.json(dbGame))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  createGame(req, res) {
    db.Game.create(req.body)
      .then(dbGame => res.json(dbGame))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  deleteGame(req, res) {
    db.Game.findById(req.params.id)
      .then(dbGame => dbGame.remove())
      .then(dbGame => res.json(dbGame))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
}