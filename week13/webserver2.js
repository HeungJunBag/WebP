const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
  const filename = "index.html";

  fs.readFile(filename, (err, data) => {
    if (err) {
      // 파일 읽기 에러 처리
      res.writeHead(500, { 'Content-Type': 'text/plain'});
      res.end("Error: Unable to load the requested file.");
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Content-Type을 'text/html'로 설정
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 읽은 HTML 파일 내용 전송
    res.write(data);

    // 추가적으로 응답에 텍스트를 추가
    res.write("<h1>Hi! My Name is Heung-Jun</h1>");
    res.write("<p>Hello World!</p>");
    
    // 응답 종료
    res.end();
  });
});

// 서버 실행
server.listen(3000, () => {
  console.log("server listens on port 3000 !");
});