const pool = require('../Dao/operate');
const userAddSql = `SELECT * FROM student`;
const StudentOp = {
  findAllStudent(param) {
    let promise = new Promise(function(resolve, reject) {
      pool.query(userAddSql, param, function(err, results, fields) {
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  }
};

module.exports = StudentOp;
