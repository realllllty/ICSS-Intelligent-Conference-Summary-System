const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/voiceRecognition', (req, res) => {
    res.json({
        text: '这是虚拟的语音识别文字。'
    });
});

app.get('/gptSummary', (req, res) => {
    res.json({
        text: '这是虚拟的 GPT 总结。'
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
