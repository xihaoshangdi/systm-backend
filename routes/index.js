const express = require('express');
const router = express.Router();
const StudentCurd = require('../model/StudentCurd');

/* GET home page. */
router.get('/', function (req, res, next) {
  const param = req.query || req.params;
  StudentCurd.findAllStudent(param);
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // StudentCurd.findAllStudent().then(function (data) {
  //   if (!data.err) {
  //     const results = data.results;
  //     console.log(results);
  //     res.json('xxx');
  //   } else {
  //     console.log(err);
  //   }
  // });
  res.send('xxx');
});

module.exports = router;
