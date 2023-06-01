const db = require("../database/index");
const { OpenAIApi, Configuration } = require("openai");

// 从环境变量中获取 OpenAI 密钥并实例化 OpenAIApi
const openai = new OpenAIApi(
  new Configuration({
    apiKey: "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",
  })
);

// 定义你的消息数组
let messageList = [{ role: "system", content: "" }];

// 创建一个函数来调用 GPT-3.5 Turbo 模型
async function queryGPT35Turbo(messages) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  return response.data.choices[0].message.content;
}

module.exports = async function gpt(text) {
  messageList.at(0).content = text;
  let gptresponse = await queryGPT35Turbo(messageList);
  console.log("gptresponse:" + gptresponse);

  // 插入新记录的SQL语句
  const insertSql =
    "INSERT INTO UserText (UserID,RecognizedText, GptText) VALUES (?, ?, ?)";

  try {
    // 执行SQL语句，其中text和gptresponse应该是你的程序中定义的变量
    const [rows, fields] = await db
      .promise()
      .execute(insertSql, [
        "eecfb4bf-3730-4cd9-8684-17c8cae061be",
        text,
        gptresponse,
      ]);
    console.log("Insert Success");
  } catch (err) {
    console.error("Failed to insert record:", err);
  }

  //messagelist复位
  messageList.at(0).content = "";
  return gptresponse;
};

// gpt("你好")
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .catch((err) => console.error(err));
