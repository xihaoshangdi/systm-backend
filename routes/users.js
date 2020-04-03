var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.query;
  if (query.type === 'serach') {
  }
  console.log();
  res.send('respond with a resource');
});

module.exports = router;
