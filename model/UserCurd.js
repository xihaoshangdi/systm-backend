const pool = require('../Dao/operate');
const userCheckSql = `SELECT * FROM accents WHERE accent=?`;
const UserOp = {
  CheckAccent(param) {
    let promise = new Promise(function(resolve, reject) {
      pool.query(userCheckSql, param, function(err, results, fields) {
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

module.exports = UserOp;
