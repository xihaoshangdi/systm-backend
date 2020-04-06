const pool = require('../Dao/operate');
const user1 = `select buildnumber, Dormitorynumber from student where grade=? or profession=?
`;
const user2 = `select buildnumber, Dormitorynumber from student where grade=? and profession=?
`;
const StudentOp = {
  findAllStudent(param) {
    if (Object.values(param).length === 2) {
      const sql = user2;
    } else {
      const sql = user1;
    }
    pool.query(sql, [param.grade, param.profession], function (
      err,
      results,
      fields
    ) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
    // let promise = new Promise(function (resolve, reject) {
    //   pool.query(userAddSql, param, function (err, results, fields) {
    //     resolve({
    //       err: err,
    //       results: results,
    //       fields: fields,
    //     });
    //     reject({
    //       err: err,
    //     });
    //   });
    // });
    // return promise;
  },
};

module.exports = StudentOp;
