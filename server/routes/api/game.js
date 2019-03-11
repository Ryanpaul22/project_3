const express = require('express');
const router = express.Router();

// Game Model
const Game = require('../../models/Game')


module.exports = (app) => {
  
  // @route GET api/games
  // Get All Games
  app.get('/api/games', (req, res) => {
    Game.find()
    .sort({ date: -1 })
    .then(games => res.json(games) )
  })

  // @route POST api/games
  // Create a Game
  app.post('/api/games', (req, res) => {
    const newGame = new Game({
      date: req.body.date,
      time: req.body.time,
      assinger: req.body.assinger,
      partner: req.body.partner,
      position: req.body.position,
      paymentStatus: req.body.paymentStatus,
      fee: req.body.fee,
      level: req.body.level,
      paymentType: req.body.paymentType,
      town: req.body.town,
      site: req.body.site,
      notes: req.body.site
    });

    newGame.save().then(game => res.json(game));
  });

   // @route DELETE api/games
  // Delete a Game
  app.delete('/api/games/:id', (req, res) => {
    Game.findById(req.params.id)
    .then(game => game.remove().then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}))
  });
    

    
  
}