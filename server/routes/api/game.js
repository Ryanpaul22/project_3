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
      fee: req.body.fee
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