module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // 新增加cors 运行的请求头
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,lang,sfopenreferer '
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
