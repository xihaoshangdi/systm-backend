const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const param = req.query || req.params;
  res.send('xxx');
});

module.exports = router;
