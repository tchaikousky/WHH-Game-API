const express = require('express');
const router = express.Router();
const gameDB = require('../models/gameModel');

router.get('/:category?', async function(req, res) {
  const { category } = req.params;
  const game = await gameDB.getGameTiles(category);

  res.json(game);
});

module.exports = router;
