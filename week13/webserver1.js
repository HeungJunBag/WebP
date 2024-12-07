const http = require('http');

const server = http.createServer((req, res) => {
  // Content-Type을 'text/html'로 설정
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // HTML 콘텐츠 작성
  res.write("<h1>Hi! My Name is Heung-Jun</h1>");
  res.write("<p>Hello World!</p>");
  res.end(); // 응답 종료
});

// 서버 실행
server.listen(1000, () => {
  console.log("server listens on port 1000 !");
});