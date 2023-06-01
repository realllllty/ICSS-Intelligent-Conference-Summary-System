const express = require("express");
const multer = require("multer");
const router = express.Router();
// const db = require("../database/index");
const whisperservice = require("../services/Whisper_services");

// 设置 multer
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../uploads/"); // 设置上传后文件路径，uploads 文件夹会自动创建。
  },
  filename: function (req, file, cb) {
    cb(null, "audio.wav");
  },
});
let upload = multer({
  storage: storage,
});

// async function filesql(filename) {
//   const updateSql = "UPDATE UserText SET GptText = ? WHERE recordid = ?";
//   try {
//     const [rows, fields] = await db
//       .promise()
//       .execute(updateSql, [gptresponse, recordid]);
//     console.log("Update Success");
//   } catch (err) {
//     console.error("Failed to update record:", err);
//   }
// }

// 使用 multer 中间件处理文件上传
router.post("/", upload.single("file"), async (req, res) => {
  console.log("whisper");
  console.log(req.file); // 输出文件信息
  res.send("File received");
  // filesql(req.file.filename);
  whisperservice();
});

module.exports = router; //导出路由对象
