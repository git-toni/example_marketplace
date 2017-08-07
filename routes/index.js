var express = require('express');
var router = express.Router();
var auth = require("../auth");
var db = require("../db");

router.get('/', auth.checkAuth, function(req, res, next) {
  var users = db;
  var meId = req.session.meId;
  var me = users.find(x => x.id === meId);
  res.render('index', { 
    meId: req.session.meId, 
    me,
    users 
  });
});

module.exports = router;
