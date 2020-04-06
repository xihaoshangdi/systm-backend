const pool = require('./operate');

let createAccent = `create table if not exists accents(
  id int primary key auto_increment,
  accent varchar(15) not null,
  password varchar(20) not null,
  role varchar(10)
)`;

module.exports = function () {
  pool.query(createAccent, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
  });
};
