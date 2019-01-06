const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/index');
app.use(mainRoutes);

/**
 * Use pug as the templating engine
 */
app.set('view engine', 'pug');

app.use('/', (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => console.log('The app is listening on port 3000.'));
