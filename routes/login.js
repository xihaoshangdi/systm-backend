var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);

  console.log('xxxxxxxxxxxxxxxxxxxx');
  res.send('respond with a resource');
});

module.exports = router;
