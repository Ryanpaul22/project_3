const db = require('../models');

module.exports = {
  findAll(req, res) {
    db.User.findAll(req.query)
    .then(dbUser => res.json(dbUser))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  findByName(req, res) {
    db.User.findOne(req.params.username)
    .then(dbUser => res.json(dbUser))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
  },

  userCheck: function (req, res) {
    if (req.user) {
      return res.json(req.user);
    }
    else {
      return res.status(422).json({ error: "Not logged in!" })
    }
  },

  register: function (req, res) {
    db.User.create(req.body)
      .then(function (userInfo) {
        req
          .login(userInfo, function (err) {
            if (err) {
              console.log(err)
              return res
                .status(422)
                .json(err);
            }
            console.log(req.user);
            return res.json("/");
          });
      })
      .catch(function (err) {
        console.log(err);
        res
          .status(422)
          .json(err);
      });
  },

  deleteUser(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  login(req, res) {
    console.log(req.user);
    res.json("/");
  }
}