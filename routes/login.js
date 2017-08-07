var express = require('express');
var router = express.Router();
var db = require("../db");

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var user = db.find(x => x.name === req.body.username);
  if(!user) {
    // req.flash('error', 'Username and password are incorrect');
    res.redirect('/login');
  }
  if(req.body.password === "pass") {
    req.session.meId = user.id;
    req.session.authenticated = true;
    res.redirect('/');
  }
  else {
    // req.flash('error', 'Username and password are incorrect');
    res.redirect('/login');
  }
});

module.exports = router;
