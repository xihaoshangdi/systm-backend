var express = require('express');
var router = express.Router();
const userCurd = require('../model/UserCurd');
router.post('/', function(req, res, next) {
  const accent = req.body.accent;
  const password = req.body.password;

  userCurd.CheckAccent(accent).then(function(data) {
    if (!data.err) {
      const results = data.results;
      res.json(results);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
