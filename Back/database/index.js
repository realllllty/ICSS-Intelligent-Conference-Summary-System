// 导入 mysql 模块
const mysql = require("mysql2");

// 创建数据库连接对象
const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "icss",
});

// 向外共享 db 数据库连接对象
module.exports = db;
