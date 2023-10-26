// app.js 또는 server.js 파일

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // 사용할 포트 번호

// 정적 파일 제공 (index.html)
app.use(express.static('public'));

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }));

// GET 요청으로 index.html을 내보내기
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// POST 요청 처리
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('로그인 시도 - 사용자명:', username, '비밀번호:', password);
  // 여기에서 로그인 로직을 추가할 수 있습니다.

  res.send('로그인 시도 완료');
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});