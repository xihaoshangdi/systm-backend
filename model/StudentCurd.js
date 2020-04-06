const pool = require('../dao/operate');

function callback(err, results, fields) {
  resolve({ err: err, results: results, fields: fields });
  reject({ err: err });
}

module.exports = {
  //按照宿舍号楼号查找所有成员
  findDormitory(param) {
    const sqlAnd =
      'select * from student where dormitoryNumber=? and buildNumber=?';
    const sqlOr =
      'select * from student where dormitoryNumber=? or buildNumber=?';
    const sql = param.dormitoryNumber && param.buildNumber ? sqlAnd : sqlOr;
    return (promise = new Promise(function (resolve, reject) {
      pool.query(sql, [param.dormitoryNumber, param.buildNumber], callback);
    }));
  },
};
