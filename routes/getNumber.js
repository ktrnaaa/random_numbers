const express = require('express');
const router = express.Router();

router.get('/getNumber', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  const gameOver = number === 10;

  res.json({
    number: number,
    gameOver: gameOver
  });
});

module.exports = router;
