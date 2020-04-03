const express = require('express');
const router = express.Router();
const StudentCurd = require('../model/StudentCurd');

/* GET home page. */
router.get('/', function(req, res, next) {
  const param = req.query || req.params;

  StudentCurd.findAllStudent().then(function(data) {
    if (!data.err) {
      const results = data.results;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(results);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
