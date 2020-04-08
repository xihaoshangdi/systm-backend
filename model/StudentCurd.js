const pool = require('../dao/operate');

function callback(resolve, reject) {
  return function (err, results, fields) {
    resolve({ err: err, results: results, fields: fields });
    reject({ err: err });
  };
}

module.exports = {
  //按照宿舍号楼号查找所有成员
  findDormitory(param) {
    const field =
      param.dormitoryNumber !== 'undefined' && param.buildNumber !== 'undefined'
        ? 'and'
        : 'or';
    const sql = `select * from student where dormitoryNumber=? ${field} buildNumber=?`;
    return (promise = new Promise(function (resolve, reject) {
      pool.query(
        sql,
        [param.dormitoryNumber, param.buildNumber],
        callback(resolve, reject)
      );
    }));
  },
};
