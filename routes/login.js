var express = require('express');
var router = express.Router();
var db = require("../db");

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  // An example of a very sophisticated user authentication code ;)
  var user = db.find(x => x.name === req.body.username);
  if(!user) {
    console.warn("User not found.");
    res.redirect('/login');
  }
  if(req.body.password === "pass") {
    req.session.meId = user.id;
    req.session.authenticated = true;
    res.redirect('/');
  }
  else {
    console.warn("Incorrect password.");
    res.redirect('/login');
  }
});

module.exports = router;
