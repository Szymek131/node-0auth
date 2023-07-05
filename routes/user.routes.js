const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  res.render('logged', { name: req.user.displayName, avatar: req.user.photos[0].value });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.send('Your settings');
});

router.get('/profile', isLogged, (req, res) => {
  res.send('Your profile');
});


module.exports = router;