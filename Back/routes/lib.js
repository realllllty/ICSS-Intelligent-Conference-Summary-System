const express = require("express");
const router = express.Router();
const db = require("../database/index");

//增加表达验证中间件expressJoi

router.get("/", (req, res) => {
  console.log("test");
  db.query(`SELECT * FROM UserText`, function (err, rows) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    let result = rows.map((row) => {
      return {
        time: row.CreatedAt, // 请根据您的数据库字段名调整
        Gpt: row.GptText, // 请根据您的数据库字段名调整
        Recog: row.RecognizedText, //
        id: row.RecordID, // 请根据您的数据库字段名调整
      };
    });

    res.send({ result });
    // 这会在控制台打印结果
    // 如果你需要将结果发送到某个HTTP响应或另一个函数，你可以在这里做那个操作
  });
});

module.exports = router; //导出路由对象
