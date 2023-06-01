const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const gptservice = require("./gpt");
const db = require("../database/index");

module.exports = async function transcribeAudio() {
  const filePath = __dirname + "/../uploads/audio.wav"; // 替换为你的音频文件路径
  const TOKEN = "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"; // 替换为你的TOKEN
  const model = "whisper-1";

  let form = new FormData();
  form.append("file", fs.createReadStream(filePath));
  form.append("model", model);

  try {
    const response = await axios({
      method: "post",
      url: "https://api.openai.com/v1/audio/transcriptions",
      data: form,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        ...form.getHeaders(),
      },
    });

    console.log(response.data);
    let { text: copy } = response.data;
    await gptservice(copy);
  } catch (error) {
    console.error(error);
  }
};
