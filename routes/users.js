var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log('req');

  console.log('xxxxxxxxxxxxxxxxxxxx');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('respond with a resource');
});

module.exports = router;
