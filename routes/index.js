const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

// router.get('/:url', (req, res) => {
//   const { url } = req.params;
//   res.redirect('/');
// });

module.exports = router;
