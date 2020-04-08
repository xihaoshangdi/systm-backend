var express = require('express');
var router = express.Router();
const StudentCurd = require('../model/StudentCurd');

router.get('/', function (req, res, next) {
  const param = req.query;
  if (param.type === 'search') {
    switch (param.mold) {
      case '1':
        //通过年级，专业，或二者组合来查找楼号和宿舍号
        StudentCurd.findGradeAndProfession(param).then(data(req, res));
        break;
      case '2':
        //通过宿舍号，楼号或二者组合来查找学生信息
        StudentCurd.findDormitory(param).then(data(req, res));
        break;
      case '3':
        if (param.grade || param.profession || param.department) {
          //通过宿管号,年级专业系别
          StudentCurd.findStub(param).then(data(req, res));
          break;
        } else if (param.dormitorynumber) {
          //通过宿管号，宿舍号查询
          StudentCurd.findStubAndDormitorynumber(param).then(data(req, res));
          break;
        } else if (param.name || param.studentid) {
          //通过学号姓名查询
          StudentCurd.findStubNameAndId(param).then(data(req, res));
          break;
        }
      default:
        res.send('本次请求未正确发送');
        break;
    }
  }
});

function data(req, res) {
  return function (data) {
    if (!data.err) {
      const results = data.results;
      res.json(results);
    } else {
      console.log(data.err);
    }
  };
}

module.exports = router;
