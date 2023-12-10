const express = require('express');
const router = express.Router();

router.get('/getThreeNumbers', (req, res) => {
  const numbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10) + 1);
  const gameOver = numbers.includes(10);

  res.json({
    numbers: numbers,
    gameOver: gameOver
  });
});

module.exports = router;
