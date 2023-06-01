const db = require("../database/index");
const bcrypt = require("bcryptjs"); //对密码进行加密
const jwt = require("jsonwebtoken"); //生成token字符串
const { secretkey, expiresIn } = require("../config/index");
const { v4: uuidv4 } = require("uuid");


// 注册用户的处理函数
exports.register = (req, res) => {
  // 获取客户端请求的用户信息
  const userInfo = req.body;
  // 定义 SQL 语句，查询用户名是否被占用
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, userInfo.username, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.send({ status: 500, msg: err.message + "ddd" });
    // 判断用户名是否被占用
    if (results.length > 0) {
      return res.send({ status: 400, msg: "用户名被占用，请更换其他用户名！" });
    }
    // 调用 bcrypt.hashSync() 对密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);
    const uniqueId = uuidv4();
    userInfo.id = uniqueId;
    // 定义插入新用户的 SQL 语句
    const sql = "INSERT INTO users SET ?";
    db.query(sql, userInfo, (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.send({ status: 500, msg: err.message + "kkk" });
      // 判断影响行数是否为 1
      if (results.affectedRows !== 1)
        return res.send({ status: 500, msg: "注册用户失败，请联系管理员！" });
      res.send({ status: 200, msg: "用户注册成功！" });
    });
  });
};


// 登录的处理函数
exports.login = (req, res) => {
  // 接收客户端传递的表单数据
  const userInfo = req.body;
  // 定义 SQL 查询语句
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, userInfo.username, (err, results) => {
    // 执行 SQL 语句失败
    if (err) res.send({ status: 500, msg: err.message });
    // 执行 SQL 语句成功，但查询条数不等于1
    if (results.length !== 1)
      return res.send({ status: 403, msg: "登陆失败，请检查用户名和密码！" });
    // 判断密码是否正确
    const flag = bcrypt.compareSync(userInfo.password, results[0].password);
    if (!flag) return res.send({ status: 403, msg: "登录失败，密码错误！" });
    // 对用户信息进行加密，生成Token字符串
    const token = jwt.sign({ username: req.body.username }, secretKey, {
      expiresIn: expiresIn,
    });
    res.send({
      status: 200,
      msg: "登陆成功！",
      token: "Bearer " + token,
    });
  });
};
