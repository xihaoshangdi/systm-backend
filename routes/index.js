const express = require('express');
const router = express.Router();
const StudentCurd = require('../model/StudentCurd');

/* GET home page. */
router.get('/', function (req, res, next) {
  const param = req.query || req.params;
  res.send('xxx');
});

module.exports = router;
