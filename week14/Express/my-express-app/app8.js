const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 처리 미들웨어
app.use((req, res, next) => {
  // 요청에서 id와 password 추출
  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  // HTML 응답
  res.status(200).send(`
    <h1>서버에서 응답한 결과</h1>
    <div>
      <p>Param id: ${paramId}</p>
    </div>
    <div>
      <p>Param password: ${paramPassword}</p>
    </div>
    <br><br>
    <a href="/login1.html">로그인 페이지로 돌아가기</a>
  `);
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});