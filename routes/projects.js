const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

/**
 * If user accesses the base project or projects page, send them on to a random project.
 */
router.get('/', (req, res) => {
  const projectId = Math.floor(Math.random() * projects.length);
  res.redirect(`/projects/${projectId}`);
});

/**
 * Render the project page cooresponding to the passed in id.
 * @param id - The request parameter that corresponds to a specific project id.
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find(project => project.id === id);
  /**
   * If the user tries to access a non-existent project, redirect to the base project route.
   */
  if (project === undefined) {
    return res.redirect('/project/');
  }
  res.render('project', project);
});

module.exports = router;
