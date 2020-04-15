const express = require('express');
const gameDB = require('../models/gameModel');
const router = express.Router();

router.get('/', async function(req, res) {
  const game = await gameDB.getAllGameTiles();

  res.json(game);
});

module.exports = router;
