var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const userCurd = require('../model/UserCurd');
router.post('/', function (req, res, next) {
  const accent = req.body.accent;
  const password = req.body.password;

  userCurd.CheckAccent(accent).then(function (data) {
    if (!data.err) {
      // const results = data.results;
      //TODO
      const token = jwt.sign(
        {
          data: 'usercheck',
        },
        'secret',
        { expiresIn: 5 }
      );
      console.log(token);
      res.send(token);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
