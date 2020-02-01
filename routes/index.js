const express = require('express');
const { data } = require('../data.json');
const { skills, hobbies, projects, random, contact } = data;
const { headings } = random;
const router = express.Router();

/**
 * Route to the main landing page.
 * Choose a random heading for the page.
 */
router.get('/', (req, res) => {
  const heading = headings[Math.floor(Math.random() * headings.length)];
  const templateData = { projects, heading };
  res.render('index', templateData);
});

/**
 * Route to the about page.
 */
router.get('/about', (req, res) => {
  const { technical, analytical } = skills;
  res.render('about', { technical, analytical, hobbies });
});

router.get('/contact', (req, res) => {
  res.render('contact', { contact });
});

module.exports = router;
