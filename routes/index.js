const express = require('express');
const { data } = require('../data.json');
const { skills } = data;
const router = express.Router();

/**
 * Route to the main landing page.
 */
router.get('/', (req, res) => {
  res.render('index');
});

/**
 * Route to the about page.
 */
router.get('/about', (req, res) => {
  const { technical, analytical } = skills;
  res.render('about', { technical, analytical });
});

module.exports = router;
