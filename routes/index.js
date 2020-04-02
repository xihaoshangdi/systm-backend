const express = require('express');
const router = express.Router();
const user = require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  const param = req.query || req.params;
  res.setHeader('Access-Control-Allow-Origin', '*');
  user.addUser().then(function(data) {
    if (!data.err) {
      const results = data.results;
      res.json(results);
    } else {
      console.log(err);
    }
  });
  console.log(req);
});

module.exports = router;
