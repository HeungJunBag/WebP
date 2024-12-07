const express = require('express');
const app = express();

app.use((req, res, next) => {
  const userAgent = req.header('User-Agent'); 
  const paramName = req.query.name || 'Anonymous'; 
  // const contentID = req.query.id;


  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Express 서버에서 응답한 결과</h1>');
  res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
  res.write(`<div><p>Param name: ${paramName}</p></div>`);

  // 이거 추가하는 거
  // res.write('<div><p>contentID: ${contentID}</p></div>');
  res.end();
});

// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});